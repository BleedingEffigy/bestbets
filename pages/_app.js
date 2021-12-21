import { UserProvider } from '@auth0/nextjs-auth0';
import BaseLayout from '../components/BaseLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider> 
        <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
