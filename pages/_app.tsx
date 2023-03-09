import Layout from "@/components/Layout";
import { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globalStyles";
import { DarkModeProvider } from "../context/DarkModeContext";
import "../styles/common.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
