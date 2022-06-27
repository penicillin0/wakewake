import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <Head prefix="og: http://ogp.me/ns#" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
