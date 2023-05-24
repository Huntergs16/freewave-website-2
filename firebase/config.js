// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD62bwYaYq0SaVRCbwqLIkKfX3pynNMybA",
    authDomain: "freewave-stock.firebaseapp.com",
    projectId: "freewave-stock",
    storageBucket: "freewave-stock.appspot.com",
    messagingSenderId: "1029542483474",
    appId: "1:1029542483474:web:02c7850c9dd72ff861eacb",
    measurementId: "G-SRPKVJMMDK",
};

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Create a reference with an initial file path and name
const storage = getStorage();


const db = getFirestore(firebase_app);

export { db, storage };