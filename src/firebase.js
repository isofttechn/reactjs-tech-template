// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// const firebase = require('firebase/app');
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBhMc9ZHiRCLJsjdjoh_Aj50q7d8mMsDrc",
    authDomain: "mern-ecommerce-70e73.firebaseapp.com",
    databaseURL: "https://mern-ecommerce-70e73.firebaseio.com",
    projectId: "mern-ecommerce-70e73",
    storageBucket: "mern-ecommerce-70e73.appspot.com",
    messagingSenderId: "253665266489",
    appId: "1:253665266489:web:64ac3bf9977aa97c26f6e8",
    measurementId: "G-KRZES1RFT3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

