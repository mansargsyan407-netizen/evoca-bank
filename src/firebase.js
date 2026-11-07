import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3g9uUXcBME-W4j1lmIiorIVtV_byyXkQ",
  authDomain: "evoca-bank-eef91.firebaseapp.com",
  projectId: "evoca-bank-eef91",
  databaseURL:
    import.meta.env.VITE_FIREBASE_DATABASE_URL ||
    "https://evoca-bank-eef91-default-rtdb.firebaseio.com",
  storageBucket: "evoca-bank-eef91.firebasestorage.app",
  messagingSenderId: "613960296574",
  appId: "1:613960296574:web:4042725010ec986e3d502f",
  measurementId: "G-FPGFT7NZ0R"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app); // default region՝ us-central1
export const realtimeDb = getDatabase(app);