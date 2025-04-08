/* eslint-disable @next/next/no-page-custom-font */
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://www.recuperareacasa.ro/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.recuperareacasa.ro/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.recuperareacasa.ro/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://www.recuperareacasa.ro/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="https://www.recuperareacasa.ro/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link
          rel="shortcut icon"
          href="https://www.recuperareacasa.ro/favicon.ico"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="https://www.recuperareacasa.ro/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Store>
        <Component {...pageProps} />
      </Store>
    </>
  );
}
