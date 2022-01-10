import type { Record } from "../pages/what/listen"

const AlbumLyrics = ({ record }: { record: Record }) => {
    return (
        <section className="read-item scroll">
            <h2 className="read-item__heading">{record.title}</h2>
            <div className="read-item__album">
                <div className="scroll-top"></div>{
                record.lyrics.map((song, i) => (
                    <div key={'s' + i} className="read-item__song">
                        <h3 className="read-item__song-title">{song.title}</h3>
                        <ul>
                            {song.text.map((line, i) => (
                                <li key={'l' + i}>
                                    {line}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }<div className="scroll-bottom"></div>
            </div>
        </section>
    )
}

export default AlbumLyrics