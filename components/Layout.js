import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <Box bg="gray.100" minHeight="100vh">
      <Navbar />
      <Container maxW="container.sm">{children}</Container>
    </Box>
  );
};
