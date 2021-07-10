import NextLink from "next/link";
import { Flex, Button, Text, useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Layout } from "../components/Layout";
import { auth, googleAuth } from "../lib/firebase";

export default function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
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
        {user && <DashboardLink />}
      </Flex>
    </Layout>
  );
}

//button - sign in
const SignInButton = () => {
  const signInWithGoogle = async () => {
    const { user } = await auth.signInWithPopup(googleAuth);
    console.log(`Signed in as ${user.email}`);
  };

  return (
    <Button
      color="white"
      bg="green.700"
      size="lg"
      _hover={{ bg: "green.600" }}
      onClick={() => signInWithGoogle()}
    >
      Sign In With Google
    </Button>
  );
};

//button - go to dashboard
const DashboardLink = () => {
  return (
    <NextLink href="/dashboard">
      <Button
        as="a"
        color="white"
        bg="green.700"
        size="lg"
        href="/dashboard"
        _hover={{ bg: "green.600" }}
      >
        View Dashboard
      </Button>
    </NextLink>
  );
};
