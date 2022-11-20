import React from 'react'
import Link from "next/link";
import { Box, Flex, Text, Center, Image } from "@chakra-ui/react";

export const DesktopNav = () => {
  return (
    <Box pt="6.0rem">
      <Flex>
        <Box flex="1"></Box>
        <Flex flex="1" justify="space-between">
          <LinkText LinkText="Why Any Work" />
          <LinkText LinkText="Products" />
          <LinkText LinkText="FAQ" />
          <LinkText LinkText="Pricing" />
        </Flex>
        <Flex flex="1" justifyContent="center" alignItems="center">
          <Flex>
            <LinkText LinkText="Log in" />
            <Box
              w="10.6rem"
              h="4.3rem"
              bgColor="brand.buttonColor"
              borderRadius="3px"
              py="1.2rem"
              px="1.75rem"
              ml="2.0rem"
              whiteSpace="nowrap"
              color="#FFFFFF"
            >
              Get Started
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

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