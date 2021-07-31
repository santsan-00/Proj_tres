import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Charlevoix";
    src: url('./fonts/CHARLEVOIXPRO-THIN.TTF') format('ttf');
    font-weight: 100;
    font-style: normal;
  };

  * {
    box-sizing: border-box;
  }

  body, html, #root {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
  }

  body {
    background-color: #f1f1f4;
    position: fixed;
  }

  h1 {
    font-family: "Charlevoix";
  }
`;

export default GlobalStyle