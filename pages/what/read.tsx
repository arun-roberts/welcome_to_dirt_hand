import type { NextPage } from 'next'
import data from '../../public/assets/data.js'
import AlbumLyrics from '../../components/albumLyrics'
import { useContext } from 'react'
import AppContext from '../../public/assets/context'

const Read: NextPage = () => {
    const value = useContext(AppContext);
    let { isMobile } = value.state;
  return (
        <>{
            data.what.map((record, i) => (
               <AlbumLyrics key={'r' + i} record={record} />
            )
        )} 
        </>
    )
}


export default Read
     
     