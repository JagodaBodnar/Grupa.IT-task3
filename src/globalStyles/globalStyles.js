import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    background: #F8f9fa;
    color: #000;
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
  }
`;

export default GlobalStyle;