// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmp9kPSasS2OJjWTbilRwhG_mBwucm-dA",
  authDomain: "modern-essentials.firebaseapp.com",
  projectId: "modern-essentials",
  storageBucket: "modern-essentials.firebasestorage.app",
  messagingSenderId: "1042217494398",
  appId: "1:1042217494398:web:1b133373833a433806f52f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);