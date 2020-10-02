import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px;
    background: #ecf1f8;
    color: #333;
    -webkit-font-smootthing: antialiased !important;
  }

  ul {
    list-style: none;
  }

`;
