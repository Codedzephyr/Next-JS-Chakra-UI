import React from "react";
import Head from "next/head";
import { Box, Container, useMediaQuery } from "@chakra-ui/react";
import { HeaderAlt } from "../layout/AltHomepage";
import MidSection from "../layout/AltHomepage/MidSection";

const Artisan = () => {
  return (
    <Box>
      <Head>
        <title>Artisan</title>
        <meta name="description" content="Chase your dreams" />
      </Head>
      <Container maxW="160rem" px="0rem">
        <HeaderAlt />
        <MidSection />
      </Container>
    </Box>
  );
};

export default Artisan;
