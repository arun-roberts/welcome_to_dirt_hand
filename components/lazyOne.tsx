import dynamic from 'next/dynamic'
import type { Record } from '../lib/types'
const Bandcamp = dynamic(() => import('./bandcamp'))

const LazyOne = ({record, isLoaded}: {record: Record, isLoaded: boolean}) => {
    return <>{isLoaded && <Bandcamp record={record} />}</>
}

export default LazyOne