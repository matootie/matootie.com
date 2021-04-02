import { UserProvider } from '@auth0/nextjs-auth0'
import 'styles/index.css'

export default function Website({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
