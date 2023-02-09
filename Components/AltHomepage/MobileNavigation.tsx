import React, { useState } from "react";
import {
  Box,
  Image,
  Flex,
  useDisclosure,
  Collapse,
  Text,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";

const svgVariants = {
  start: {
    opacity: 0,
    pathLength: 0,
    rotate: -180,
  },
  finished: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const MobileNavigation = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [HamburgerOpen, setHamburgerOpen] = useState(true);
  const [isClose, setClose] = useState(false);

  const handleShow = () => {
    setHamburgerOpen(!HamburgerOpen);
    setClose(!isClose);
  };

  const handleClose = () => {
    setHamburgerOpen(!HamburgerOpen);
    setClose(!isClose);
  };

  return (
    <Box pt="3.0rem">
      <Flex w="95%" mx="auto">
        <Box flex="1"></Box>
        <Flex flex="1" justifyContent="flex-end">
          {HamburgerOpen ? (
            <Box onClick={onToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                onClick={handleShow}
                cursor="pointer"
                width="35"
                height="35"
              >
                <motion.path
                  fill="#000"
                  variants={svgVariants}
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                  initial="start"
                  animate="finished"
                />
              </svg>
            </Box>
          ) : (
            <></>
          )}
          {isClose ? (
            <Box onClick={onToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="50px"
                onClick={handleShow}
                cursor="pointer"
                height="50px"
              >
                <motion.path
                  fill="#000"
                  variants={svgVariants}
                  initial="start"
                  animate="finished"
                  d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
                />
              </svg>
            </Box>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <LinkText LinkText="Products" />
        <LinkText LinkText="Solutions" />
        <LinkText LinkText="Resources" />
        <Center mt="2.0rem">
          <Image
            src="/assets/althomepage/download.svg"
            alt="download-button"
          />
        </Center>
      </Collapse>
    </Box>
  );
};

type LinkTextProps = {
  LinkText: string;
};

const LinkText = ({ LinkText }: LinkTextProps) => {
  return (
    <NextLink href="/" passHref>
      <Center cursor="pointer" mt="2.0rem">
        <Text
          fontFamily="'Satoshi', sans-serif"
          fontWeight="500"
          fontSize="2.5rem"
        >
          {LinkText}
        </Text>
      </Center>
    </NextLink>
  );
};
