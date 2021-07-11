import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import nookies from "nookies";
import { auth, googleAuth } from "../lib/firebase";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const signInWithGoogle = async (redirect) => {
    await auth.signInWithPopup(googleAuth);
    if (redirect) router.push(redirect);
  };

  const signOut = async (redirect) => {
    await auth.signOut();
    if (redirect) router.push(redirect);
  };

  //set the state & update the token cookie
  const handleUser = async (firebaseUser) => {
    if (firebaseUser) {
      setLoading(false);
      setUser(firebaseUser);
      const token = await firebaseUser.getIdToken();
      nookies.set(undefined, "token", token, { path: "/" });
      return user;
    } else {
      setLoading(false);
      setUser(null);
      nookies.set(undefined, "token", "", { path: "/" });
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signInWithGoogle,
    signOut,
  };
}
