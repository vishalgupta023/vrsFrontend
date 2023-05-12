import React from 'react'
import "./socailLink.css";
import {BsFacebook} from "react-icons/bs"
import {AiFillLinkedin,AiOutlineInstagram,AiFillTwitterCircle,AiOutlineYoutube} from "react-icons/ai"

export default function SoailLink() {
    return (
        <div className='socail-link'>
            <div className="container contact-footer">
                <div className="socail-left-box">
                    <div className="contact-company-logo">
                        <img src="assets/images/vrsLogo.png" alt="vrs-Logo" />
                    </div>
                    <div className="socail-links-container">
                        <h3>Follow us on social media</h3>
                        <div className="socail-contact-link">
                            <ul className="socailmedia-icons">
                                <li><a href=""><BsFacebook className="socail-icons" /></a></li>
                                <li><a href=""><AiFillLinkedin className="socail-icons" /></a></li>
                                <li><a href=""><AiOutlineInstagram className="socail-icons" /></a></li>
                                <li><a href=""><AiOutlineYoutube className="socail-icons" /></a></li>
                                <li><a href=""><AiFillTwitterCircle className="socail-icons" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="socail-right-box">
                    <img src="assets/images/contact-footer.webp" alt="" />
                    <img className='hide-original' src="assets/images/vrsLogo2.jpg" alt="" width="300px" />
                </div>
            </div>
        </div>
    )
}
