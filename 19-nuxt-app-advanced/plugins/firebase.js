import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBCjIYXjfBUg104PTHua2QwiD7yW81Qk2o',
  authDomain: 'cloud-storage-417e9.firebaseapp.com',
  projectId: 'cloud-storage-417e9',
  storageBucket: 'cloud-storage-417e9.appspot.com',
  messagingSenderId: '214991039652',
  appId: '1:214991039652:web:521c65f2f4981f0b7d4a31',
}

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)

}
export const app = firebase.app()

// Providers

// Services
export const auth = firebase.auth(app)
export const db = firebase.firestore(app)
