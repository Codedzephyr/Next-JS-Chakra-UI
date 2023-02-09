import { Box, Center, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { DesktopNavigation } from "../../Components/AltHomepage/DesktopNavigation";
import { MobileNavigation } from "../../Components/AltHomepage/MobileNavigation";

export const HeaderAlt = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const Motiondiv = motion(Box);
  const MotionMove = motion(Center);

  const navvariant = {
    start: {
      y: -300,
    },
    finished: {
      y: 0,
      transition: { type: "spring", duration: 4, delay: 0.5 },
    },
  };

  const textvariant = {
    start: {
      opacity: 0,
    },
    finished: {
      opacity: 1,
      transition: { type: "spring", duration: 4, delay: 3 },
    },
  };

  const cardvariant = {
    start: {
      x: -1500,
    },
    finished: {
      x: 0,
      transition: { type: "spring", duration: 4, delay: 3 },
    },
  };
  const cardvariant1 = {
    start: {
      x: -1500,
    },
    finished: {
      x: 0,
      transition: { type: "spring", duration: 4, delay: 3 },
    },
  };
  const cardvariant2 = {
    start: {
      x: 1500,
    },
    finished: {
      x: 0,
      transition: { type: "spring", duration: 4, delay: 3 },
    },
  };
  const cardvariant3 = {
    start: {
      x: 1500,
    },
    finished: {
      x: 0,
      transition: { type: "spring", duration: 4, delay: 3 },
    },
  };
  return (
    <Box mb={{ base: "5rem", md: "8.4rem", lg: "10.3rem" }}>
      <Box px="1rem">
        {isLargerThan1280 ? (
          <Motiondiv variants={navvariant} initial="start" animate="finished">
            <DesktopNavigation />
          </Motiondiv>
        ) : (
          <MobileNavigation />
        )}
        <Box>
          <Center mt="8rem" mb="5rem">
            <Box>
              <Image src="/assets/header/hiring.svg" alt="hiring-button" />
            </Box>
          </Center>
          <Motiondiv variants={textvariant} initial="start" animate="finished">
            <Center>
              <Text
                fontFamily="'Satoshi', sans-serif"
                fontWeight="500"
                lineHeight={{ sm: "60px", md: "81px", lg: "81px" }}
                maxW="120rem"
                textAlign="center"
                fontSize={{ base: "4rem", sm: "4rem", md: "6rem" }}
              >
                A powerful platform to get access to artisans
              </Text>
            </Center>
            <Center>
              <Text
                mt="1.6rem"
                fontSize="2.4rem"
                textAlign="center"
                maxW="71rem"
                fontFamily="'Satoshi', sans-serif"
              >
                Get access to artisans at the click of a button, let us take the
                stress off you ;-)
              </Text>
            </Center>
          </Motiondiv>
          <Center mt="10.0rem">
            {/* <Motiondiv
              whileHover={{ scale: 1.2 }}
              variants={phonevariant}
              initial="start"
              animate="finished"
            >
              <Image src="/assets/header/phones.png" alt="phones" />
            </Motiondiv> */}
            <Flex w="90%" justifyContent="space-between">
              <Motiondiv
                variants={cardvariant}
                initial="start"
                animate="finished"
              >
                <Image
                  src="/assets/althomepage/header/welder.png"
                  alt="cards"
                />
              </Motiondiv>
              <MotionMove
                variants={cardvariant1}
                initial="start"
                animate="finished"
              >
                <Image
                  src="/assets/althomepage/header/tailor.png"
                  alt="cards"
                />
              </MotionMove>
              <Motiondiv
                variants={cardvariant2}
                initial="start"
                animate="finished"
              >
                <Image
                  src="/assets/althomepage/header/construction.png"
                  alt="cards"
                />
              </Motiondiv>
              <MotionMove
                variants={cardvariant3}
                initial="start"
                animate="finished"
              >
                <Image
                  src="/assets/althomepage/header/unknown.png"
                  alt="cards"
                />
              </MotionMove>
            </Flex>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};
