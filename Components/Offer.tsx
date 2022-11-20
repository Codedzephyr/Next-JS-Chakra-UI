import {
  Box,
  Text,
  Center,
  Image,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

export const Offer = () => {
  return (
    <Box mt={{ base: "10rem", lg: "15rem" }}>
      <Text
        fontFamily="'Satoshi', sans-serif"
        fontWeight="700"
        fontSize="6.0rem"
        textAlign="center"
      >
        What we offer
      </Text>
      <Center>
        <Text
          fontFamily="'Satoshi', sans-serif"
          fontSize="2.4rem"
          textAlign="center"
          maxWidth="96rem"
          mt="2.0rem"
          px="2rem"
        >
          Tired of looking for artisans to help around? Download Anywork, sit
          back and relax, let us handle it. Browse through dozens of
          professional and hire the services of those closests to you
        </Text>
      </Center>
      <Center>
        <Box w="23.9rem" h="7.2rem" mt="3.1rem">
          <Text
            textAlign="center"
            fontFamily="'Satoshi', sans-serif"
            fontSize="2.4rem"
            borderRadius="5px"
            border="1px"
            p="2rem"
          >
            Explore Services
          </Text>
        </Box>
      </Center>
      <Flex
        mt="5.0rem"
        w={{ base: "95%", lg: "70%" }}
        mx="auto"
        gap="2.0rem"
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Flex flex="1" flexDirection="column" gap="2.0rem">
          <Cards
            imageLink="/assets/cleaning.png"
            bgColor="brand.CleaningColor"
            headingText="Cleaning services"
          />
          <Cards
            imageLink="/assets/gardening.png"
            bgColor="brand.GardeningColor"
            headingText="Gardening services"
          />
        </Flex>
        <Flex
          flex="1"
          flexDirection="column"
          pt={{ base: "0rem", lg: "8.0rem" }}
          gap="2.0rem"
        >
          <Cards
            imageLink="/assets/electrical.png"
            bgColor="brand.ElectricalColor"
            headingText="Electrical services"
          />
          <Cards
            imageLink="/assets/painting.png"
            bgColor="brand.PaintingColor"
            headingText="Painting services"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

type CardProps = {
  imageLink: string;
  headingText: string;
  bgColor: string;
};

const Cards = ({ imageLink, headingText, bgColor }: CardProps) => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Box bgColor={`${bgColor}`} p="3rem" borderRadius="9px">
      {isLargerThan1280 ? (
        <Image mt="3.7rem" src={`${imageLink}`} alt="icon" />
      ) : (
        <Center>
          <Image mt="3.7rem" src={`${imageLink}`} alt="icon" />
        </Center>
      )}
      <Text
        fontFamily="'Satoshi', sans-serif"
        fontWeight="700"
        fontSize="4.0rem"
        textAlign={{ base: "center", lg: "initial" }}
        color="#fff"
        mt="1.0rem"
        // whiteSpace="nowrap"
      >
        {headingText}
      </Text>
      <Text
        fontFamily="'Satoshi', sans-serif"
        color="#fff"
        fontSize="2.4rem"
        mt="1.0rem"
        textAlign={{ base: "center", lg: "initial" }}
      >
        Lorem ipsum dolor sit amet consectetur. Congue sapien nunc massa sociis
        lacus. Amet suspendisse varius ultrices tincidunt faucibus mauris duis
        est.
      </Text>
      {isLargerThan1280 ? (
        <Image
          mt="2.9rem"
          mb="5.4rem"
          src="/assets/button-right.svg"
          alt="button"
        />
      ) : (
        <Center>
          <Image
            mt="2.9rem"
            mb="5.4rem"
            src="/assets/button-right.svg"
            alt="button"
          />
        </Center>
      )}
    </Box>
  );
};
