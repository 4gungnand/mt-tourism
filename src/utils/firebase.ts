// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc-Xm-jqru4EBYwr1FJaRY9Xozj4AsjdM",
  authDomain: "muara-takus.firebaseapp.com",
  projectId: "muara-takus",
  storageBucket: "muara-takus.appspot.com",
  messagingSenderId: "768545308107",
  appId: "1:768545308107:web:9171663532a0127964ca4e",
  measurementId: "G-6F321320C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in the browser
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };

export const db = getFirestore(app);