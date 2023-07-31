// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGhaGYTIps08uTU7zhMaADYS4VxfCRUPI",
  authDomain: "chat-app-232b3.firebaseapp.com",
  projectId: "chat-app-232b3",
  storageBucket: "chat-app-232b3.appspot.com",
  messagingSenderId: "655363414671",
  appId: "1:655363414671:web:28f6a52964e93544d96efa",
  measurementId: "G-TLPQENMEZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app)