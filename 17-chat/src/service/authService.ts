import { auth } from "@/config/firebase";
import { UserModel } from "@/models/user.model";
import { createUserObject } from "@/service/userService";
import { AuthProvider, User } from "@firebase/auth-types";

export const signWithProviderService = async (
  provider: AuthProvider
): Promise<UserModel | null> => {
  return await auth.signInWithPopup(provider).then((result) => {
    if (result) {
      return createUserObject(result.user as User);
    }
    return null;
  });
};

export const signOutService = async (): Promise<void> => {
  return await auth.signOut();
};
