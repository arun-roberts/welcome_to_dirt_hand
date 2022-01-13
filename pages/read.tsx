import type { NextPage } from 'next'
import data from '../public/assets/data.js'
import AlbumLyrics from '../components/albumLyrics'
import WhatButtons from '../components/whatButtons'
import { useContext, useState } from 'react'
import AppContext from '../public/assets/context'

const Read: NextPage = () => {
    const [ counter, setCounter ] = useState(0)
    const value = useContext(AppContext);
    let { isMobile } = value.state;

  return (
        <>{
            isMobile
            ? <>
                <AlbumLyrics record={data.what[counter]}/> 
                <WhatButtons setCounter={setCounter} counter={counter} what={data.what} />
            </>
            : data.what.map((record, i) => (
               <AlbumLyrics key={'r' + i} record={record} />
            ))
        }</>
    )
}


export default Read
     
     