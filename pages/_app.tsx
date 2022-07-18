import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";
import { usePageView } from "../hooks/usePageView";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="7Ghxx-EskqMs_Kj71i1-f-u0-p92v-SEodaYYx1Njyo"
        />
        <title>
          チーム分けツール - wakewake 簡単にチーム分けができるツール
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="グループ,決める,席,チーム,分け,飲み会,チーム作成,自動,生成,画像,チーム分け,グループ分け,チーム決め,チームぎめ,簡単,PDF,エクセル,CSV,PNG,JPEG,ランダム,ツール,班分け,班"
        />
        <meta
          name="description"
          content="チーム分けツールです。簡単にランダムにチームを分けることができます。チーム分けの結果を、画像やデータなどの指定した方法（PNG・JPEG・CSV・Excel）で保存することができます。"
        />

        {/* OGP */}
        <meta
          property="og:title"
          content="チーム分けツール - wakewake 簡単にチーム分けができるツール"
        />
        <meta
          property="og:description"
          content="チーム分けツールです。簡単にランダムにチームを分けることができます。チーム分けの結果を、画像やデータなどの指定した方法（PNG・JPEG・CSV・Excel）で保存することができます。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wakewake.vercel.app/" />
        <meta
          property="og: image"
          content="https://wakewake.vercel.app/logo.png"
        />
        <meta property="og:site_name" content="wakewake" />
        <meta property="og:locale" content="ja_JP" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:domain" content="wakewake.vercel.app" />
        <meta property="twitter:title" content="チーム分けツール wakewake" />
        <meta
          property="twitter:image"
          content="https://wakewake.vercel.app/logo.png"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
