import React from "react";
import { Flex } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Flex bg="gray.100" justify="center" align="center" minHeight="100vh">
      {children}
    </Flex>
  );
};
