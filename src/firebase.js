import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3g9uUXcBME-W4jIlmIiorIVtV_byyXkQ",
  authDomain: "evoca-bank-eef91.firebaseapp.com",
  projectId: "evoca-bank-eef91",
  storageBucket: "evoca-bank-eef91.firebasestorage.app",
  messagingSenderId: "613960296574",
  appId: "1:613960296574:web:01cc113382ac3b473d502f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);