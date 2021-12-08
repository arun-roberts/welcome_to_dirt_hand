import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.sass'

const Bio: NextPage = () => {
  return (
    <div className='who'>
      <section className='who-item'>
        <p className='who-item__bio'>
            Dirt Hand is a collaborative music platform curated by Arun Roberts. Initially, Arun just wanted to get away from the metronome. He took that desire and turned it into an arrangement and performance aesthetic that would become the Dirt Hand EP. Then he encountered the canons of Steve Reich so he drew up several sets of his own such canons and locked them in a studio with 4 of his songs and a 9-piece jazz band. The result was packaged as a record bearing the name “The Thorn Variations” but in truth that name more accurately describes a process than it does a work. As a process “The Thorn Variations” has been successfully performed by various ensemble types and has been described variously as “an inspired and fully textured tentative tightrope for Roberts’ deep growling storytelling” and “one of those golden bullets of ratification for the extraordinary”.
        </p>
      </section>
      <section className='who-item who-friends'>
        <h2>Friends of Dirt Hand:</h2>
        <Link href="http://www.samboon.com.au/"><a>Sam Boon</a></Link> || 
        <Link href="https://www.ballparkmusic.com/"><a> Sam Cromack</a></Link> || 
        <Link href="https://www.facebook.com/ameladmusicpage/"><a> Amela Duheric</a></Link> || 
        <Link href="http://www.tristanhoogland.com/"><a> Tristan Hoogland</a></Link> || 
        <Link href="https://soundcloud.com/hanneslackmann"><a> Hannes Lackmann</a></Link> || 
        <Link href="https://ahmsound.com/"><a> Andrew McEwan</a></Link> || 
        <Link href="https://www.jakemiller.com.au/"><a> Jake Miller</a></Link> || 
        <Link href="https://www.instagram.com/zjm_art/"><a> Zac Moynihan</a></Link> || 
        <Link href="https://www.hachikumusic.com/"><a> Anika Ostendorf</a></Link> || 
        <Link href="https://www.facebook.com/tushararose/"><a> Tushara Rose</a></Link> || 
        <Link href="https://www.facebook.com/hellotuttut/"><a> Eamon Roy</a></Link> || 
        <Link href="https://soundcloud.com/ericstark"><a> Eric Stark</a></Link> || 
        <Link href="http://www.sloemotion.com.au/"><a> Bec Todd</a></Link> || 
        <Link href="https://www.facebook.com/Jessielwarrenmusic/"><a> Jessie L Warren</a></Link>
      </section>
    </div>
  )
}

export default Bio