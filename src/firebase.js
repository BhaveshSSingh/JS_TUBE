import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDbwERy-VhX1FhWHIiPdxUYbTCK7mzIyc",
  authDomain: "jscafe.firebaseapp.com",
  projectId: "jscafe",
  storageBucket: "jscafe.appspot.com",
  messagingSenderId: "894129409137",
  appId: "1:894129409137:web:bbc2bbee8121d0b38a5fd0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { db, app, auth, provider };
