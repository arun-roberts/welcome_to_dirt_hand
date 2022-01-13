import dynamic from 'next/dynamic'
const Bandcamp = dynamic(() => import('./Bandcamp'))

const LazyOne = ({record, isLoaded}) => {
    return <>{isLoaded && <Bandcamp record={record} />}</>
}

export default LazyOne