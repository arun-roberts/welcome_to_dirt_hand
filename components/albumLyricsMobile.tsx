import type { Record } from "../lib/types"
import React, { useState, useEffect } from 'react';



const AlbumLyricsMobile = ({ record, scrollPosition, setScroll }: { record: Record, scrollPosition: number, setScroll: (num: number) => void }) => {

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
                setScroll(position);
                console.log(position)
            };
        window.addEventListener('scroll', handleScroll, { passive: true });
            
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setScroll]);
    return (
        <section className="read-item">
            <h2 className="read-item__heading">{record.title}</h2>
            <div className="read-item__album scroll">
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

export default AlbumLyricsMobile