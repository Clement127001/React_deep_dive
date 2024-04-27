// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-OsgdfyJKhSU56RMkfpVacR8q9RJSFjs",
  authDomain: "movagpt-e3877.firebaseapp.com",
  projectId: "movagpt-e3877",
  storageBucket: "movagpt-e3877.appspot.com",
  messagingSenderId: "593464378054",
  appId: "1:593464378054:web:6e3c061105c390d7280dc7",
  measurementId: "G-WHWMJ2ED8K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
