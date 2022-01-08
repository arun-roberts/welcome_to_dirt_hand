import type { NextPage } from 'next'
import Link from 'next/link'
import data from '../public/assets/data'

const Bio: NextPage = () => {
  return (
    <div className='who scroll'>
      <div className="scroll-top"></div>
      <section className='who-item'>
        <p className='who-item__bio'>
            {data.who.bio}
        </p>
      </section>
      <section className='who-item who-friends'>
        <h2>Friends of Dirt Hand:</h2>
        {data.who.personnel.map((person, i) => (
          <Link key={"p" + i} href={person.link}>
            <a target="_blank" rel="noreferrer noopener">{
              i !== 0 
              ? ' || ' + person.name 
              : person.name
            }</a>
          </Link>
        ))}
      </section>
      <div className="scroll-bottom"></div>
    </div>
  )
}

export default Bio