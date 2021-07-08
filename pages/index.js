import { Flex, Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext, signInWithGoogle, signOut } from "../lib/auth";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Flex bg="gray.100" justify="center" align="center" minHeight="100vh">
      <Flex direction="column" maxWidth="400px">
        <Text fontSize="lg" mb="8">
          <Text as="span" fontWeight="bold">
            NextFireAuthSSR
          </Text>{" "}
          is an example for building authenticated pages with Firebase
          Authentication. It demonstrates every next.js data fetching{" "}
          <Text as="span" textDecoration="underline">
            (CSR, SSR, SSG, ISR)
          </Text>{" "}
          methods including Authenticated API routes.
        </Text>
        {!user && <SignInButton />}
        {user && <SignOutButton />}
      </Flex>
    </Flex>
  );
}

//button - sign in
const SignInButton = () => {
  return (
    <Button
      color="white"
      bg="green.700"
      size="lg"
      _hover={{ bg: "green.600" }}
      _active={{
        transform: "scale(0.95)",
      }}
      onClick={() => signInWithGoogle()}
    >
      Sign In
    </Button>
  );
};

//button - sign out
const SignOutButton = () => {
  return (
    <Button
      color="white"
      bg="gray.900"
      size="lg"
      _hover={{ bg: "gray.800" }}
      _active={{
        transform: "scale(0.95)",
      }}
      onClick={() => signOut()}
    >
      Sign Out
    </Button>
  );
};
