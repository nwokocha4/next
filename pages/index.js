import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Homes } from '@/components/Home';
import { NotificationProvider } from 'web3uikit'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { Details } from '@/components/Details'
import { About } from '@/components/About'
import { Map } from '@/components/Map'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Merakee NFT</title>
        <meta name="description" content="Merakee minting dapp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThirdwebProvider activeChain="goerli">
        <NotificationProvider>
     <Navbar/>
     <div id='home'>
     <Homes />
     </div>
     <div id='about'>
     <About />
     </div>
     <div id='details'>
     <Details />
     </div>
     <div id='map'>
     <Map />
     </div>
     <Footer />
     </NotificationProvider>
     
     </ThirdwebProvider>
    </>
  )
}
