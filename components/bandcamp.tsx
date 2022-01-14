import type { Record } from '../lib/types'

const Bandcamp = ({record}: {record: Record}) => {
    return (
        <iframe style={{border: '0', width: '350px', height: '470px'}} src={record.bandcampEmbed.src} seamless>
            <a href={record.bandcampEmbed.href}>{record.title} by Dirt Hand</a>
        </iframe>
    )
}

export default Bandcamp