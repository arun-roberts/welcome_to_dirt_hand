import type { NextPage } from 'next'
import Link from 'next/link'
import { useContext } from 'react'
import data from '../public/assets/data'
import AppContext from '../public/assets/context'
import clientPromise from '../lib/mongodb'
import Meta from '../components/Meta'

const Bio: NextPage = ({ who }) => {
  const value = useContext(AppContext);
  let { isMobile } = value.state;

  return (
    <>
      <Meta title="Who is Dirt Hand?" />
      <div className={isMobile ? 'who scroll' : 'who'}>
        {isMobile && <div className="scroll-top"></div>}
        <section className='who-item'>
          <p className='who-item__bio'>
              {who.bio}
          </p>
        </section>
        <section className='who-item who-friends'>
          <h2>Friends of Dirt Hand:</h2>
          {who.personnel.map((person, i) => (
            <>
              {i !== 0 && <span> || </span>}
              <Link key={"p" + i} href={person.link}>
                <a target="_blank" rel="noreferrer noopener">{
                  person.name
                }</a>
              </Link>
            </>
          ))}
        </section>
        {isMobile && <div className="scroll-bottom"></div>}
      </div>
    </>
  )
}

export async function getStaticProps(context) {
    const client = await clientPromise
    const db = await client.db("welcomeToDirtHand").collection("pageData").findOne({})
      
    if(!db) {
    console.error(e)
    return {
      props: { 
        isConnected: false,
        who: "there is no who" 
      }
    }
    }
    return {
      props: { 
        isConnected: true,
        who: db.who
      }
    }
}

export default Bio