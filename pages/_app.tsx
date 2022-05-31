import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>チーム分けツール</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="チーム分けツールです。簡単にチームを作成することができます。"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
