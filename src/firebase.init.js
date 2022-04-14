// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYufeo0Dho4QYbzOtPZU7rhQ9nZtk38-M",
  authDomain: "ema-john-simple-dfa39.firebaseapp.com",
  projectId: "ema-john-simple-dfa39",
  storageBucket: "ema-john-simple-dfa39.appspot.com",
  messagingSenderId: "366411250946",
  appId: "1:366411250946:web:e7e4a36fd8525396d7561b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;