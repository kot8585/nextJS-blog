import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const setThemeMode = `
  console.log("_document 실행");
     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
          localStorage.theme = "dark";
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.theme = "light";
        }
  `;
  return (
    <Html>
      <Head></Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
