import { AppProps } from "next/app"
import "@styles/index.css"

export default function Website({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
