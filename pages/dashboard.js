import { useRouter } from "next/router";
import { Avatar, Button, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { auth } from "../lib/firebase";
import { AuthContext } from "../context/auth";
import { useContext } from "react";
import nookies from "nookies";

export async function getServerSideProps(context) {
  console.log("Testing token...");
  const tkn = nookies.get(context);
  console.log("TOKEN", tkn);
  return {
    props: {},
  };
}

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const signOut = async () => {
    await auth.signOut();
    router.push("/");
  };

  return (
    <Layout>
      {!user && <Spinner />}

      {user && (
        <Flex align="center" direction="column">
          <Avatar src={user?.photoURL} size="lg" mb="4" />
          <Heading size="lg">{user?.displayName}</Heading>
          <Text decoration="underline">{user?.email}</Text>
          <Button
            mt="6"
            color="white"
            bg="gray.700"
            size="lg"
            _hover={{ bg: "gray.600" }}
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        </Flex>
      )}
    </Layout>
  );
}
