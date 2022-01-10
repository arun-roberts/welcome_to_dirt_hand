import '../styles/globals.sass'
import styles from '../styles/Home.module.sass'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Head from 'next/head'
import AppContext from '../public/assets/context.js'
import { useState, useEffect } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  const [ isMobile, setIsMobile ] = useState(false)
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    useEffect(() => {
        
        setIsMobile(window.matchMedia(`(max-width: 800px)`).matches ) 
        
    },[])
  return (
    <AppContext.Provider
      value={{
        state: {
          isMobile,
          isMenuOpen
        },
        setIsMenuOpen
      }}
    >
      <Layout>
        <Head>
          <title>Dirt Hand</title>
          <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;600&family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,500&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;0,600;0,700;1,500&family=VT323&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
