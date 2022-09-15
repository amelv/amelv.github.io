import React from "react";
import Layout from "./src/components/layout.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/ubuntu/300.css"; // Defaults to weight 400.
import "@fontsource/lora/variable.css"; // Defaults to weight 400.
import "@fontsource/lora/variable-italic.css"; // Defaults to weight 400.
import "@fontsource/ubuntu-mono"; // Defaults to weight 400.
// Logs when the client route changes
// Wraps every page in a component
export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS>
      <Layout>{element}</Layout>
    </ChakraProvider>
  );
};
