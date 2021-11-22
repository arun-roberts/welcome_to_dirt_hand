import Link from 'next/link'
import type { NextPage } from 'next'
import styles from '../../styles/Home.module.sass'

const What: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <Link href='/what/read'>
          <a className={styles.container}>READ</a>
        </Link>
      </div>
      <div className={styles.container}>
        <Link href='/what/listen'>
          <a className={styles.container}>LISTEN</a>
        </Link>
      </div>
      <div className={styles.container}>
        <Link href='/what/watch'>
          <a className={styles.container}>WATCH</a>
        </Link>
      </div>
    </div>
  )
}

export default What
