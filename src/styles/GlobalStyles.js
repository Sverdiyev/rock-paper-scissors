import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`${css`
  html {
    font-size: 10px;
    font-family: 'Barlow Semi Condensed', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-image: radial-gradient(at top, #1f3757, #131537);
    background-size: 100%;
  }
  #root {
    height: 100%;
    width: 100%;
  }
  * {
    box-sizing: border-box;
  }
`}
`;

export default GlobalStyles;
