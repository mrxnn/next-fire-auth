import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvsmybYlRdDU8DDfKXj6gvG_J7OiSa4OI",
  authDomain: "idx-list.firebaseapp.com",
  projectId: "idx-list",
  storageBucket: "idx-list.appspot.com",
  messagingSenderId: "692856291060",
  appId: "1:692856291060:web:4ff908db35cc3e7ee068a1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuth = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
