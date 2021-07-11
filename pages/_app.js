import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/auth";
import { auth } from "../lib/firebase";
import { useEffect, useState } from "react";
import nookies from "nookies";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", { path: "/" });
      } else {
        setUser(user);
        const token = await user.getIdToken();
        nookies.set(undefined, "token", token, { path: "/" });
      }
    });
  }, [user]);

  return (
    <ChakraProvider>
      <AuthContext.Provider value={{ user }}>
        <Component {...pageProps} />
        <Toaster />
      </AuthContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
