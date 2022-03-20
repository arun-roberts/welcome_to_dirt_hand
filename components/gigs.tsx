import Link from 'next/link'
import type { Gig } from '../lib/types'

const Gigs = ({ gig }: { gig: Gig}) => {
    const fadedStyle = gig.future ? '' : 'gig-item--fade'
    return (
        <ul className='gig'>
            <li className={fadedStyle + ' gig-item--date'}>
                <time dateTime={gig.date}>{gig.dateString}</time>
            </li>
            <li className={fadedStyle}>{
                gig.gigLink && gig.future
                ? <Link href={gig.gigLink}><a target="_blank" rel="noreferrer noopener">{gig.title}</a></Link> 
                : gig.title
            }</li>
            <li className={fadedStyle}>{
                gig.venueLink && gig.future
                ? <Link href={gig.venueLink}><a target="_blank" rel="noreferrer noopener">{gig.venue}</a></Link> 
                : gig.venue
            }</li>
        </ul>
    )
}

export default Gigs