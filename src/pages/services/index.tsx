import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import ServicesBG from "../../images/smservicesbg.png";
import servicesData from "../../data/servicesData";
import { HeadFC } from "gatsby";

const ServicesPage = () => {
  return (
    <Box
      py={20}
      display={"flex"}
      flexDir={"column"}
      gap={10}
      minH={"100vh"}
      px={20}
      bgImage={ServicesBG}
      bgSize={"cover"}
    >
      <Text color={"white"} fontSize={32} fontWeight={"bold"}>
        Services
      </Text>
      <Flex gap={5} wrap={"wrap"} justifyContent={"center"}>
        {servicesData.map((service) => {
          return (
            <Box
              h={"100%"}
              borderRadius={20}
              minW={250}
              key={service.id}
              p={5}
              bgColor={"lightblue"}
              color={"black"}
              display={"flex"}
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={10}
            >
              <Image src={service.icon} h={50} />
              <Text fontWeight={"semibold"}>{service.name}</Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default ServicesPage;

export const Head: HeadFC = () => <title>Services</title>;
