import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6hD7jnD0qEfpe8LTFvDdoQckNACtAHTk",
  authDomain: "chatgpt-messenger-fbb8a.firebaseapp.com",
  projectId: "chatgpt-messenger-fbb8a",
  storageBucket: "chatgpt-messenger-fbb8a.appspot.com",
  messagingSenderId: "792663850601",
  appId: "1:792663850601:web:ca4f30a5d2d6791be92cf8",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
