// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "vite-contact-68569.firebaseapp.com",
  projectId: "vite-contact-68569",
  storageBucket: "vite-contact-68569.appspot.com",
  messagingSenderId: "492151913660",
  appId: "1:492151913660:web:4d2be39876de6568e664b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);