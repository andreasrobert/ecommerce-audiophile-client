import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Intro from '../components/intro'
import Footer from '../components/footer'
import WhatIsAudiophile from '../components/whatIsAudiophile'
import Category from '../components/category'
import Test from '../components/test'



export default function Home() {

  

  return (
    <>
    {/* <div className={styles.container}> */}
      <Navbar></Navbar>
      <Intro></Intro>
      <Category></Category>
      <WhatIsAudiophile></WhatIsAudiophile>
      <Footer></Footer>
    {/* </div> */}
    </>
  )
}
