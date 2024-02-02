import { Store } from "@/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

import "./style.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Philosopher:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Store>
        <Component {...pageProps} />
      </Store>
    </>
  );
}
