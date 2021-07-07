import { firestore } from "./firebase";

export const createUser = ({ uid, email, displayName, photoURL }) => {
  firestore.collection("users").doc(uid).set({
    uid,
    email,
    displayName,
    photoURL,
  });
};
