import { firestore } from "@/config/firebase";

export const createUserObject = (userData) => {
  return {
    displayName: userData.displayName,
    photoURL: userData.photoURL,
    email: userData.email,
    uid: userData.uid,
  };
};

export const saveUser = async (user) => {
  await firestore.collection("users").doc(user.uid).set(user);
};

export const updateUser = async (user) => {
  await firestore.collection("users").doc(user.uid).update(user);
};

export const getUser = async (uid) => {
  return await firestore.collection("users").doc(uid).get();
};
