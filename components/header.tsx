import Link from 'next/link'
import Image from 'next/image'
import hands from '../public/assets/just_hands_cropped.jpg'
import styles from '../styles/Home.module.sass'

const Header = () => {
  return (
    <nav className={styles.nav}>
        {/* <h1 className={styles.nav__heading}>This is Dirt Hand.</h1> */}
        <ul className={styles.nav_menu}>
            <li className={styles.nav_menu__item}>
                <Link href='/who' >
                    <a className={styles.nav_menu__button}>Who</a>
                </Link>
            </li>
            <li className={styles.nav_menu__item}>
                <Link href='/what' >
                    <a className={styles.nav_menu__button}>What</a>
                </Link>
            </li>
            <li className={styles.nav_menu__item}>
                <Link href='/when'>
                    <a className={styles.nav_menu__button}>When</a>
                </Link>
            </li>
        </ul>
        <figure className={styles.nav_icon}>
            <a href="https://www.instagram.com/dirthandband/">
                <Image src={hands} alt="hands" />
            </a>
        </figure>
    </nav>
  )
}

export default Header
