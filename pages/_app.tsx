import { UserProvider } from '@auth0/nextjs-auth0'
import { AppProps } from "next/app"
import 'styles/index.css'

export default function Website({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
