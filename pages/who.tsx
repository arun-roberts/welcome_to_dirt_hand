import type { NextPage } from 'next'
import Link from 'next/link'
import { useContext } from 'react'
import data from '../public/assets/data'
import AppContext from '../public/assets/context'
import Meta from '../components/Meta'

const Bio: NextPage = () => {
  const value = useContext(AppContext);
  let { isMobile } = value.state;

  return (
    <>
      <Meta title="Who is Dirt Hand?" />
      <div className={isMobile ? 'who scroll' : 'who'}>
        {isMobile && <div className="scroll-top"></div>}
        <section className='who-item'>
          <p className='who-item__bio'>
              {data.who.bio}
          </p>
        </section>
        <section className='who-item--links'>
          <Link href='mailto:dirthandband@gmail.com'>
            <a rel="noreferrer noopener">EMAIL</a>
          </Link>
          <span>||</span>
          <Link href='https://www.instagram.com/dirthandband/'>
            <a target="_blank" rel="noreferrer noopener">INSTAGRAM</a>
          </Link>
          <span>||</span>
          <Link href='https://www.facebook.com/dirthand'>
            <a target="_blank" rel="noreferrer noopener">FACEBOOK</a>
          </Link>
        </section>
        <section className='who-item who-friends'>
          <h2>Friends of Dirt Hand:</h2>
          {data.who.personnel.map((person, i) => (
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

export default Bio