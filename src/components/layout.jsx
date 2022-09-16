import * as React from "react";
import { Link } from "gatsby";
import { Box } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <main>
      <Box w="100%" mt={["0px", "0px", "36px"]} mb={["12px", "12px", "36px"]}>
        {children}
      </Box>
    </main>
  );
};
export default Layout;
