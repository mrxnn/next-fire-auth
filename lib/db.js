import { firestore } from "./firebase";

export const createUser = ({ uid, email, displayName, photoURL }) => {
  return firestore.collection("users").doc(uid).set({
    uid,
    email,
    displayName,
    photoURL,
  });
};
