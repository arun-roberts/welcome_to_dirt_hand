import type { Record } from "../pages/what/listen"

const AlbumLyrics = ({ record }: { record: Record }) => {
    return (
        <section className="read-item">
            <h2 className="read-item__heading">{record.title}</h2>
            <div className="album">
                <div className="album-top"></div>{
                record.lyrics.map((song, i) => (
                    <div key={'s' + i} className="song">
                        <h3 className="song__title">{song.title}</h3>
                        <ul>
                            {song.text.map((line, i) => (
                            <li key={'l' + i} className="song__p">
                            {line}
                            </li>))}
                        </ul>
                    </div>
                ))
            }
            </div>
        </section>
    )
}

export default AlbumLyrics