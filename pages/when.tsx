import type { NextPage } from 'next'
import Meta from '../components/Meta'
import Gigs from '../components/gigs'
import gigData from '../public/assets/gigData'

const When: NextPage = () => {
  return (
    <>
      <Meta title="When is Dirt Hand performing?" />
      <ul className='when'>
        { 
          gigData.length > 0
          ? gigData.map((gig, i) => <li key={'w' + i} className='when-item'><Gigs gig={gig} /></li>)
          : <li className='when-item--no'>No gigs just now.</li>
        }
      </ul>
    </>
  )
}

export default When
