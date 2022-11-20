import { Box, Center, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Header = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Box
      mb={{ base: "5rem", md: "8.4rem", lg: "10.3rem" }}
      bg="url('/assets/background.png')"
      backgroundPosition="20% 65%"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box px="1rem">
        {isLargerThan1280 ? <DesktopNav /> : <MobileNav />}
        <Box
          mt={{ base: "5.0rem", sm: "8.2rem", md: "10.2rem", lg: "17.2rem" }}
          pb={{ base: "7.0rem", md: "10.0rem", lg: "13.5rem" }}
        >
          <Center>
            <Text
              fontFamily="'Satoshi', sans-serif"
              fontWeight="700"
              lineHeight={{ sm: "60px", md: "81px", lg: "81px" }}
              maxW="100rem"
              textAlign="center"
              fontSize={{ base: "4rem", sm: "4rem", md: "6rem", lg: "6rem" }}
            >
              An easier and powerful platform to get access to artisans
            </Text>
          </Center>
          <Text
            mt="1.6rem"
            fontSize="2.4rem"
            textAlign="center"
            fontFamily="'Satoshi', sans-serif"
          >
            Get access to artisans at the click of a button, let us take the
            stress off you ;-)
          </Text>
          <Center mt="2.4rem">
            <Flex
              direction={{
                base: "column",
                sm: "column",
                md: "column",
                lg: "row",
              }}
            >
              <Image
                src="/assets/artisan.svg"
                alt="arrow-right"
                transform={{ base: "rotate(158deg)", lg: "rotate(0deg)" }}
                pt={{ base: "0rem", md: "9.0rem", lg: "9.0rem" }}
              />
              <Box
                w="23.9rem"
                h="7.2rem"
                textAlign="center"
                py="1.85rem"
                whiteSpace="nowrap"
                fontSize="2.6rem"
                fontWeight="500"
                fontFamily="'Satoshi', sans-serif"
                px="5.25rem"
                cursor="pointer"
                ml={{ base: "0rem", md: "0rem", lg: "2.0rem" }}
                mt={{ base: "2.0rem", md: "2.0rem", lg: "0rem" }}
                bgColor="brand.buttonColor"
                color="#fff"
              >
                Hire artisan
              </Box>
              <Box
                w="23.9rem"
                h="7.2rem"
                textAlign="center"
                py="1.85rem"
                border="1px"
                whiteSpace="nowrap"
                cursor="pointer"
                borderColor="brand.buttonColor"
                fontSize="2.6rem"
                fontWeight="500"
                ml={{ base: "0rem", md: "0rem", lg: "1.0rem" }}
                mt={{ base: "2.0rem", md: "2.0rem", lg: "0rem" }}
                fontFamily="'Satoshi', sans-serif"
                px="5.25rem"
                color="#brand.buttonColor"
              >
                Find a job
              </Box>
            </Flex>
          </Center>
        </Box>
        <Box pb="10rem">
          <Text
            fontFamily="'Satoshi', sans-serif"
            fontSize="2.0rem"
            letterSpacing="5px"
            fontWeight="500"
            textAlign="center"
          >
            TRUSTED BY
          </Text>
          <Flex
            mt="4.7rem"
            mx="auto"
            gap={{ base: "5rem", md: "5rem", lg: "3rem" }}
            flexDirection={{ base: "column", md: "column", lg: "row" }}
          >
            <Flex flex="1" gap="2rem" justifyContent="space-around">
              <Image src="/assets/zenith.svg" alt="zenith" />
              <Image src="/assets/seedbuilders.svg" alt="seedbuilders" />
            </Flex>
            <Flex flex="2" gap="2rem" justifyContent="space-around">
              <Image src="/assets/hervest.svg" alt="zenith" />
              <Image src="/assets/orchestrate.svg" alt="seedbuilders" />
            </Flex>
            <Flex flex="1" justifyContent="center">
              {isLargerThan1280 ? (
                <Image src="/assets/bella.svg" alt="zenith" />
              ) : (
                <Center w="100%">
                  <Image src="/assets/bella.svg" alt="zenith" />{" "}
                </Center>
              )}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
