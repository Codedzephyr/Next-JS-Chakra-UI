import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    html: {
      fontSize: "10px",
    },
    body: {
      fontSize: "1.4rem",
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
  },
};


const colors = {
  brand: {
  CustomerColor: "#8EB1C0",
  ArtisanColor: "#B38EC0",
  CleaningColor: "#628D43",
  ElectricalColor: "#9C9B3E",
  GardeningColor: "#9C553E",
  PaintingColor: "#438D77",
  buttonColor: "#292D32"
  },
};



const fonts = {
  fontbrand: {
    Rubik: "'Rubik', sans-serif",
    Poppins: "'Poppins', sans-serif",
  },
};

export const theme = extendTheme({ fonts, colors, styles });