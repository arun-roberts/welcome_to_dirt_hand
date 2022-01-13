import type { NextPage } from 'next'
import Script from 'next/script'
import Meta from '../components/Meta'
import YouTube from 'react-youtube'

const Videos: NextPage = ({ data }: object) => {
  const playlist = data.items.map(e => e.snippet.resourceId.videoId)
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      playsinline: 0,
      autoplay: 1,
      list: 'PLPRzFKoUr7vMCkA1SpyzBzUjftyrtjmp0',
      listType: playlist,
      modestbranding: 1,
      rel: 0,
      loop: 1,
    },
  };
  return (
      <>
        <Meta title="Watch Dirt Hand." />
        <YouTube className='what-watch' videoId='47nseb2d0C0' opts={opts} />
      </>
  )
}

export default Videos

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLPRzFKoUr7vMCkA1SpyzBzUjftyrtjmp0&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}