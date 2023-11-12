import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlYxcmgdsJTDdUzDy5j1TvVjAiiKQ2rw8",
  authDomain: "melon-page.firebaseapp.com",
  projectId: "melon-page",
  storageBucket: "melon-page.appspot.com",
  messagingSenderId: "389012227605",
  appId: "1:389012227605:web:92d1b9d6b41c1ca76a301c",
  measurementId: "G-WGVD22QWR3",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
