import { useContext } from "react";
import { useRouter } from "next/router";
import { Avatar, Button, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import nookies from "nookies";
import { Layout } from "../components/Layout";
import { AuthContext } from "../context/auth";

//SSR
export async function getServerSideProps(context) {
  console.log("Testing token...");
  const tkn = nookies.get(context);
  console.log("TOKEN", tkn);
  return {
    props: {},
  };
}

export default function Dashboard() {
  const { user, loading, signOut } = useContext(AuthContext);
  const router = useRouter();

  return (
    <Layout>
      {loading && <Spinner />}

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
            onClick={() => signOut("/")}
          >
            Sign Out
          </Button>
        </Flex>
      )}
    </Layout>
  );
}
