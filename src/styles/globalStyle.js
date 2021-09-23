import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --grey-dark: hsl(0, 0%, 63%);
    --grey-very-dark: hsl(0, 0%, 27%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
  }
`;

export default GlobalStyle;
