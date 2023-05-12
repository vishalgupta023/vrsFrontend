import React from 'react'
import "./hero.css";

export default function Hero({setTrigger1}) {
    return (
        <div className='hero'>
            <div className="container hero-box">
                <div className="hero-left-box">
                    <h1>Find Your Dream Job with <span style={{ color: "#FF7B29" }}>VRSamadhan</span></h1>
                    <p>Get the most exiting jobs from all around india and grow your carrer fast and others</p>
                    <div className="hero-login-setion">
                        <h3>Call HR directly to fix interview for FREE</h3>
                        <button onClick={()=>setTrigger1(true)}>Get a Job Now</button>
                    </div>
                </div>
                <div className="hero-right-box">
                    <div className="hero-img-container">
                        <img src="assets/images/jobs-professions.png" alt="" height="100%" />
                    </div>
                </div>
            </div>

        </div>
    )
}
