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

  * {
    box-sizing: border-box;
    word-break:break-all
  }

  html {
    background-color: var(--bg-main);
    color: var(--text-main);
  }

  body {
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    font-size: 18px;
  }

  h1 {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
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

  a:hover {
   text-decoration: underline;
  }


  code {
    border: none;
    overflow: auto;
    border-radius: 7px;
  }

  pre {
    padding: 7px;
    background-color: var(--bg-code);
    border-radius: 15px;
  }

  pre > code {
    border: 0px;
    background-color: transparent;
    width: inherit;
    display: block;
  }

  img {
    max-width: 100%;
    display: block;
    margin: 1rem 0;
    border-radius: 7px;
  }

  input {
    background-color: var(--bg-sub);
    border: 1px solid black;
    padding: 3px;
    border-radius: 5px;
  }
`;
