import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    html: {
      fontSize: "10px",
    },
    body: {
      fontSize: "1.4rem",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
};

const colors = {
  brand: {
    primary: "#2246A1",
    text: "#DADADA",
    white: "#FFFFFF",
    textRadio : "#858585",
    buttonColor: "#292D32",
    trust: "#626161"
  },
};

const fonts = {
  fontbrand: {
    Rubik: "'Rubik', sans-serif",
    Poppins: "'Poppins', sans-serif",
    Satoshi : "'Satoshi', sans-serif"
  },
};

export const theme = extendTheme({ fonts, colors, styles });
