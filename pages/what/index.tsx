import Link from 'next/link'
import type { NextPage } from 'next'

const What: NextPage = () => {
  return (
    <div className='what'>
      <div className='what'>
        <Link href='/what/read'>
          <a className='what'>READ</a>
        </Link>
      </div>
      <div className='what'>
        <Link href='/what/listen'>
          <a className='what'>LISTEN</a>
        </Link>
      </div>
      <div className='what'>
        <Link href='/what/watch'>
          <a className='what'>WATCH</a>
        </Link>
      </div>
    </div>
  )
}

export default What
