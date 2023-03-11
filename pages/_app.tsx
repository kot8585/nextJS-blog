import Layout from "@/components/Layout";
import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global-styles";
import { DarkModeProvider } from "../context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../styles/prism-duotone-sea.css";

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </DarkModeProvider>
  );
}
