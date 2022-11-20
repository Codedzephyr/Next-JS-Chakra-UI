import React from "react";
import { Box, Text, Flex, Image, Center } from "@chakra-ui/react";
import { ImageWithText } from "./ImageWithText";

export const HowItWorks = () => {
  return (
    <Box>
      <Text
        fontFamily="'Satoshi', sans-serif"
        fontWeight="700"
        textAlign="center"
        fontSize="6.0rem"
      >
        How it works
      </Text>
      <Text
        mt="1.0rem"
        textAlign="center"
        fontFamily="'Satoshi', sans-serif"
        fontSize="2.4rem"
      >
        Get artisans closest to you in these 4 easy steps
      </Text>
      <Center>
        <Flex mt="8.0rem" gap="1rem">
          <Box>
            <Image
              h="50px"
              boxSize="21rem"
              objectFit="cover"
              src="/assets/arrow1.svg"
              alt="arrow"
              pb="2.5rem"
            />
          </Box>
          <Box>
            <ImageWithText
              imageLink="/assets/number1.png"
              text="Download the app"
            />
          </Box>
          <Box position="relative" top="-100px">
            <Image
              h="50px"
              boxSize="21rem"
              objectFit="cover"
              src="/assets/arrow2.svg"
              alt="arrow"
            />
          </Box>
          <Box>
            <ImageWithText
              imageLink="/assets/number2.png"
              text="Create account"
            />
          </Box>
          <Box>
            <Image
              h="50px"
              boxSize="21rem"
              objectFit="cover"
              src="/assets/arrow3.svg"
              alt="arrow"
            />
          </Box>
          <Box>
            <ImageWithText
              imageLink="/assets/number3.png"
              text="Search for artisan"
            />
          </Box>
          <Box position="relative" top="-100px">
            <Image
              h="50px"
              boxSize="21rem"
              objectFit="cover"
              src="/assets/arrow4.svg"
              alt="arrow"
            />
          </Box>
          <Center mr="2rem">
            <Box position="relative">
              <Image
                src="/assets/stars.svg"
                alt="stars"
                position="absolute"
                top="-39px"
                objectFit="cover"
                right = "-31px"
              />
              <ImageWithText imageLink="/assets/number4.png" text="Viola!" />
            </Box>
          </Center>
        </Flex>
      </Center>
    </Box>
  );
};
