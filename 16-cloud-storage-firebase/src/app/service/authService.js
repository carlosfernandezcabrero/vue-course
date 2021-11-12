import { createUserObject } from "@/app/service/userService";
import { auth } from "@/config/firebase";

export const signWithProviderService = async (provider) => {
  return await auth.signInWithPopup(provider).then((result) => {
    return createUserObject(result.user);
  });
};

export const signOutService = async () => {
  return await auth.signOut();
};
