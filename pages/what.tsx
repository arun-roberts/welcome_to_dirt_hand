import Link from 'next/link'
import type { NextPage } from 'next'

const What: NextPage = () => {
  return (
    <>
      <div className='what'>
        <Link href='/read'>
          <a className='what__a'>READ</a>
        </Link>
      </div>
      <div className='what'>
        <Link href='/listen'>
          <a className='what__a'>LISTEN</a>
        </Link>
      </div>
      <div className='what'>
        <Link href='/watch'>
          <a className='what__a'>WATCH</a>
        </Link>
      </div>
    </>
  )
}

export default What
