 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0xtD_JPWlFmTRPGpiBhFfkI-Juh0mlLE",
    authDomain: "jmn-web.firebaseapp.com",
    projectId: "jmn-web",
    storageBucket: "jmn-web.appspot.com",
    messagingSenderId: "414552706429",
    appId: "1:414552706429:web:298cfe32cd5c0558501014",
    measurementId: "G-P4RXEM4F0J"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const auth = getAuth();
const storage = getStorage();


export { auth, storage};

