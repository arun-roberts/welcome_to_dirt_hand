import type { NextPage } from 'next'
import data from '../../public/assets/data.js'
import AlbumLyrics from '../../components/albumLyrics'
import { useContext, useState } from 'react'
import AppContext from '../../public/assets/context'

const Read: NextPage = () => {
    const [ counter, setCounter ] = useState(0)
    const value = useContext(AppContext);
    let { isMobile } = value.state;

  return (
        <>{
            isMobile
            ? <>
                <AlbumLyrics record={data.what[counter]}/> 
                <div className='what-buttons'>
                    {counter > 0 && <button className='what-buttons__prev' onClick={() => setCounter(counter - 1)}>{data.what[counter - 1].title}</button>}
                    {counter < data.what.length - 1 && <button className='what-buttons__next' onClick={() => setCounter(counter + 1)}>{data.what[counter + 1].title}</button>}
                </div>
            </>
            : data.what.map((record, i) => (
               <AlbumLyrics key={'r' + i} record={record} />
            ))
        }</>
    )
}


export default Read
     
     