import type { NextPage } from 'next'
import { useState } from 'react'
import Layout from '../components/layout'

const Home: NextPage = ({data}: object) => {
  const [ isClicked, setIsClicked ] = useState(false)
  console.log(data)

  return (
    <div style={{opacity: isClicked ? "0" : "1", zIndex: isClicked ? "0" : "2"}} className='welcome'>
      <button 
        className='welcome-button'
        onClick={() => setIsClicked(true)}
      >
        Welcome to Dirt Hand.
      </button>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}