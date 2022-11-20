import React from "react";
import Head from "next/head";
import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import {
  Header,
  HowItWorks,
  HowItWorksMobile,
  Offer,
  TabMenu,
} from "../Components";

const Homepage = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)");
  return (
    <Box>
      <Head>
        <title>Artisan</title>

        <meta name="description" content="Chase your dreams" />
      </Head>
      <Container maxW="160rem" px="rem">
        <Header />
        {isLargerThan1280 ? <HowItWorks /> : <HowItWorksMobile />}
        <TabMenu />
        <Offer />
      </Container>
    </Box>
  );
};

export default Homepage;
