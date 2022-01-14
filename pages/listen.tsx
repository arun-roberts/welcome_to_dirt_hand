import type { NextPage } from 'next'
import { useState, useContext } from 'react'
import Meta from '../components/Meta'
import Bandcamp from '../components/bandcamp'
import LazyOne from '../components/lazyOne'
import WhatButtons from '../components/whatButtons'
import data from '../public/assets/data.js'
import AppContext from '../public/assets/context'

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
  const [ forReload, setForReload ] = useState('')
  const value = useContext(AppContext);
  let { isMobile } = value.state;
  
  const handleClick = (title: string) => {
    const load = {...trueTitles}
    const change: {[key: string]: boolean} = {...titles}
    change[title] = true
    setIsDisplayed(change)
    if(forReload.length > 0) {
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
      <Meta title='Listen to Dirt Hand.' /> 
      {
      isMobile
      ? <div>
          <Bandcamp record={data.what[counter]}/> 
          <WhatButtons setCounter={setCounter} what={data.what} />
        </div>
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