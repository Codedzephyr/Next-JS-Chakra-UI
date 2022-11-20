import { Box, Flex, Image, Center } from "@chakra-ui/react";
import React from "react";
import { ImageWithText } from "./ImageWithText";

export const HowItWorksMobile = () => {
  return (
    <Box>
      <Flex mt="8.0rem" gap="1rem" flexDirection="column">
        <Box>
          <ImageWithText
            imageLink="/assets/number1.png"
            text="Download the app"
          />
        </Box>
        <Center transform="rotate(77deg)">
          <Image
            h="50px"
            boxSize="21rem"
            objectFit="cover"
            src="/assets/arrow2.svg"
            alt="arrow"
          />
        </Center>
        <Box>
          <ImageWithText
            imageLink="/assets/number2.png"
            text="Create account"
          />
        </Box>
        <Center transform="rotate(77deg)">
          <Image
            h="50px"
            boxSize="21rem"
            objectFit="cover"
            src="/assets/arrow2.svg"
            alt="arrow"
          />
        </Center>
        <Box>
          <ImageWithText
            imageLink="/assets/number3.png"
            text="Search for artisan"
          />
        </Box>
        <Center transform="rotate(77deg)">
          <Image
            h="50px"
            boxSize="21rem"
            objectFit="cover"
            src="/assets/arrow4.svg"
            alt="arrow"
          />
        </Center>
        <Center>
          <Box position = 'relative'>
            <Image src="/assets/stars.svg" alt="stars" top = "-47px" left = "36px" position = "absolute" />
            <ImageWithText imageLink="/assets/number4.png" text="Viola!" />
          </Box>
        </Center>
      </Flex>
    </Box>
  );
};
