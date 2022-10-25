// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADQVy4dbH1M4pS5KXthEPfA-JFwdJxQOQ",
  authDomain: "entertain-me-aman.firebaseapp.com",
  projectId: "entertain-me-aman",
  storageBucket: "entertain-me-aman.appspot.com",
  messagingSenderId: "167775832287",
  appId: "1:167775832287:web:9874d5b92d8c925979c16a",
  measurementId: "G-P8NK9B97JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
