import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import AppContext from '../public/assets/context'

const Header: () => JSX.Element = () => {
    const value = useContext(AppContext);
    let { isMobile, isMenuOpen } = value.state;
    let { setIsMenuOpen } = value;

  return (
    <nav className='nav'>
        <h1 className='nav__heading'>This is Dirt Hand:</h1>
        <ul className={isMobile && !isMenuOpen ? 'nav-menu__closed' : 'nav-menu'}>
            <li className='nav-menu__item'>
                <Link href='/who' >
                    <a className='nav-menu__button' onClick={() => setIsMenuOpen(false)}>Who</a>
                </Link>
            </li>
            <li className='nav-menu__item'>
                <Link href='/what' >
                    <a className='nav-menu__button' onClick={() => setIsMenuOpen(false)}>What</a>
                </Link>
            </li>
            <li className='nav-menu__item'>
                <Link href='/when'>
                    <a className='nav-menu__button' onClick={() => setIsMenuOpen(false)}>When</a>
                </Link>
            </li>
        </ul>
        <figure className={isMobile && isMenuOpen ? 'nav-icon__hidden' : 'nav-icon'}>
            {
                isMobile
                ? <Image src='/assets/just_hands_cropped.jpg' width='1275' height='602' alt="hands" onClick={() => setIsMenuOpen(true)}/>
                : <a href="https://www.instagram.com/dirthandband/" target="_blank" rel="noreferrer noopener">
                    <Image src='/assets/just_hands_cropped.jpg' width='1275' height='602' alt="hands" onClick={() => isMobile && setIsMenuOpen(true)}/>
                </a>
            }
        </figure>
    </nav>
  )
}

export default Header