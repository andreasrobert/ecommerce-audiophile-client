import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Intro from '../components/intro'
import Footer from '../components/footer'
import WhatIsAudiophile from '../components/whatIsAudiophile'
import Category from '../components/category'
import HomeMiddle from '../components/homeMiddle'


export default function Home() {
  const runServer = () => {
    fetch("https://ecommerce-audiophile.herokuapp.com/", {
          method: "GET"
        }) 
  };
  runServer();
  

  return (
    <>
    {/* <div className={styles.container}> */}
      <Navbar></Navbar>
      <Intro></Intro>
      <Category></Category>
      <HomeMiddle></HomeMiddle>
      <WhatIsAudiophile></WhatIsAudiophile>
      <Footer></Footer>
    {/* </div> */}
    </>
  )
}
