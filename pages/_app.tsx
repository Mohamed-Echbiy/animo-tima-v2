import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Component {...pageProps} />
        <Footer />
      </>
    </QueryClientProvider>
  );
}

export default MyApp;
