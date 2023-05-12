import React, { useEffect, useState } from 'react'
import Hero from '../Parts/herosection/Hero'
import Location from "../Parts/joblocation/Location"
import Faq from "../Parts/FAQ/Faq"
import Footer from '../Components/Footer/Footer'


export default function Homepage({setTrigger1}) {



  return (
    <div>

        <Hero setTrigger1={setTrigger1} />
        <Location />
        <Faq />
        <Footer />

    </div>
  )
}
