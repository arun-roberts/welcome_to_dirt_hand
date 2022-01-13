import Link from 'next/link'
import type { NextPage } from 'next'
import clientPromise from '../lib/mongodb'
import Gigs from '../components/gigs'

const When: NextPage = ({ when }) => {
  return (
    <ul className='when'>
      { 
        when.length > 0
        ? when.map(gig => <li className='when-item'><Gigs gig={gig} /></li>)
        : <li className='when-item--no'>"No gigs just now."</li>
      }
    </ul>
  )
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise
    const db = await client.db("welcomeToDirtHand").collection("when").find().toArray()
    console.log(db)
    return {
      props: { 
        isConnected: true,
        when: [...db]
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export default When
