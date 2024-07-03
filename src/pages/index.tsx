import * as React from "react";
import { HeadFC, PageProps, navigate } from "gatsby";
import { Box, Heading, Text } from "@chakra-ui/react";
import SMBG from "../images/smbg.png";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgImage={SMBG}
      objectFit={"cover"}
      backgroundSize={"cover"}
      px={{ base: 20, md: 30, lg: 0 }}
      bgRepeat={"no-repeat"}
      color={"white"}
      textAlign={"center"}
      flexDir={"column"}
      gap={14}
    >
      <Box
        pos={"absolute"}
        top={0}
        left={0}
        h={"100vh"}
        w={"100%"}
        bgColor={"rgba(0,0,0,0.3)"}
      ></Box>
      <Heading
        zIndex={2}
        fontSize={{ base: 20, md: 32, lg: 38 }}
        letterSpacing={1}
      >
        Samudra Manthan Enterprises
        <br />
        Daily Services Made Easy
      </Heading>
      <Text zIndex={2} fontSize={{ base: 12, md: 16, lg: 18 }}>
        We will be at your service because we understand that work is worship in
        any domain you require
      </Text>
      <Box
        zIndex={2}
        bgColor={"#03187A"}
        border={"1px solid white"}
        py={2}
        px={4}
        borderRadius={30}
        cursor={"pointer"}
      >
        <Text fontWeight={"semibold"} onClick={() => navigate("/about")}>
          About Us
        </Text>
      </Box>
    </Box>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Samudra Manthan</title>;
