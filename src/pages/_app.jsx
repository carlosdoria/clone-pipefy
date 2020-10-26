import Head from 'next/head'
import { GlobalStyle } from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Clone Pipefy
        </title>
        <meta nema='description' content='Clone da inferface do pipefy' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
