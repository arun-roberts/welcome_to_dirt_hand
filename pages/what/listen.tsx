import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.sass'

const Listen: NextPage = () => {
  const [ isDisplayed, setIsDisplayed ] = useState([ false, false, false ])

  return (
    <div>
      <div>
        {
          isDisplayed[0] 
          ? <iframe style={{border: '0', width: '350px', height: '470px'}} src="https://bandcamp.com/EmbeddedPlayer/album=704923827/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://dirthand.bandcamp.com/album/the-dirt-hand-ep">The Dirt Hand EP by Dirt Hand</a></iframe>
          : <button onClick={() => setIsDisplayed([true, false, false])}>The Dirt Hand EP</button>
        } 
      </div>
      <div>
        {
          isDisplayed[1] 
          ? <iframe style={{border: '0', width: '350px', height: '470px'}} src="https://bandcamp.com/EmbeddedPlayer/album=654295986/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://dirthand.bandcamp.com/album/the-thorn-variations">The Thorn Variations by Dirt Hand</a></iframe>
          : <button onClick={() => setIsDisplayed([false, true, false])}>The Thorn Variations</button>
        } 
      </div>
      <div className="musicPlayer">
        {
          isDisplayed[2] 
          ? <iframe style={{border: '0', width: '350px', height: '786px',}} src="https://bandcamp.com/EmbeddedPlayer/album=2569292405/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://dirthand.bandcamp.com/album/live-in-castlemaine">Live in Castlemaine by Dirt Hand</a></iframe>
          : <button onClick={() => setIsDisplayed([false, false, true])}>Live in Castlemaine</button>
        } 
      </div>
    </div>
  )
}

export default Listen