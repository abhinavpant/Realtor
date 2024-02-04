// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reltor-7f641.firebaseapp.com",
  projectId: "reltor-7f641",
  storageBucket: "reltor-7f641.appspot.com",
  messagingSenderId: "427295722832",
  appId: "1:427295722832:web:88b745bacb1c141b2fb055"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);