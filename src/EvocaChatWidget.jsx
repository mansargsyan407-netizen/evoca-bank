import { useState, useEffect, useRef } from "react";
import {
  MessageCircle, X, Send, ArrowLeft, User as UserIcon, ShieldCheck,
  Mic, MicOff, Square, Play, Pause, Phone, PhoneOff, Video, VideoOff,
  Trash2, MapPin,
} from "lucide-react";
import {
  collection, doc, onSnapshot, addDoc, deleteDoc, setDoc, updateDoc,
  runTransaction, serverTimestamp, orderBy, query, where,
} from "firebase/firestore";
import AgoraRTC from "agora-rtc-sdk-ng";
import { db } from "./firebase";
import { useAuth } from "./AuthContext";

/* ---------- Կարգավորումներ ---------- */
const THEME = {
  "--eb-primary": "#2b1b5a",
  "--eb-accent": "#ff6b2c",
  "--eb-soft": "#f6f4fb",
};
const MAX_RECORD_MS = 20000;
const RING_TIMEOUT_MS = 30000;
const ENDED = ["ended", "declined", "missed"];

/* ---------- Agora App ID (Testing Mode) ---------- */
const AGORA_APP_ID = "68fb5f54cfa7407aabe0763c705aa345";

// ⚠️ ԱՅՍՏԵՂ ԳՐԻՐ ՔՈ GMAIL-Ը, ՈՐՊԵՍԶԻ ԵՐԲ ՄՈՒՏՔ ԳՈՐԾԵՍ, ԼԻՆԵՍ ԱԴՄԻՆ (Operator)
const ADMIN_EMAIL = "mansargsyan407@gmail.com"; 

const blobToBase64 = (blob) =>
  new Promise((res, rej) => {
    const r = new FileReader();
    r.onloadend = () => res(r.result);
    r.onerror = rej;
    r.readAsDataURL(blob);
  });

const mapsUrl = (l) => `https://www.google.com/maps?q=${l.latitude},${l.longitude}`;
const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

const bubble = (mine) =>
  mine
    ? "bg-[var(--eb-primary)] text-white rounded-br-sm"
    : "bg-white text-[var(--eb-primary)] border border-gray-200 rounded-bl-sm";

