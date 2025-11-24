import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBwXHwqJtd8w5giF30PcHR7k5-9SU5mX44",
  authDomain: "learnlingo-c41dc.firebaseapp.com",
  databaseURL: "https://learnlingo-c41dc-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "learnlingo-c41dc",
  storageBucket: "learnlingo-c41dc.firebasestorage.app",
  messagingSenderId: "547755357731",
  appId: "1:547755357731:web:b37ef7c8717f2b3f65a396",
  measurementId: "G-WT9VM2HF1E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getDatabase(app);