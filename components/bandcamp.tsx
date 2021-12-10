import type { Record } from '../pages/what/listen'

const Bandcamp = ({record, handleClick, isDisplayed}: {record: Record, handleClick: (title: string) => null, isDisplayed: {}}) => {
    return (
        <div className="what-listen__bandcamp">
            {isDisplayed[record.title]
            ? <iframe style={{border: '0', width: '350px', height: '570px'}} src={record.bandcampEmbed.src} seamless>
                <a href={record.bandcampEmbed.href}>{record.title} by Dirt Hand</a>
            </iframe>
            : <button className="what-listen__button" onClick={() => handleClick(record.title)}>{record.title}</button>}
        </div>
    )
}

export default Bandcamp