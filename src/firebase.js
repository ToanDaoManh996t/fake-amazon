import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD78M0ieN8HQ4t7HrIoYVL3WkV22_gAkGE",
  authDomain: "my-ecommerce123.firebaseapp.com",
  projectId: "my-ecommerce123",
  storageBucket: "my-ecommerce123.appspot.com",
  messagingSenderId: "223040940003",
  appId: "1:223040940003:web:8b1943a0dc8707fe3022d6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
