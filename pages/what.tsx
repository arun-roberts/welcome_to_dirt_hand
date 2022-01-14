import Link from 'next/link'
import type { NextPage } from 'next'
import Meta from '../components/meta'

const What: NextPage = () => {
  return (
    <>
      <Meta title="What is Dirt Hand?" />
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
