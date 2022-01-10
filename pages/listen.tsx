import type { NextPage } from 'next'
import { useState, useContext } from 'react'
import Bandcamp from '../components/bandcamp'
import data from '../public/assets/data.js'
import AppContext from '../public/assets/context'
import LazyOne from '../components/lazyOne'

type Record = {
  title: string;
    lyrics: {
        title: string;
        text: string[];
    }[];
    linerNotes: string;
    bandcampEmbed: {
        src: string;
    };
    youtubeLinks: never[];
}

const titles: {[key: string]: boolean} = {}
const trueTitles: {[key: string]: boolean} = {}
data.what.forEach((record) => {
  titles[record.title] = false;
  trueTitles[record.title] = true;
})

const Listen: NextPage = () => {
  const [ isDisplayed, setIsDisplayed ] = useState(titles)
  const [ counter, setCounter ] = useState(0)
  const [ isLoaded, setIsLoaded ] = useState({...trueTitles})
  const [ forReload, setForReload ] = useState(null)
  const value = useContext(AppContext);
  let { isMobile } = value.state;

  const handleClick = (title: string) => {
    const load = {...trueTitles}
    const change: {[key: string]: boolean} = {...titles}
    change[title] = true
    setIsDisplayed(change)
    if(forReload) {
      load[forReload] = false
      setIsLoaded(load)
    }
    setTimeout(() => {
      setIsLoaded(trueTitles)
      setForReload(title)
    }, 500);
  }

  return (
    <>
      {
      isMobile
      ? <>
          <Bandcamp record={data.what[counter]}/> 
          <div className='what__buttons'>
            {counter > 0 && <button className='what__buttons--prev' onClick={() => setCounter(counter - 1)}>{data.what[counter - 1].title}</button>}
            {counter < data.what.length - 1 && <button className='what__buttons--next' onClick={() => setCounter(counter + 1)}>{data.what[counter + 1].title}</button>}
          </div>
        </>
      : data.what.map((record, i) => 
        <div key={'r' + i} className="what-listen__bandcamp">
          <LazyOne isLoaded={isLoaded[record.title]} record={record} />
          <div className={isDisplayed[record.title] ? "cover-div--invisible" : "cover-div"}>
              <button className="what-listen__button" onClick={() => handleClick(record.title)}>{record.title}</button>
          </div>
        </div>
      )
      } 
    </>
  )
}

export default Listen

export type { Record }