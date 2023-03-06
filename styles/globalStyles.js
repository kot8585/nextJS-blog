import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  button{
    border: 0;
    background-color: transparent;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h2 { 
    margin: 0;
  }
`;
