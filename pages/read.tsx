import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import data from '../public/assets/data.js'
import Meta from '../components/Meta'
import AlbumLyrics from '../components/AlbumLyrics'
import WhatButtons from '../components/WhatButtons'
import AppContext from '../public/assets/context'

const Read: NextPage = () => {
    const [ counter, setCounter ] = useState(0)
    const value = useContext(AppContext);
    let { isMobile } = value.state;

  return (
        <>
            <Meta title="Read Dirt Hand." />
            {
                isMobile
                ? <>
                    <AlbumLyrics record={data.what[counter]}/> 
                    <WhatButtons setCounter={setCounter} counter={counter} what={data.what} />
                </>
                : data.what.map((record, i) => (
                <AlbumLyrics key={'r' + i} record={record} />
                ))
            }
        </>
    )
}


export default Read
     
     