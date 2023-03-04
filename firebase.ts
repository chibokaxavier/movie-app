// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWYEPRa6FP5jyJtJqKE7TiBhi9FIhVYeI",
  authDomain: "movie-app-fbe3e.firebaseapp.com",
  projectId: "movie-app-fbe3e",
  storageBucket: "movie-app-fbe3e.appspot.com",
  messagingSenderId: "404160870656",
  appId: "1:404160870656:web:3d6a0af83eb814006e1be5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }