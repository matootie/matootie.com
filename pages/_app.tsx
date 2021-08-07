import { AppProps } from "next/app"
import Script from "next/script"
import "@styles/index.css"

export default function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://scripts.simpleanalyticscdn.com/latest.js"
        strategy="afterInteractive"
      />
    </>
  )
}
