/**
 * Custom app
 *
 * https://nextjs.org/docs/advanced-features/custom-app
 */

// External imports.
import { AppProps } from "next/app"

// Style imports.
import "#styles/index.css"

export default function Website({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
