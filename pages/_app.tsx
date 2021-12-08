import '../styles/globals.sass'
import styles from '../styles/Home.module.sass'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        
        <title>Dirt Hand</title>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600&family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,500&family=VT323&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
