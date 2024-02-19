// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqk-tEJFfC3oqpa9W8dbZkIMI7IIicbII",
  authDomain: "netflixgpt-407d6.firebaseapp.com",
  projectId: "netflixgpt-407d6",
  storageBucket: "netflixgpt-407d6.appspot.com",
  messagingSenderId: "1015413854652",
  appId: "1:1015413854652:web:44b8b68214570b6d561bb9",
  measurementId: "G-2574KEL9KW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();