import { firestore } from "@/config/firebase";
import { User } from "@firebase/auth-types";
import { UserModel } from "./../models/user.model";

export const createUserObject = (userData: User): UserModel => {
  return {
    displayName: userData.displayName || "",
    photoURL: userData.photoURL || "",
    email: userData.email || "",
    uid: userData.uid,
  };
};

export const saveUser = async (user: UserModel): Promise<void> => {
  const data = await firestore.collection("users").doc(user.uid).set(user);
};

export const getUser = async (uid: string): Promise<UserModel | null> => {
  const users = await firestore.collection("users").doc(uid).get();
  if (!users.exists) {
    return null;
  }

  return users.data() as UserModel;
};
