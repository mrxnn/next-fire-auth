import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../lib/auth";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
        <Toaster />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
