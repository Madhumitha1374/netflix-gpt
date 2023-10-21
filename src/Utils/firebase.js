// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCO1FIsQn5G10t8wgSbL9aO4u4WHryHK8",
  authDomain: "netflix-gpt-35079.firebaseapp.com",
  projectId: "netflix-gpt-35079",
  storageBucket: "netflix-gpt-35079.appspot.com",
  messagingSenderId: "887330739923",
  appId: "1:887330739923:web:9502ac02e03794e3c2e626",
  measurementId: "G-PWF9KQM8SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();