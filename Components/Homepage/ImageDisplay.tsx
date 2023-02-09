import { Flex, Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const menu = [
  {
    id: "zenith",
    imageLink: "/assets/trusted/zenith.svg",
  },
  {
    id: "seed",
    imageLink: "/assets/trusted/seed.svg",
  },
  {
    id: "vest",
    imageLink: "/assets/trusted/vest.svg",
  },
  {
    id: "orchestrate",
    imageLink: "/assets/trusted/orchestrate.svg",
  },
  {
    id: "bella",
    imageLink: "/assets/trusted/bella.svg",
  },
];

const ImageDisplay = () => {
  return (
    <Box>
      <Text
        pt="3rem"
        pb="2rem"
        fontSize="2.4rem"
        fontFamily="fontbrand.Satoshi"
        textAlign="center"
        color="brand.trust"
        letterSpacing="25%"
      >
        TRUSTED BY
      </Text>
      <Flex
        justifyContent="space-evenly"
        flexDirection={{ base: "column", md: "row" }}
      >
        {menu.map((item, index) => (
          <Flex key={index} justify = {{
            base: "center",
            md: "flex-start"
          }}>
            <Image src={`${item.imageLink}`} alt="image" />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default ImageDisplay;
