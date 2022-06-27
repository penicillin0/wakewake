import { Head, Html, Main, NextScript } from "next/document";
import { GA_ID } from "../lib/gtag";

const Document = () => {
  return (
    <Html lang="ja">
      <Head prefix="og: http://ogp.me/ns#" />
      {/* Google Analytics */}
      {GA_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                   window.dataLayer = window.dataLayer || [];
                   function gtag(){dataLayer.push(arguments);}
                   gtag('js', new Date());
                   gtag('config', '${GA_ID}', {
                     page_path: window.location.pathname,
                   });`,
            }}
          />
        </>
      )}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
