// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3kPkNSMvsXeFmABEFdX0yXyHEOW84izI",
  authDomain: "todo-app-yink.firebaseapp.com",
  projectId: "todo-app-yink",
  storageBucket: "todo-app-yink.appspot.com",
  messagingSenderId: "830521855751",
  appId: "1:830521855751:web:68e2f89fa3366a21a1bfa2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
