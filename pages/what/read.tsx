import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import data from '../../public/assets/data.js'

const Read: NextPage = () => {
    const [ isMobile, setIsMobile ] = useState(false)
    useEffect(() => {
        
        setIsMobile(window.matchMedia(`(max-width: 768px)`).matches ) 
        
    },[])
  return (
        <div className="container what-read">{
            data.what.map((record, i) => (
                <section key={'r' + i} className="read-item">
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
                    }<div className="album-bottom"></div>
                    </div>
                </section>
            )
        )} 
        </div>
        )
    }


export default Read
     
     