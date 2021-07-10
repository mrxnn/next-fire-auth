import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "../lib/auth";
import { auth, firestore } from "../lib/firebase";

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

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
