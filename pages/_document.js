import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head>
          {/* Reference the locally added font files */}
          <link rel="stylesheet" href="/assets/Roboto/Roboto-Bold.ttf" />
          {/* Add other meta tags, title, etc., as needed */}
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
