import type { NextPage } from 'next'
import Link from 'next/link'
import { useState, useContext } from 'react'
import AppContext from '../public/assets/context'


const Home: NextPage = () => {
  const [ isClicked, setIsClicked ] = useState(false);
  const value = useContext(AppContext);
  let { isMenuOpen, isMobile } = value.state;
  let { setIsMenuOpen } = value;

  return (
    <>
      <div className={isClicked ? 'welcome welcome--hidden' : 'welcome'}>
        <a 
          className='welcome__button' 
          onClick={() => {
            setIsMenuOpen(true);
            setIsClicked(true);
          }}
        >
          Welcome to Dirt Hand{isMobile ? '' : '.'}
        </a>
      </div>

    </>
  )
}

export default Home



// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const data = await res.json()

//   return {
//     props: {
//       data
//     }
//   }
// }

// 2. This code loads the IFrame Player API code asynchronously.
              // var tag = document.createElement('script');

              // tag.src = "https://www.youtube.com/iframe_api";
              // var firstScriptTag = document.getElementsByTagName('script')[0];
              // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

              // // 3. This function creates an <iframe> (and YouTube player)
              // //    after the API code downloads.
              // var player;
              // function onYouTubeIframeAPIReady() {
              //   player = new YT.Player('player', {
              //     height: '390',
              //     width: '640',
              //     videoId: 'M7lc1UVf-VE',
              //     playerVars: {
              //       'playsinline': 1
              //     },
              //     events: {
              //       'onReady': onPlayerReady,
              //       'onStateChange': onPlayerStateChange
              //     }
              //   });
              // }

              // // 4. The API will call this function when the video player is ready.
              // function onPlayerReady(event) {
              //   event.target.playVideo();
              // }

              // // 5. The API calls this function when the player's state changes.
              // //    The function indicates that when playing a video (state=1),
              // //    the player should play for six seconds and then stop.
              // var done = false;
              // function onPlayerStateChange(event) {
              //   if (event.data == YT.PlayerState.PLAYING && !done) {
              //     setTimeout(stopVideo, 6000);
              //     done = true;
              //   }
              // }
              // function stopVideo() {
              //   player.stopVideo();
              // }