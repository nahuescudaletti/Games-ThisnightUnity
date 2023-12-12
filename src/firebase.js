import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVBGYvdY3QRsyqnUpFq5zLzjx_JIO9HOI",
  authDomain: "games-thisnight.firebaseapp.com",
  projectId: "games-thisnight",
  storageBucket: "games-thisnight.appspot.com",
  messagingSenderId: "94490009668",
  appId: "1:94490009668:web:b566caf0cdfdd4f24c1c11",
  measurementId: "G-4W9Z19W374"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
