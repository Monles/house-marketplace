// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFb986DuP6k7PPNNF5LK16fxHJUN4YXc4",
  authDomain: "house-marketplace-app-126a2.firebaseapp.com",
  projectId: "house-marketplace-app-126a2",
  storageBucket: "house-marketplace-app-126a2.appspot.com",
  messagingSenderId: "182464394934",
  appId: "1:182464394934:web:4af2848c24a57fdb525817",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
