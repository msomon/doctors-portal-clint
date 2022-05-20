// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOpqqG9s87VGTl7retKYDD3ja9UIKrM1g",
  authDomain: "doctors-portal-8b9ff.firebaseapp.com",
  projectId: "doctors-portal-8b9ff",
  storageBucket: "doctors-portal-8b9ff.appspot.com",
  messagingSenderId: "139363910779",
  appId: "1:139363910779:web:de844a041e97a883a58ede"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;