import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

/*const firebaseConfig = {
  apiKey: "AIzaSyAlYxcmgdsJTDdUzDy5j1TvVjAiiKQ2rw8",
  authDomain: "melon-page.firebaseapp.com",
  projectId: "melon-page",
  storageBucket: "melon-page.appspot.com",
  messagingSenderId: "389012227605",
  appId: "1:389012227605:web:92d1b9d6b41c1ca76a301c",
  measurementId: "G-WGVD22QWR3",
};*/

const firebaseConfig = {
  apiKey: "AIzaSyDQKaJPVbLx4ZkILRjsi6vK8iEkiBNs4Jg",
  authDomain: "dulce-3b2fb.firebaseapp.com",
  projectId: "dulce-3b2fb",
  storageBucket: "dulce-3b2fb.appspot.com",
  messagingSenderId: "50087603402",
  appId: "1:50087603402:web:da91d0c53706fd41b3d833",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
