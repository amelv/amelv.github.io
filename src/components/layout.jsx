import * as React from "react";
import { Link } from "gatsby";
import { Box } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <main>
      <Box w="100%" m="30px 0">
        {children}
      </Box>
    </main>
  );
};
export default Layout;
