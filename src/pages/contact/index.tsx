import { Box, Text } from "@chakra-ui/react";
import React from "react";
import ContactBG from "../../images/contactbg.png";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PhoneIcon } from "@chakra-ui/icons";
import { IoCall } from "react-icons/io5";

const ContactPage = () => {
  return (
    <Box
      py={20}
      display={"flex"}
      flexDir={"column"}
      gap={10}
      minH={"100vh"}
      px={20}
      bgImage={ContactBG}
      bgSize={"cover"}
    >
      <Text fontWeight={"bold"} fontSize={32} color={"white"}>
        Contact Us
      </Text>
      <Text color={"white"} w={"60%"}>
        Us as an enterprise always give utmost priority to our customer base.
        And hence you can assure that we value you a lot . Our enterprise has
        distributed and dedicated employees that won't make you wait for your
        service.
      </Text>
      <Text color={"white"} w={"60%"}>
        Contact us for any order or complaint via these platforms. Below are the
        platforms we are most active on:
      </Text>
      <Box display={"flex"} flexDir={"column"} gap={10}>
        <Box display={"flex"} gap={10} alignItems={"center"} color={"white"}>
          <FaWhatsapp size={50} />
          <Text fontWeight={"semibold"} fontSize={18}>
            9814662320
          </Text>
        </Box>
        <Box display={"flex"} gap={10} alignItems={"center"} color={"white"}>
          <SiGmail size={50} />
          <Text fontWeight={"semibold"} fontSize={18}>
            xyz@samudramanthanenterprise.in
          </Text>
        </Box>
        <Box display={"flex"} gap={10} alignItems={"center"} color={"white"}>
          <IoCall size={50} />
          <Text fontWeight={"semibold"} fontSize={18}>
            9814662320
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
