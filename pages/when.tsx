import Link from 'next/link'
import type { NextPage } from 'next'
import type { Gig } from '../lib/types'
import { GetServerSideProps } from 'next'
import clientPromise from '../lib/mongodb'
import Meta from '../components/Meta'
import Gigs from '../components/gigs'

type When = {
  when: Gig[];
};

const When: NextPage<When> = ({ when }) => {
  return (
    <>
      <Meta title="When is Dirt Hand performing?" />
      <ul className='when'>
        { 
          when.length > 0
          ? when.map((gig, i) => <li key={'w' + i} className='when-item'><Gigs gig={gig} /></li>)
          : <li className='when-item--no'>No gigs just now.</li>
        }
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const client = await clientPromise
    const db = await client.db("welcomeToDirtHand").collection("when").find().toArray()
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
