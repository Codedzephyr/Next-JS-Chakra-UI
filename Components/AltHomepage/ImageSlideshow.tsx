import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Image, Center, Flex } from "@chakra-ui/react";

const ImageSlideshow = () => {
  const settings = {
    dots: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    initialSlide: 0,
    centerMode: true,
    slidesToScroll: 4,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Box w="95%" margin="0 auto" maxW="1600px" mt="4rem">
      <Slider {...settings}>
        <Box>
          <Image src="/assets/althomepage/slideshow/vso.png" alt="slideshow" />
        </Box>
        <Box>
          <Image
            src="/assets/althomepage/slideshow/iroko.png"
            alt="slideshow"
          />
        </Box>
        <Box>
          <Image
            src="/assets/althomepage/slideshow/vconnect.png"
            alt="slideshow"
          />
        </Box>
        <Box>
          <Image
            src="/assets/althomepage/slideshow/verifi.png"
            alt="slideshow"
          />
        </Box>
        <Flex justify="flex-end">
          <Image
            src="/assets/althomepage/slideshow/altschool.png"
            alt="slideshow"
          />
        </Flex>
      </Slider>
    </Box>
  );
};

export default ImageSlideshow;
