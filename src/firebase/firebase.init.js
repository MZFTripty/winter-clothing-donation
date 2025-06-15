// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAjyfA2BCNKcbGBYmpDo-VUdAax8NQjXs",
  authDomain: "winter-clothing-donation-bfd4b.firebaseapp.com",
  projectId: "winter-clothing-donation-bfd4b",
  storageBucket: "winter-clothing-donation-bfd4b.firebasestorage.app",
  messagingSenderId: "825506132255",
  appId: "1:825506132255:web:14b768ff8e87ece391002a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);