/* ---------- Bubbles ---------- */
function VoiceBubble({ dataUrl, mine }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  return (
    <div className={`flex items-center gap-2 rounded-2xl px-3 py-2 ${bubble(mine)}`}>
      <button
        type="button"
        onClick={() => (playing ? ref.current?.pause() : ref.current?.play())}
        className={`flex h-7 w-7 items-center justify-center rounded-full ${mine ? "bg-white/20" : "bg-[var(--eb-soft)]"}`}
        aria-label={playing ? "Դադար" : "Նվագարկել"}
      >
        {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
      </button>
      <audio ref={ref} src={dataUrl} className="hidden"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />
      <span className="text-xs font-semibold">Ձայնային հաղորդագրություն</span>
    </div>
  );
}

function LocationBubble({ m, mine }) {
  return (
    <a href={mapsUrl(m)} target="_blank" rel="noreferrer"
      className={`flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold ${bubble(mine)}`}>
      <MapPin className="h-4 w-4" />
      <span>
        Գտնվելու վայր
        {typeof m.accuracy === "number" && <span className="opacity-70"> (±{Math.round(m.accuracy)} մ)</span>}
        <span className="block text-[10px] font-medium underline opacity-80">Բացել Google Maps-ում</span>
      </span>
    </a>
  );
}

/* ---------- Widget ---------- */
export default function EvocaChatWidget() {
  const { user, login } = useAuth();
  const [isOperator, setIsOperator] = useState(false);
  const [open, setOpen] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [incoming, setIncoming] = useState(null);
  const [activeCall, setActiveCall] = useState(null);
  const [callError, setCallError] = useState(null);
  const [muted, setMuted] = useState(false);
  const [cameraOff, setCameraOff] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const bottomRef = useRef(null);
  const recorderRef = useRef(null);
  const chunksRef = useRef([]);
  const recTimeoutRef = useRef(null);
  const clientRef = useRef(null);
  const tracksRef = useRef([]);
  const callIdRef = useRef(null);
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);

  const convId = isOperator ? selected?.uid : user?.uid;

  // Օպերատորի/Ադմինի ստուգում (ավելացվել է նաև կոնկրետ Gmail ստուգում)
  useEffect(() => {
    let alive = true;
    (async () => {
      if (!user) return setIsOperator(false);
      
      // Եթե մուտք գործողի էլ. փոստը համընկնում է ADMIN_EMAIL-ի հետ, միանգամից դարձնում ենք օպերատոր
      if (user.email === ADMIN_EMAIL) {
        if (alive) setIsOperator(true);
        return;
      }

      if (typeof user.getIdTokenResult === "function") {
        const r = await user.getIdTokenResult();
        if (alive) setIsOperator(r.claims.operator === true);
      } else setIsOperator(user.isOperator === true);
    })();
    return () => { alive = false; };
  }, [user]);

  // Հաճախորդի տվյալների գրանցում բազայում, եթե օպերատոր չէ
  useEffect(() => {
    if (!open || !user || isOperator) return;
    setDoc(doc(db, "users", user.uid), {
      uid: user.uid, email: user.email || "", name: user.displayName || user.name || user.email || "",
      picture: user.photoURL || user.picture || "",
    }, { merge: true }).catch(console.error);
  }, [open, user, isOperator]);

  // Հաճախորդների ցանկի թարմացում օպերատորի համար (բացառելով հենց օպերատորին ցանկից)
  useEffect(() => {
    if (!open || !isOperator) return;
    return onSnapshot(collection(db, "users"), (snap) => {
      const list = snap.docs
        .map((d) => d.data())
        .filter((u) => u.email !== ADMIN_EMAIL); // Օպերատորին չենք ցույց տալիս հաճախորդների մեջ
      
      list.sort((a, b) => (b.lastMessageAt?.seconds || 0) - (a.lastMessageAt?.seconds || 0));
      setCustomers(list);
    });
  }, [open, isOperator]);

  useEffect(() => {
    if (!open || !convId) return setMessages([]);
    const q = query(collection(db, "conversations", convId, "messages"), orderBy("createdAt", "asc"));
    return onSnapshot(q, (snap) => setMessages(snap.docs.map((d) => ({ id: d.id, ...d.data() }))));
  }, [open, convId]);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = async (payload, preview) => {
    await addDoc(collection(db, "conversations", convId, "messages"), {
      ...payload, sender: isOperator ? "operator" : "customer", createdAt: serverTimestamp(),
    });
    await setDoc(doc(db, "users", convId),
      { uid: convId, lastMessageAt: serverTimestamp(), lastMessageText: preview }, { merge: true });
  };

  const sendText = async (e) => {
    e.preventDefault();
    const t = text.trim();
    if (!t || !convId) return;
    setText("");
    await send({ type: "text", text: t }, t).catch(console.error);
  };

  const deleteMessage = (id) =>
    deleteDoc(doc(db, "conversations", convId, "messages", id)).catch(console.error);

  const shareLocation = () => {
    if (!navigator.geolocation) return setCallError("Ձեր browser-ը չի աջակցում գտնվելու վայրի որոշումը։");
    if (!window.confirm("Ուղարկե՞լ ձեր ընթացիկ գտնվելու վայրը բանկի աշխատակցին։")) return;
    navigator.geolocation.getCurrentPosition(
      (p) => {
        const { latitude, longitude, accuracy } = p.coords;
        send({ type: "location", latitude, longitude, accuracy }, "📍 Գտնվելու վայր").catch(console.error);
      },
      () => setCallError("Չհաջողվեց որոշել գտնվելու վայրը։ Ստուգեք թույլտվությունը։"),
      { enableHighAccuracy: true, timeout: 15000 }
    );
  };

  const startRecording = async () => {
    if (!convId) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      recorderRef.current = rec;
      chunksRef.current = [];
      rec.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data);
      rec.onstop = async () => {
        stream.getTracks().forEach((t) => t.stop());
        clearTimeout(recTimeoutRef.current);
        setIsRecording(false);
        setUploading(true);
        try {
          const dataUrl = await blobToBase64(new Blob(chunksRef.current, { type: "audio/webm" }));
          await send({ type: "voice", audioData: dataUrl }, "🎤 Ձայնային հաղորդագրություն");
        } catch (err) {
          console.error("Voice save failed:", err);
        } finally {
          setUploading(false);
        }
      };
      rec.start();
      setIsRecording(true);
      recTimeoutRef.current = setTimeout(() => rec.state === "recording" && rec.stop(), MAX_RECORD_MS);
    } catch (err) {
      setCallError("Խոսափողի մուտքը արգելված է։ Թույլատրեք այն browser-ի կարգավորումներում։");
    }
  };
  const stopRecording = () => recorderRef.current?.state === "recording" && recorderRef.current.stop();

  /* ---------- Agora ---------- */
  const leaveChannel = async () => {
    try {
      tracksRef.current.forEach((t) => { t.stop(); t.close(); });
    } catch (e) {
      console.error("Error stopping tracks:", e);
    }
    tracksRef.current = [];
    const c = clientRef.current;
    clientRef.current = null;
    if (c) await c.leave().catch(() => {});
    setMuted(false);
    setCameraOff(false);
  };

  const cleanupCall = async () => {
    callIdRef.current = null;
    await leaveChannel();
    setActiveCall(null);
    setSeconds(0);
  };

  const hangUp = async () => {
    const id = callIdRef.current;
    if (id) {
      await updateDoc(doc(db, "calls", id), { status: "ended" }).catch(() => {});
    }
    await cleanupCall();
  };

  const failCall = async (err) => {
    console.error("[call] failed:", err);
    const errMsg = err?.message || err?.name || "";
    if (/permission|notallowed/i.test(errMsg)) {
      setCallError("Խոսափողի/տեսախցիկի մուտքը արգելված է կամ զբաղված է այլ հավելվածով։");
    } else {
      setCallError("Չհաջողվեց միանալ զանգին։ Փորձեք նորից։");
    }
    await hangUp();
  };

  const joinChannel = async (channel, type) => {
    try {
      const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
      clientRef.current = client;

      client.on("user-published", async (ru, media) => {
        await client.subscribe(ru, media);
        if (media === "video" && remoteVideoRef.current) ru.videoTrack.play(remoteVideoRef.current);
        if (media === "audio") ru.audioTrack.play();
      });
      client.on("user-left", () => hangUp());

      await client.join(AGORA_APP_ID, channel, null, null);

      const tracks = [await AgoraRTC.createMicrophoneAudioTrack()];
      if (type === "video") {
        const cam = await AgoraRTC.createCameraVideoTrack();
        tracks.push(cam);
        if (localVideoRef.current) cam.play(localVideoRef.current);
      }
      tracksRef.current = tracks;
      await client.publish(tracks);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    if (!user) return;
    const base = [collection(db, "calls"), where("status", "==", "ringing")];
    const q = isOperator
      ? query(...base, where("initiator", "==", "customer"))
      : query(...base, where("customerId", "==", user.uid), where("initiator", "==", "operator"));
    return onSnapshot(q, (snap) => {
      const fresh = snap.docs.filter((d) => {
        const t = d.data().createdAt?.toMillis?.();
        return !t || Date.now() - t < RING_TIMEOUT_MS + 5000;
      });
      setIncoming(fresh[0] ? { id: fresh[0].id, ...fresh[0].data() } : null);
    });
  }, [user, isOperator]);

  useEffect(() => {
    if (!activeCall?.id) return;
    return onSnapshot(doc(db, "calls", activeCall.id), (snap) => {
      const d = snap.data();
      if (!d || ENDED.includes(d.status)) {
        if (d?.status === "declined") setCallError("Զանգը մերժվեց։");
        if (d?.status === "missed") setCallError("Զանգին չպատասխանեցին։");
        cleanupCall();
      } else if (d.status === "active") {
        setActiveCall((p) => (p && p.status !== "active" ? { ...p, status: "active" } : p));
      }
    });
  }, [activeCall?.id]);

  useEffect(() => {
    if (activeCall?.status !== "ringing" || !activeCall.isCaller) return;
    const t = setTimeout(
      () => updateDoc(doc(db, "calls", activeCall.id), { status: "missed" }).catch(() => {}),
      RING_TIMEOUT_MS
    );
    return () => clearTimeout(t);
  }, [activeCall?.status, activeCall?.id, activeCall?.isCaller]);

  useEffect(() => {
    if (activeCall?.status !== "active") return;
    setSeconds(0);
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [activeCall?.status]);

  useEffect(() => () => { leaveChannel(); }, []);

  const startCall = async (type) => {
    if (!convId || activeCall) return;
    setCallError(null);
    let ref = null;
    try {
      ref = await addDoc(collection(db, "calls"), {
        customerId: convId,
        initiator: isOperator ? "operator" : "customer",
        type,
        status: "ringing",
        createdAt: serverTimestamp(),
      });
      callIdRef.current = ref.id;
      setActiveCall({ id: ref.id, type, status: "ringing", isCaller: true });
      await joinChannel(ref.id, type);
    } catch (err) {
      if (ref) {
        await updateDoc(doc(db, "calls", ref.id), { status: "ended" }).catch(() => {});
      }
      await failCall(err);
    }
  };

  const acceptCall = async () => {
    const call = incoming;
    if (!call) return;
    setCallError(null);
    try {
      await runTransaction(db, async (tx) => {
        const ref = doc(db, "calls", call.id);
        const s = await tx.get(ref);
        if (s.data()?.status !== "ringing") throw new Error("taken");
        tx.update(ref, { status: "active", ...(isOperator ? { operatorId: user.uid } : {}) });
      });
    } catch (err) {
      setIncoming(null);
      return setCallError("Այս զանգն արդեն ընդունվել է կամ ավարտվել է։");
    }
    try {
      callIdRef.current = call.id;
      setActiveCall({ id: call.id, type: call.type, status: "active", isCaller: false });
      setIncoming(null);
      if (isOperator) {
        setSelected(customers.find((c) => c.uid === call.customerId) || { uid: call.customerId, name: "Հաճախորդ" });
        setOpen(true);
      }
      await joinChannel(call.id, call.type);
    } catch (err) {
      await failCall(err);
    }
  };

  const declineCall = async () => {
    if (!incoming) return;
    await updateDoc(doc(db, "calls", incoming.id), { status: "declined" }).catch(() => {});
    setIncoming(null);
  };

  const toggleMute = () => {
    const t = tracksRef.current.find((x) => x.trackMediaType === "audio");
    if (t) { t.setEnabled(muted); setMuted(!muted); }
  };
  const toggleCamera = () => {
    const t = tracksRef.current.find((x) => x.trackMediaType === "video");
    if (t) { t.setEnabled(cameraOff); setCameraOff(!cameraOff); }
  };

  if (!user) {
    return (
      <button
        onClick={login}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6b2c] text-white shadow-xl hover:brightness-95"
        aria-label="Մուտք գործել՝ աջակցության չաթի համար"
        title="Մուտք գործեք՝ աջակցության չաթի համար"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  const iconBtn = "flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white";
  const ctrlBtn = "flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25";

  return (
    <div style={THEME}>
      {callError && (
        <div role="alert" className="fixed bottom-28 right-6 z-[80] w-72 rounded-2xl border border-red-200 bg-red-50 p-3 shadow-xl">
          <p className="text-xs font-semibold text-red-700">{callError}</p>
          <button onClick={() => setCallError(null)} className="mt-2 text-[11px] font-semibold text-red-500 underline">Փակել</button>
        </div>
      )}

      {incoming && !activeCall && (
        <div className="fixed bottom-28 right-6 z-[60] w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
          <p className="text-xs font-semibold text-gray-500">{incoming.type === "video" ? "Մուտքային տեսազանգ" : "Մուտքային զանգ"}</p>
          <p className="mt-1 text-sm font-bold text-[var(--eb-primary)]">
            {isOperator ? customers.find((c) => c.uid === incoming.customerId)?.name || "Հաճախորդ" : "Evocabank աշխատակից"}
          </p>
          <div className="mt-3 flex gap-2">
            <button onClick={acceptCall} className="flex flex-1 items-center justify-center gap-1 rounded-full bg-emerald-600 py-2 text-xs font-bold text-white hover:bg-emerald-700">
              <Phone className="h-4 w-4" /> Ընդունել
            </button>
            <button onClick={declineCall} className="flex flex-1 items-center justify-center gap-1 rounded-full bg-red-600 py-2 text-xs font-bold text-white hover:bg-red-700">
              <PhoneOff className="h-4 w-4" /> Մերժել
            </button>
          </div>
        </div>
      )}

      {activeCall && (
        <div className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-[#140d2e]/90">
          <p className="mb-3 text-sm font-semibold text-white/80">
            {activeCall.status === "ringing" ? "Զանգում է..." : fmt(seconds)}
          </p>
          {activeCall.type === "video" ? (
            <div className="relative h-[70vh] w-[92vw] max-w-3xl overflow-hidden rounded-2xl bg-[#1d1442]">
              <div ref={remoteVideoRef} className="h-full w-full" />
              <div ref={localVideoRef} className="absolute bottom-4 right-4 h-32 w-24 overflow-hidden rounded-xl border-2 border-white/30 bg-[#2b1b5a] sm:h-40 sm:w-32" />
            </div>
          ) : (
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/10">
              <Phone className="h-12 w-12 text-white" />
            </div>
          )}
          <div className="mt-6 flex items-center gap-4">
            <button onClick={toggleMute} className={ctrlBtn} aria-label={muted ? "Միացնել խոսափողը" : "Անջատել խոսափողը"}>
              {muted ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </button>
            {activeCall.type === "video" && (
              <button onClick={toggleCamera} className={ctrlBtn} aria-label={cameraOff ? "Միացնել տեսախցիկը" : "Անջատել տեսախցիկը"}>
                {cameraOff ? <VideoOff className="h-5 w-5" /> : <Video className="h-5 w-5" />}
              </button>
            )}
            <button onClick={hangUp} className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700" aria-label="Ավարտել զանգը">
              <PhoneOff className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--eb-accent)] text-white shadow-xl transition hover:brightness-95 active:scale-95"
        aria-label="Աջակցություն"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {open && (
        <div className={`fixed bottom-24 right-6 z-50 flex h-[520px] w-[92vw] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl ${isOperator ? "max-w-[640px]" : "max-w-[380px]"}`}>
          {isOperator && (
            <div className={`w-full flex-col border-r border-gray-100 sm:flex sm:w-64 ${selected ? "hidden" : "flex"}`}>
              <div className="bg-[var(--eb-primary)] px-4 py-3 text-sm font-bold text-white">Հաճախորդներ ({customers.length})</div>
              <div className="flex-1 overflow-y-auto">
                {customers.length === 0 && <p className="p-4 text-xs text-gray-500">Դեռ հաճախորդներ չկան</p>}
                {customers.map((u) => (
                  <button key={u.uid} onClick={() => setSelected(u)}
                    className={`flex w-full items-center gap-2 border-b border-gray-50 px-3 py-3 text-left hover:bg-[var(--eb-soft)] ${selected?.uid === u.uid ? "bg-[var(--eb-soft)]" : ""}`}>
                    {u.picture ? (
                      <img src={u.picture} alt="" className="h-8 w-8 shrink-0 rounded-full object-cover" />
                    ) : (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200"><UserIcon className="h-4 w-4 text-gray-500" /></div>
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-bold text-[var(--eb-primary)]">{u.name || u.email}</p>
                      <p className="truncate text-[11px] text-gray-500">{u.lastMessageText || u.email}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className={`min-w-0 flex-1 flex-col ${isOperator && !selected ? "hidden sm:flex" : "flex"}`}>
            <div className="flex items-center justify-between gap-2 bg-[var(--eb-primary)] px-4 py-3 text-white">
              <div className="flex min-w-0 items-center gap-2">
                {isOperator && (
                  <button onClick={() => setSelected(null)} className="sm:hidden" aria-label="Հետ"><ArrowLeft className="h-4 w-4" /></button>
                )}
                <span className="truncate text-sm font-bold">
                  {isOperator ? selected?.name || "Ընտրեք հաճախորդ" : "Evocabank աջակցություն"}
                </span>
              </div>
              {convId && !activeCall && (
                <div className="flex items-center gap-1">
                  {!isOperator && (
                    <button onClick={shareLocation} className={iconBtn} aria-label="Ուղարկել գտնվելու վայրը" title="Ուղարկել գտնվելու վայրը">
                      <MapPin className="h-4 w-4" />
                    </button>
                  )}
                  <button onClick={() => startCall("voice")} className={iconBtn} aria-label="Զանգ"><Phone className="h-4 w-4" /></button>
                  <button onClick={() => startCall("video")} className={iconBtn} aria-label="Տեսազանգ"><Video className="h-4 w-4" /></button>
                </div>
              )}
            </div>

            {!isOperator && (
              <div className="flex items-start gap-2 bg-[var(--eb-soft)] px-3 py-2 text-[11px] leading-snug text-[var(--eb-primary)]">
                <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>Երբեք մի հայտնեք քարտի PIN-ը, CVV-ն կամ մեկանգամյա կոդերը։ Բանկի աշխատակիցը դրանք չի հարցնի։</span>
              </div>
            )}

            <div className="flex-1 space-y-2 overflow-y-auto bg-slate-50 p-3">
              {!convId && <p className="mt-10 text-center text-xs text-gray-500">Ընտրեք հաճախորդին ձախ ցուցակից՝ զրույցը սկսելու համար</p>}
              {convId && !isOperator && messages.length === 0 && (
                <p className="mt-10 text-center text-xs text-gray-500">Բարև։ Ինչո՞վ կարող ենք օգնել։</p>
              )}
              {messages.map((m) => {
                const mine = m.sender === (isOperator ? "operator" : "customer");
                return (
                  <div key={m.id} className={`group flex items-center gap-1.5 ${mine ? "justify-end" : "justify-start"}`}>
                    {mine && (
                      <button type="button" onClick={() => deleteMessage(m.id)} aria-label="Ջնջել"
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-gray-400 opacity-0 transition-opacity hover:bg-red-50 hover:text-red-600 focus-visible:opacity-100 group-hover:opacity-100">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    )}
                    {m.type === "voice" ? (
                      <VoiceBubble dataUrl={m.audioData} mine={mine} />
                    ) : m.type === "location" ? (
                      <LocationBubble m={m} mine={mine} />
                    ) : (
                      <div className={`max-w-[75%] break-words rounded-2xl px-3 py-2 text-xs font-medium ${bubble(mine)}`}>{m.text}</div>
                    )}
                  </div>
                );
              })}
              <div ref={bottomRef} />
            </div>

            {convId && (
              <form onSubmit={sendText} className="flex items-center gap-2 border-t border-gray-100 bg-white p-2">
                <input
                  type="text" value={text} onChange={(e) => setText(e.target.value)}
                  placeholder="Գրեք հաղորդագրություն..."
                  className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-xs outline-none focus:border-[var(--eb-primary)]"
                />
                <button type="button" onClick={isRecording ? stopRecording : startRecording} disabled={uploading}
                  aria-label={isRecording ? "Կանգնեցնել ձայնագրումը" : "Ձայնագրել"}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${isRecording ? "animate-pulse bg-red-600" : "bg-[var(--eb-primary)] hover:brightness-110"}`}>
                  {isRecording ? <Square className="h-3.5 w-3.5" /> : <Mic className="h-3.5 w-3.5" />}
                </button>
                <button type="submit" disabled={!text.trim() || uploading} aria-label="Ուղարկել"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--eb-accent)] text-white hover:brightness-95 disabled:opacity-40">
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}