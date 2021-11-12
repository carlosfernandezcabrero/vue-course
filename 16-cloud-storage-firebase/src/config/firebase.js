import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCjIYXjfBUg104PTHua2QwiD7yW81Qk2o",
  authDomain: "cloud-storage-417e9.firebaseapp.com",
  projectId: "cloud-storage-417e9",
  storageBucket: "cloud-storage-417e9.appspot.com",
  messagingSenderId: "214991039652",
  appId: "1:214991039652:web:521c65f2f4981f0b7d4a31",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);

// Providers
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// Services
export const storage = firebase.storage(app);
export const auth = firebase.auth(app);
export const firestore = firebase.firestore(app);
