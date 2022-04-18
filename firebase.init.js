// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz7HTWMo4yoQFaCu-rI8vSGslhg-HZuQU",
  authDomain: "ultimate-wild.firebaseapp.com",
  projectId: "ultimate-wild",
  storageBucket: "ultimate-wild.appspot.com",
  messagingSenderId: "463959569177",
  appId: "1:463959569177:web:ed1f34ce38c56df8e10b88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth