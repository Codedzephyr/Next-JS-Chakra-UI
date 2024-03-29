import React from "react";
import Head from "next/head";
import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import { Header } from "../layout/Homepage/Header";
import ImageDisplay from "../Components/Homepage/ImageDisplay";

const Homepage = () => {
  // const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Box>
      <Head>
        <title>Artisan</title>

        <meta name="description" content="Chase your dreams" />
      </Head>
      <Container maxW="160rem" px="0rem">
        <Header />
        <ImageDisplay />
      </Container>
    </Box>
  );
};

export default Homepage;
