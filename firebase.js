// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5L-R_j_b3JWk49AWki8vkeU_N-9gBIhY",
  authDomain: "inventory-management-5a0a5.firebaseapp.com",
  projectId: "inventory-management-5a0a5",
  storageBucket: "inventory-management-5a0a5.appspot.com",
  messagingSenderId: "341447828183",
  appId: "1:341447828183:web:6d11d26f3dc9a4c68c0692",
  measurementId: "G-2G0QVGQN6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {app, firestore}