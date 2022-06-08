import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2zUJ5bEH78uE9LRicMmikvA_8BR7wWsE",
  authDomain: "clicker-click.firebaseapp.com",
  projectId: "clicker-click",
  storageBucket: "clicker-click.appspot.com",
  messagingSenderId: "86490241705",
  appId: "1:86490241705:web:66a6ddc5e31d246b7527b8",
  measurementId: "G-J8P730SVY9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
