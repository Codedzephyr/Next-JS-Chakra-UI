import { Global } from "@emotion/react";


const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Satoshi Variable';
        font-display: swap;
        src: url('/fonts/Satoshi-Variable.ttf');
      }
      @font-face {
        font-family: 'Satoshi Italic';
        font-display: swap;
        src: url('/fonts/Satoshi-VariableItalic.ttf');
      }
      `}
  />
);

export default Fonts;
