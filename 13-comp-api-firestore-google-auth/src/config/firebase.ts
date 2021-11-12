import { useAuth } from "@vueuse/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig: Record<string, string> = {
  apiKey: "AIzaSyBS0UOSGFYN9s-wsxOao3bQmrHdQl5U0Wo",
  authDomain: "comp-api-firestore--auth.firebaseapp.com",
  projectId: "comp-api-firestore--auth",
  storageBucket: "comp-api-firestore--auth.appspot.com",
  messagingSenderId: "606205843342",
  appId: "1:606205843342:web:ef20e61e945f033b0076df",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const { user, isAuthenticated } = useAuth(auth);

//const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, isAuthenticated, user, firebase };
