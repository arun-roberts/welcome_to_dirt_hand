import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import data from '../public/assets/data.js'
import Meta from '../components/Meta'
import AlbumLyrics from '../components/albumLyrics'
import AlbumLyricsMobile from '../components/albumLyricsMobile'
import WhatButtons from '../components/whatButtons'
import AppContext from '../public/assets/context'

const Read: NextPage = () => {
    const [ scrollPosition, setScrollPosition ] = useState([0, 0, 0]);
    const [ counter, setCounter ] = useState(0)
    const value = useContext(AppContext);
    let { isMobile } = value.state;
    const setScroll = (num: number) => {
        const currentPos: number[] = [...scrollPosition];
        currentPos[counter] = num
        setScrollPosition(currentPos)
    }

  return (
        <>
            <Meta title="Read Dirt Hand." />
            {
                isMobile
                ? <div>
                    <AlbumLyricsMobile scrollPosition={scrollPosition[counter]} setScroll={(num) =>  setScroll(num)} record={data.what[counter]}/> 
                    <WhatButtons setCounter={setCounter} what={data.what} />
                </div>
                : data.what.map((record, i) => (
                <AlbumLyrics key={'r' + i} record={record} />
                ))
            }
        </>
    )
}


export default Read
     
     