// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAl-zSqTqiVqplX5vf3C92yqwyt-dfHfiE",
    authDomain: "react-coderhouse-f8d6b.firebaseapp.com",
    projectId: "react-coderhouse-f8d6b",
    storageBucket: "react-coderhouse-f8d6b.appspot.com",
    messagingSenderId: "783139775804",
    appId: "1:783139775804:web:f18ba162badf66f73aea39"

    //measurementId: "G-2TSF1S9SEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)