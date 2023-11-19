"use client";

const { createContext, useContext, useState } = require("react");
import { deleteCookie, setCookie } from "@/app/actions";
import { auth, db } from "@/firebase";
import { USERID_NAME } from "@/utils/constants";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const register = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const docRef = await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        role: "user",
      });

      await setCookie(USERID_NAME, userCredential.user.uid, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
      });

      getUserData(userCredential.user.uid);

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setCookie(USERID_NAME, userCredential.user.uid, {
        httpOnly: true,
        secure: process.env.NODE_ENV == "production",
      });

      getUserData(userCredential.user.uid);

      return true;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      await deleteCookie(USERID_NAME);
      setUser(null);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const getUserData = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setUser({
        id: uid,
        email: docSnap.data().email,
        name: docSnap.data().name,
      });
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      getUserData(user.uid);
    } else {
      setUser(null);
    }
  });

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
