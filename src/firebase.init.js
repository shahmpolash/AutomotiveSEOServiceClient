// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDmcTM6BHI5_jGMbVQ59-dnsNBvP2AfO0",
  authDomain: "seopro-8ba7a.firebaseapp.com",
  projectId: "seopro-8ba7a",
  storageBucket: "seopro-8ba7a.appspot.com",
  messagingSenderId: "865399584841",
  appId: "1:865399584841:web:80bb9118aad83b80216798"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;