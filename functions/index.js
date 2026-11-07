const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const admin = require("firebase-admin");
const { RtcTokenBuilder, RtcRole } = require("agora-token");

admin.initializeApp();
const APP_ID = defineSecret("AGORA_APP_ID");
const APP_CERT = defineSecret("AGORA_APP_CERTIFICATE");

exports.getAgoraToken = onCall({ secrets: [APP_ID, APP_CERT] }, async (req) => {
  if (!req.auth) throw new HttpsError("unauthenticated", "Login required");

  const channel = req.data?.channel;
  if (typeof channel !== "string" || !channel) {
    throw new HttpsError("invalid-argument", "channel required");
  }

  const snap = await admin.firestore().doc(`calls/${channel}`).get();
  if (!snap.exists) throw new HttpsError("not-found", "Call not found");
  const call = snap.data();

  const isOperator = req.auth.token.operator === true;
  if (!isOperator && call.customerId !== req.auth.uid) {
    throw new HttpsError("permission-denied", "Not your call");
  }
  if (["ended", "declined", "missed"].includes(call.status)) {
    throw new HttpsError("failed-precondition", "Call finished");
  }

  const uid = Math.floor(Math.random() * 2 ** 31) + 1;
  const ttl = 3600;
  const token = RtcTokenBuilder.buildTokenWithUid(
    APP_ID.value(), APP_CERT.value(), channel, uid, RtcRole.PUBLISHER, ttl, ttl
  );
  return { token, uid, appId: APP_ID.value() };
});