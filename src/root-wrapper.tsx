import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Layout from "./components/Layout";
import theme from "./@chakra-ui/gatsby-plugin/theme";

export const wrapPageElement = ({ element }: { element: React.ReactNode }) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>{element}</Layout>
    </ChakraProvider>
  );
};
