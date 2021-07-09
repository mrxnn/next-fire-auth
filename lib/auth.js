import { createContext, useEffect, useState } from "react";
import nookies from "nookies";
import { auth, googleAuth } from "./firebase";
import { createUser } from "./db";

//context
export const AuthContext = createContext({ user: null });

//google sign in
export const signInWithGoogle = () => {
  return auth.signInWithPopup(googleAuth);
};

//sign out
export const signOut = () => {
  return auth.signOut();
};

//provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  //listen to firebase auth state
  useEffect(() => {
    auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", { path: "/" });
      } else {
        const token = user.getIdToken();
        setUser(user);
        createUser(user);
        nookies.set(undefined, "token", token, { path: "/" });
      }
    });
  }, []);

  //force-refresh the id token unless having an active connection to
  //firestore or realtime database. this is not needed if thats the case
  useEffect(() => {
    const handle = setInterval(async () => {
      const user = auth.currentUser;
      if (user) await user.getIdToken(true);
    }, 10 * 60 * 1000);
    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
