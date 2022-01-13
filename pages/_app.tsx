import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import Head from 'next/head'
import AppContext from '../public/assets/context.js'
import { useState, useEffect } from 'react'
import Meta from '../components/Meta'

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
        <Meta />
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp


