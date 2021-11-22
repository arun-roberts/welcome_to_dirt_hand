import Header from './header'
import styles from '../styles/Home.module.sass'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.siteContainer}>
        <Header />
        <main className='container'>{children}</main>
    </div>
  )
}

export default Layout
