import { useContext, useEffect } from "react";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Skeleton,
  SkeletonCircle,
  Stack,
  Text,
} from "@chakra-ui/react";
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

export default function Account() {
  const { user, loading, signOut } = useContext(AuthContext);

  return (
    <Layout>
      {loading && (
        <Stack align="center" mt="20" spacing="4">
          <SkeletonCircle size="24" mb="4" />
          <Skeleton height="30px" w="400px" />
          <Skeleton height="12px" w="400px" />
          <Skeleton height="20px" w="400px" />
        </Stack>
      )}

      {user && (
        <Flex align="center" direction="column" mt="20">
          <Avatar src={user?.photoURL} size="xl" mb="4" />
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
