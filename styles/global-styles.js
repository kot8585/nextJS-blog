import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root { 
    --bg-main: #f6f6f6;
    --text-main: #000000;
    --bg-sub: #f6f7f9;
    --border-main: #dedede;
    --bg-code: #ffffff;
    --text-pointer: #0a7ea4;
  }

  html.dark {
    --bg-main: #232833;
    --bg-sub: #3D4452;
    --text-main: #f6f7f9;
    --border-main: #343a46;
    --bg-code: #16181d;
    --text-pointer: #149eca;
  }

  html {
    background-color: var(--bg-main);
    color: var(--text-main);
  }

  body {
    margin: 0 auto;
    font-family: NanumSquareRound, Open-Sans, Helvetica, Sans-Serif;
  }

  button {
    border: 0;
    background-color: transparent;
    color: unset;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  code {
    background-color: #EBEBEB;
    padding: 2px;
    border: 1px solid #B8B8B8;
    border-radius: 5px;
  }

  pre {
    padding: 7px;
    background-color: var(--bg-code);
    border-radius: 15px;
  }

  pre > code {
    border: 0px;
    background-color: transparent;
  }

  code {
    background-color: var(--bg-sub);
    border: none;
  }

  img {
    width: 70%;
    margin: 1rem 0;
    border-radius: 15px;
  }

  input {
    background-color: var(--bg-sub);
    border: none;
    padding: 3px;
    border-radius: 5px;
  }
`;
