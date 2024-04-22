// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxk5F5KC9kPZhmkJ7nj8QfrbdYnGW8RPE",
  authDomain: "zesty-zing-13187.firebaseapp.com",
  projectId: "zesty-zing-13187",
  storageBucket: "zesty-zing-13187.appspot.com",
  messagingSenderId: "864587835328",
  appId: "1:864587835328:web:36f376901309eacf7d8a25",
  measurementId: "G-H6FTYB1LD1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
