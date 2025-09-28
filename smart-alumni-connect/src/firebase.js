// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Make sure this is imported

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpmp7yYNkKHj8Dxx5VbLLWEH64YUEyr6g",
  authDomain: "smart-alumni-connect.firebaseapp.com",
  projectId: "smart-alumni-connect",
  storageBucket: "smart-alumni-connect.firebasestorage.app",
  messagingSenderId: "917980121266",
  appId: "1:917980121266:web:8c3bf665a23ac2fe8361ab",
  measurementId: "G-326ZFG4XD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Export the auth instance to be used in other parts of your app
export { auth };
export const db = getFirestore(app); // Initialize and export Firestore