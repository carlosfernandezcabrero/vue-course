import router from "@/router";
import store from "@/store";
import { auth, firebase } from "../config/firebase";

export function useUser() {
  const provider = new firebase.auth.GoogleAuthProvider();

  const signInWithGoogle = async () => {
    await auth
      .signInWithPopup(provider)
      .then((data) => {
        store.dispatch("SET_USER", data);
        router.push("/");
      })
      .catch((r) => console.error(r));
  };

  const register = async (user) => {
    return await auth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((data) => data)
      .catch((err) => err);
  };

  const signInWithPassword = async (user) => {
    return await auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => data)
      .catch((err) => err);
  };

  const signOut = async () => {
    store.dispatch("RESET");
    await auth
      .signOut()
      .then(() => router.push("/logout"))
      .catch((r) => console.error(r));
  };

  return { signInWithGoogle, signOut, register, signInWithPassword };
}
