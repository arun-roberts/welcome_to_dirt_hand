import Link from 'next/link'
import type { Gig } from '../lib/types'

const Gigs = ({ gig }: { gig: Gig}) => {
    return (
        <ul className='gig'>
            <li className='gig-item gig-item--date'>{gig.date}</li>
            <li className='gig-item'>{
                gig.link 
                ? <Link href={gig.link}><a target="_blank" rel="noreferrer noopener">{gig.title}</a></Link> 
                : gig.title
            }</li>
            <li className='gig-item'>{
                gig.venueLink 
                ? <Link href={gig.venueLink}><a target="_blank" rel="noreferrer noopener">{gig.venue}</a></Link> 
                : gig.venue
            }</li>
        </ul>
    )
}

export default Gigs