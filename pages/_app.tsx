import Layout from "@/components/Layout";
import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
