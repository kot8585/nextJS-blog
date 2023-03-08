import Layout from "@/components/Layout";
import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalStyles";
import { DarkModeProvider } from "../context/DarkModeContext";
import "../styles/common.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkModeProvider>
  );
}
