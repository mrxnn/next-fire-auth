import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import nookies from "nookies";
import { auth, googleAuth } from "../lib/firebase";
import { createUser } from "../lib/db";

//context
const AuthContext = createContext(null);

//provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const signInWithGoogle = async () => {
    const { user } = await auth.signInWithPopup(googleAuth);
    await createUser(user);
    router.push("/");
  };

  const signOut = async () => {
    await auth.signOut();
    router.push("/");
  };

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

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
