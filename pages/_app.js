import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "../context/auth";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
