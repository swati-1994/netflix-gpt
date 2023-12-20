// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgJevruAE3X1x6S8tT9UGXlPnYvhy38MY",
  authDomain: "netflixgpt-ac9ce.firebaseapp.com",
  projectId: "netflixgpt-ac9ce",
  storageBucket: "netflixgpt-ac9ce.appspot.com",
  messagingSenderId: "730781856923",
  appId: "1:730781856923:web:7b7df0336507955af8023e",
  measurementId: "G-V2HD4MWPKH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
