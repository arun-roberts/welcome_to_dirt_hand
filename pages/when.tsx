import type { NextPage } from 'next'
import Meta from '../components/Meta'
import Gigs from '../components/gigs'
import gigData from '../public/assets/gigData'

const When: NextPage = () => {
  const futureGigs = gigData.filter(g => g.future)
  const pastGigs = gigData.filter(g => !g.future).reverse()
  return (
    <>
      <Meta title="When is Dirt Hand performing?" />
      <ul className='when'>
        { 
          futureGigs.length > 0
          ? futureGigs.map((gig, i) => <li key={'w' + i} className='when-item'><Gigs gig={gig} /></li>)
          : <li className='when-item--no'>No gigs just now.</li>
        }
        { 
          pastGigs.length > 0
          ? pastGigs.map((gig, i) => <li key={'w' + i} className='when-item'><Gigs gig={gig} /></li>)
          : <li className='when-item--no'>No gigs just now.</li>
        }
      </ul>
    </>
  )
}

export default When
