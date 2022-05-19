import type { NextPage } from 'next'
import Image from 'next/image'
import { useState, useContext } from 'react'
import AppContext from '../public/assets/context'

const Home: NextPage = () => {
  const [ isClicked, setIsClicked ] = useState(false);
  const value = useContext(AppContext);
  let { isMobile } = value.state;
  let { setIsMenuOpen } = value;

  return (
    <>
      <div className={isClicked ? 'welcome welcome--hidden' : 'welcome'}>
        <a 
          className='welcome__button' 
          onClick={() => {
            setIsMenuOpen(true);
            setIsClicked(true);
          }}
        >
          Welcome to Dirt Hand{isMobile ? '' : '.'}
        </a>
      </div>
      { isClicked &&
        <figure className='home-image'>
          <Image 
            src={ isMobile ? '/assets/dirt-hand-BAB-poster-smaller.jpg' : '/assets/dirt-hand-BAB-poster-desktop.jpg'}
            layout='fill'
            objectFit='contain'
          />
        </figure>
      }

    </>
  )
}

export default Home

