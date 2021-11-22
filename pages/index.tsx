import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  const [ isClicked, setIsClicked ] = useState(false)

  return (
    <div style={{opacity: isClicked ? "0" : "1", zIndex: isClicked ? "0" : "2"}} className={styles.welcome}>
      <button 
        className={styles.welcome_button}
        onClick={() => setIsClicked(true)}
      >
        Welcome to Dirt Hand.
      </button>
    </div>
  )
}

export default Home