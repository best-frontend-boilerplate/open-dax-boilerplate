import type { AppProps } from "next/app";
import { CoreProvider } from "@openware/opendax-web-sdk";
import "@openware/opendax-web-sdk/index.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CoreProvider>
      <Component {...pageProps} />
    </CoreProvider>
  );
}

export default MyApp;
