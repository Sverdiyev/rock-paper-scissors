import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`${css`
  html {
    font-size: 10px;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(at top, #1f3757, #131537);
    background-size: 100%;
  }
`}
`;

export default GlobalStyles;
