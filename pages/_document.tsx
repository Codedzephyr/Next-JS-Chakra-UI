import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Satoshi */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="shortcut icon" href="/favicon1.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
