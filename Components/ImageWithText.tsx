import { Center, Image, Text } from "@chakra-ui/react";
import React from "react";

type ImageWithTextProps = {
  imageLink: string;
  text: string;
};

export const ImageWithText = ({ imageLink, text }: ImageWithTextProps) => {
  return (
    <>
      <Center>
        <Image src={`${imageLink}`} alt="number1" />
      </Center>
      <Text
        fontFamily="'Satoshi', sans-serif"
        fontSize="2.0rem"
        fontWeight="500"
        textAlign="center"
        mt="1.0rem"
      >
        {text}
      </Text>
    </>
  );
};
