import { Avatar, Button, Flex, Heading, Spinner, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Layout } from "../components/Layout";
import { AuthContext, signOut } from "../lib/auth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      {!user && <Spinner />}

      {user && (
        <Flex align="center" direction="column">
          <Avatar src={user.photoURL} size="lg" mb="4" />
          <Heading size="lg">{user.displayName}</Heading>
          <Text decoration="underline">{user.email}</Text>
          <Button
            mt="6"
            color="white"
            bg="gray.700"
            size="lg"
            _hover={{ bg: "gray.600" }}
            _active={{
              transform: "scale(0.95)",
            }}
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        </Flex>
      )}
    </Layout>
  );
}
