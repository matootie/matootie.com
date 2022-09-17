/**
 * Custom document
 *
 * https://nextjs.org/docs/advanced-features/custom-document
 */

// External imports.
import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en_CA">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
