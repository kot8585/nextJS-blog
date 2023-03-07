import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  button {
    border: 0;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: black;
  }

  code {
    background-color: #EBEBEB;
    padding: 2px;
    border: 1px solid #B8B8B8;
    border-radius: 5px;
  }

  pre {
    padding: 5px;
  }

  pre > code {
    border: 0px;
    background-color: transparent;
  }
`;
