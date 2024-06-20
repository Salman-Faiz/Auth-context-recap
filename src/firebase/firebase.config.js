// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFLZ-jNKk_fxgiF95qTE1mOCzN01kArac",
  authDomain: "auth-context-recap-c1be9.firebaseapp.com",
  projectId: "auth-context-recap-c1be9",
  storageBucket: "auth-context-recap-c1be9.appspot.com",
  messagingSenderId: "323472808917",
  appId: "1:323472808917:web:d596be0ecb9c31bb19fb5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;