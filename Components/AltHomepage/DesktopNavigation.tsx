import React from "react";
import Link from "next/link";
import { Box, Flex, Text, Center, Image } from "@chakra-ui/react";

export const DesktopNavigation = () => {
  return (
    <Box pt="6.0rem">
      <Center>
        <Flex w="90%">
          <Flex flex="1" alignItems="center">
            <Box>
              <Image src="/assets/althomepage/anywrk.svg" alt="desktop-logo" />
            </Box>
          </Flex>
          <Flex flex="1" justify="space-evenly">
            <LinkText LinkText="Products" />
            <LinkText LinkText="Solutions" />
            <LinkText LinkText="Resources" />
          </Flex>
          <Flex flex="1" justifyContent="flex-end" alignItems="center">
            <Image
              src="/assets/althomepage/download.svg"
              alt="download-button"
            />
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

type LinkTextProps = {
  LinkText: string;
};

const LinkText = ({ LinkText }: LinkTextProps) => {
  return (
    <Link href="/">
      <Center cursor="pointer">
        <Text
          fontFamily="'Satoshi', sans-serif"
          fontWeight="500"
          fontSize="1.6rem"
        >
          {LinkText}
        </Text>
      </Center>
    </Link>
  );
};
