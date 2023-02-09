import { Box, Center, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { DesktopNav } from "../../Components/Homepage/DesktopNav";
import { MobileNav } from "../../Components/Homepage/MobileNav";

export const Header = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");

  const Motiondiv = motion(Box);
  
  const phonevariant = {
    start: {
      x: -1500,
    },
    finished: {
      x: 0,
      transition: { type: "spring", duration: 3, delay: 0.5 },
    },
  };
  return (
    <Box
      mb={{ base: "5rem", md: "8.4rem", lg: "10.3rem" }}
      bgColor="brand.primary"
      color="brand.white"
    >
      <Box px="1rem">
        {isLargerThan1280 ? <DesktopNav /> : <MobileNav />}
        <Box>
          <Center mt="8rem" mb="5rem">
            <Box>
              <Image src="/assets/header/hiring.svg" alt="hiring-button" />
            </Box>
          </Center>
          <Center>
            <Text
              fontFamily="'Satoshi', sans-serif"
              fontWeight="500"
              lineHeight={{ sm: "60px", md: "81px", lg: "81px" }}
              maxW="75rem"
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
              maxW="62rem"
              fontFamily="'Satoshi', sans-serif"
            >
              Get access to artisans at the click of a button, let us take the
              stress off you ;-)
            </Text>
          </Center>
          <Center mt="4.0rem" mb="6.0rem">
            <Box>
              <Image src="/assets/header/downloadbuttonwhite.svg" alt="help" />
            </Box>
          </Center>
          <Center>
            <Motiondiv
              whileHover={{ scale: 1.2 }}
              variants={phonevariant}
              initial="start"
              animate="finished"
            >
              <Image src="/assets/header/phones.png" alt="phones" />
            </Motiondiv>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};
