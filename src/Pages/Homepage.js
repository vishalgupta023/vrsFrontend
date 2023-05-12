import React, { useEffect, useState } from 'react'
import Hero from '../Parts/herosection/Hero'
import Location from "../Parts/joblocation/Location"
import Faq from "../Parts/FAQ/Faq"
import Footer from '../Components/Footer/Footer'


export default function Homepage() {
  // const [trigger1, setTrigger1] = useState(false);
  // const [trigger2, setTrigger2] = useState(false);
  // let body;
  // let background;
  // useEffect(() => {
  //   body = document.body;
  //   background = document.querySelector(".backgound-filter");
  //   if (trigger1||trigger2){
  //     body.style.overflow="hidden"
  //     background.style.filter="blur(5px)"
  //   }else{
  //     body.style.overflow="auto"
  //     background.style.filter="blur(0px)"
  //   }

  //   if(trigger2){
  //     setTrigger1(false)
  //   }
  // }, [trigger1,trigger2])


  return (
    <div>

        <Hero/>
        <Location />
        <Faq />
        <Footer />

    </div>
  )
}
