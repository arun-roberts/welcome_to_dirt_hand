import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'


const Home: NextPage = ({ data }: object) => {
  const [ isClicked, setIsClicked ] = useState(false)

  return (
    <div style={{opacity: isClicked ? "0" : "1", zIndex: isClicked ? "0" : "2"}} className='welcome'>
      <Link href='/welcome' >
        <a className='welcome-button' onClick={() => setIsClicked(true)}>Welcome to Dirt Hand.</a>
      </Link>
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