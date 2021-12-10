import type { NextPage } from 'next'
import { useState } from 'react'
import Bandcamp from '../../components/bandcamp'
import data from '../../public/assets/data.js'

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

const titles = {}
data.what.forEach((record: Record) => titles[record.title] = false)

const Listen: NextPage = () => {
  const [ isDisplayed, setIsDisplayed ] = useState(titles)
  console.log(isDisplayed)

  const handleClick = (title: String) => {
    const change = {...titles}
    change[title] = true
    setIsDisplayed(change)
  }

  return (
    <>
      {data.what.map((record, i) => (
         <Bandcamp key={'r' + i} handleClick={handleClick} isDisplayed={isDisplayed} record={record} />
      )) }
    </>
  )
}

export default Listen

export type { Record }