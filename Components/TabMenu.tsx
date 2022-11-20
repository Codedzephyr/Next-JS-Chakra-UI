import React from "react";
import { Box, Center, Text, Image, useMediaQuery } from "@chakra-ui/react";
import { TabList, Tab, Tabs, Flex } from "@chakra-ui/react";

export const TabMenu = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Box mt="8rem">
      <Center>
        <Tabs size="lg" variant="soft-rounded">
          <TabList
            fontFamily="'Satoshi', sans-serif"
            fontWeight="700"
            borderRadius="50px"
            bgColor="#D9D9D9"
            p="1rem"
          >
            <Tab
              w={{ base: "17rem", sm: "30rem", md: "35rem" }}
              fontSize="3.0rem"
              pl="0.5rem"
              borderRadius="50px"
              _selected={{ color: "#000000", bg: "#FFFFFF" }}
              _hover={{ color: "#000000", bg: "#FFFFFF" }}
            >
              Customer
            </Tab>
            <Tab
              w={{ base: "17rem", sm: "30rem", md: "35rem" }}
              borderRadius="50px"
              pl="0.5rem"
              fontSize="3.0rem"
              _selected={{ color: "#000000", bg: "#FFFFFF" }}
              _hover={{ color: "#000000", bg: "#FFFFFF" }}
            >
              Artisan
            </Tab>
          </TabList>
        </Tabs>
      </Center>
      <Flex
        mt="8.0rem"
        w="90%"
        mx="auto"
        gap={{ base: "3rem", lg: "0rem" }}
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          lg: "row",
        }}
      >
        <Flex flex="1" alignItems="center">
          <Box>
            <Text
              fontFamily="'Satoshi', sans-serif"
              fontWeight="700"
              fontSize="3.0rem"
              textAlign={{ base: "center", md: "center", lg: "initial" }}
            >
              Check out our app 😉
            </Text>
            <Text
              fontFamily="'Satoshi', sans-serif"
              fontWeight="400"
              fontSize="2.4rem"
              mt="2.0rem"
              textAlign={{ base: "center", md: "center", lg: "initial" }}
            >
              We have vetted artisans that are available from 7 AM - 10 PM. Get
              access to the closest artisan to you. As always, we’ve got you
              covered
            </Text>
            <Flex mt="1.0rem" gap="1.0rem">
              {isLargerThan1280 ? (
                <Flex gap="1.0rem">
                  <Image src="/assets/apple.svg" alt="app-store-icon" />
                  <Image
                    src="/assets/play-store.svg"
                    alt="play-store-icon"
                  />{" "}
                </Flex>
              ) : (
                <Center w="100%">
                  <Flex gap="1.0rem">
                    <Image src="/assets/apple.svg" alt="app-store-icon" />
                    <Image src="/assets/play-store.svg" alt="play-store-icon" />
                  </Flex>
                </Center>
              )}
            </Flex>
          </Box>
        </Flex>
        <Center flex="1">
          <Image src="/assets/smartphone-icon.png" alt="details" />
        </Center>
      </Flex>
    </Box>
  );
};
