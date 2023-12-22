import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Questions from '@/components/Questions'
import Reservations from '@/components/Reservations'
import Map from '@/components/Map'
import Testimonal from '@/components/Testimonal'
import Gallery from '@/components/Gallery'
import Signature from '@/components/Signature'
import Menu from '@/components/Menu'
import Location from '@/components/Location'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyoto Hibachi Sushi & Bar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar></Navbar>
      <Hero></Hero>
      <Location></Location>
      <Menu></Menu>
      <Signature></Signature>
      <Gallery></Gallery>
      <Testimonal></Testimonal>
      <Reservations></Reservations>
      <Map></Map>
      <Questions></Questions>
      <Footer></Footer>

      
    </>
  )
}
