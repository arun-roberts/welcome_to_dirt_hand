import type { NextPage } from 'next'
import Link from 'next/link'
import { useState, useContext } from 'react'
import AppContext from '../public/assets/context'

const Home: NextPage = ({who}) => {
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

// export async function getServerSideProps(context) {
//   try {
//     // client.db() will be the default database passed in the MONGODB_URI
//     // You can change the database by calling the client.db() function and specifying a database like:
//     // const db = client.db("myDatabase");
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands
    
//     const client = await clientPromise
//     const db = await client.db("welcomeToDirtHand").collection("pageData").findOne({})
      
//     console.log(db)
//     return {
//       props: { 
//         isConnected: true,
//         // who: db.who
//       },
//     }
//   } catch (e) {
//     console.error(e)
//     return {
//       props: { isConnected: false },
//     }
//   }
// }
