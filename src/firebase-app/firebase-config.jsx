import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCUYq4hTkNRxj4AQAEXFSYGtcifFLvuml4",
  authDomain: "huky-blogging.firebaseapp.com",
  projectId: "huky-blogging",
  storageBucket: "huky-blogging.appspot.com",
  messagingSenderId: "14476184270",
  appId: "1:14476184270:web:74d477c2bd2d6e931bde9f",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
