import { Avatar, Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

export default function Navbar() {
  const { user, signInWithGoogle } = useContext(AuthContext);

  return (
    <Flex bg="white" mb="10" justify="space-between" h="20" px="8">
      <Stack direction="row" align="center" spacing="10">
        <NextLink href="/">
          <Text as="a" href="/" fontSize="xl" fontWeight="bold" mt="-1">
            NextFireAuthSSR
          </Text>
        </NextLink>
        <NextLink href="/dashboard">
          <Link href="/dashboard" fontWeight="semibold">
            Dashboard (SSR)
          </Link>
        </NextLink>
      </Stack>
      <Stack direction="row" align="center" spacing="6">
        {user ? (
          <>
            <NextLink href="/account">
              <Link href="/account" fontWeight="semibold">
                {user.displayName}
              </Link>
            </NextLink>
            <Avatar src={user?.photoURL} />
          </>
        ) : (
          <Button onClick={() => signInWithGoogle()}>Sign In</Button>
        )}
      </Stack>
    </Flex>
  );
}
