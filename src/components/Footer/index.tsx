import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { Divider } from "@chakra-ui/react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Footer = (props: any) => {
  let { pathname } = useLocation();

  return (
    <Box
      w="100%"
      backgroundColor="white"
      p={5}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      flexDir={{ base: "column", md: "row", lg: "row" }}
    >
      <Text fontSize={12} fontWeight={"semibold"}>
        &copy; Samundra Manthan Enterprises
      </Text>
      <Text fontSize={12} fontWeight={"semibold"}>
        Developed by{" "}
        <Link to="mailto:syncstack.info@gmail.com">SyncStack Tech</Link>
      </Text>
    </Box>
  );
};

export default Footer;
