// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "search-for-real-estate.firebaseapp.com",
  projectId: "search-for-real-estate",
  storageBucket: "search-for-real-estate.appspot.com",
  messagingSenderId: "498473883143",
  appId: "1:498473883143:web:ec2ff9e21d16f184757ca2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
