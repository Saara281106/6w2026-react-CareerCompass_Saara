import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP1hSFx_etdbwvfSwF8TZ33AqKQ-xJ0r0",
  authDomain: "career-compass-2e207.firebaseapp.com",
  projectId: "career-compass-2e207",
  storageBucket: "career-compass-2e207.firebasestorage.app",
  messagingSenderId: "944370677079",
  appId: "1:944370677079:web:1f83752b68b58f442cfa12",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
