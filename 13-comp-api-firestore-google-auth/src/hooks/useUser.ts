import { useRouter } from "vue-router";
import { auth, firebase } from "./../config/firebase";

export function useUser(): Record<string, unknown> {
  const router = useRouter();
  const provider = new firebase.auth.GoogleAuthProvider();

  const signIn = async () => {
    await auth
      .signInWithPopup(provider)
      .then(() => router.push("/"))
      .catch((r) => console.error(r));
  };

  const signOut = async () => {
    await auth
      .signOut()
      .then(() => router.push("/logout"))
      .catch((r) => console.error(r));
  };

  return { signIn, signOut };
}
