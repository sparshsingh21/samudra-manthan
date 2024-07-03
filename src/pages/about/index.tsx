import { Box, Text } from "@chakra-ui/react";
import React from "react";
import AboutBG from "../../images/aboutbg.jpg";
import { HeadFC } from "gatsby";

const AboutPage = () => {
  return (
    <Box
      py={20}
      display={"flex"}
      flexDir={"column"}
      gap={10}
      minH={"100vh"}
      px={20}
      bgImage={AboutBG}
      bgSize={"cover"}
    >
      <Text fontWeight={"bold"} fontSize={32} color={"white"}>
        Who are we?
      </Text>
      <Text color={"white"}>
        Greetings, from behalf of Samudra Manthan Enterprises. So we assume that
        if you have clicked the “About Us” button which mean you wanted to kow
        more about us . We are a START-UP company that aims for minimizing your
        day - to - task. Or in simpler words the arrands. we provide you labor
        of for the following tasks that is listed in the website. he best part
        is that we can provide this in a Swift manner since we value your
        precious time. Last but not the least we can get you all of the services
        even if you call us AT THE LAST MOMENT. You can contact us on Email,
        WhatsApp or contact us directly on phone.{" "}
      </Text>
    </Box>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About</title>;
