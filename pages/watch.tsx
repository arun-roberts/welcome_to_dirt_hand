import type { NextPage, GetStaticProps } from 'next'
import Meta from '../components/Meta'
import YouTube from 'react-youtube'

const Videos: NextPage = ({ playlist }: any) => {
  const opts: {} = {
      playerVars: {
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

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PLPRzFKoUr7vMCkA1SpyzBzUjftyrtjmp0&key=${process.env.YOUTUBE_API_KEY}`)
  const data = await res.json();
  const playlist: string[] = await data.items.map((e: any) => e.snippet.resourceId.videoId)
  return {
    props: {
      playlist
    }
  }
}