import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCZrKPL4l6jFgDNJZq8dCv7mewRjndhsoA",
  authDomain: "olx-project-fb8df.firebaseapp.com",
  projectId: "olx-project-fb8df",
  storageBucket: "olx-project-fb8df.appspot.com",
  messagingSenderId: "886586433930",
  appId: "1:886586433930:web:2ba4e2f8e7d7db4f6fa873",
  measurementId: "G-4RC30GMMQ3"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
