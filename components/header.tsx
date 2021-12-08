import Link from 'next/link'
import Image from 'next/image'
import hands from '../public/assets/just_hands_cropped.jpg'
// import styles from '../styles/Home.module.sass'

const Header = () => {
  return (
    <nav className='nav'>
        {/* <h1 className='nav__heading}>This is Dirt Hand.</h1> */}
        <ul className='nav-menu'>
            <li className='nav-menu__item'>
                <Link href='/who' >
                    <a className='nav-menu__button'>Who</a>
                </Link>
            </li>
            <li className='nav-menu__item'>
                <Link href='/what' >
                    <a className='nav-menu__button'>What</a>
                </Link>
            </li>
            <li className='nav-menu__item'>
                <Link href='/when'>
                    <a className='nav-menu__button'>When</a>
                </Link>
            </li>
        </ul>
        <figure className='nav-icon'>
            <a href="https://www.instagram.com/dirthandband/">
                <Image src={hands} alt="hands" />
            </a>
        </figure>
    </nav>
  )
}

export default Header
