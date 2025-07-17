// Firebase config and initialization
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNe12p5GQhX3dx_Wo1P1QuuPyxE04T7Q4",
  authDomain: "vyana-73290.firebaseapp.com",
  projectId: "vyana-73290",
  storageBucket: "vyana-73290.firebasestorage.app",
  messagingSenderId: "797984085681",
  appId: "1:797984085681:web:552ff10364c7732add7490",
  measurementId: "G-B8S2GSXRNF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
