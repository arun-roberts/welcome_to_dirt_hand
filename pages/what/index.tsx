import Link from 'next/link'
import type { NextPage } from 'next'

const What: NextPage = () => {
  return (
    <>
      <div className='what'>
        <Link href='/what/read'>
          <a>READ</a>
        </Link>
      </div>
      <div className='what'>
        <Link href='/what/listen'>
          <a>LISTEN</a>
        </Link>
      </div>
      <div className='what'>
        <Link href='/what/watch'>
          <a>WATCH</a>
        </Link>
      </div>
    </>
  )
}

export default What
