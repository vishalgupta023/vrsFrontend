import React, { useState } from "react";
import "./footer.css";
import {BsFacebook} from "react-icons/bs"
import {AiFillLinkedin,AiOutlineInstagram,AiFillTwitterCircle,AiOutlineYoutube} from "react-icons/ai"

import { Link } from "react-router-dom";

export default function Footer() {
    const [bool1, setBool1] = useState(true);
    const [bool2, setBool2] = useState(true);
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-child1">
                    <div className="footer-child1-content">
                        <Link to="/">
                            <img
                                src="/assets/images/vrsLogo.png"
                                alt="white-logo"
                                width="150px"
                            />
                        </Link>
                        <p style={{ fontSize: "14px", lineHeight: "20px" }}>
                        If You Want To Get Alerts Of New Jobs Posted Here Or Any New Services Or Alerts From Our Portal Which Will Be Keep You Updated Subscribe Our Portal.
                        </p>
                        <div className="suscribe-mail">
                            <input type="email" placeholder="Your Email Address"/>
                            <button className="shining-btn">Suscribe</button>
                        </div>
                        <div >
                            <ul className="socailmedia-icons">
                                <li><a href=""><BsFacebook className="socail-icons"/></a></li>
                                <li><a href=""><AiFillLinkedin className="socail-icons"/></a></li>
                                <li><a href=""><AiOutlineInstagram className="socail-icons"/></a></li>
                                <li><a href=""><AiOutlineYoutube className="socail-icons"/></a></li>
                                <li><a href=""><AiFillTwitterCircle className="socail-icons"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-child2">
                    <div className="footer-child2-content">
                        <h4 style={{ marginBottom: "20px" }}>Heading 1</h4>
                        <div className="footer-links">
                            <Link href="#" to="/">
                                Home
                            </Link>

                            <Link href="#" to="/data-analytics">
                                Companies
                            </Link>
                            <Link href="#" to="/how-it-works">
                                How it works
                            </Link>
                            <Link href="#">Interview assistance</Link>
                            <Link href="#">Hire from us</Link>
                            <Link to="/about-us">About us</Link>
                            <Link to="/contactUs">Contact us</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-child3">
                    <div className={`footer-child2-content ${bool1 ? "child2" : null}`}>
                        <h4 style={{ marginBottom: "20px" }}>Heading 2 &nbsp;<span onClick={() => setBool1(!bool1)}>&#8681;</span></h4>
                        <div
                         className={`footer-child2-content ${bool1 ? "child2" : null  }`} >
                            <h4 style={{ marginBottom: "20px" }}>
                                Tracks &nbsp;
                                <span onClick={() => setBool1(!bool1)}>
                                    &#8681;
                                </span>
                            </h4>

                            <div className="footer-links">
                                <Link href="#">Jobs</Link>
                                <Link className="hlp-accord" href="#">
                                    Jobs 2
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
    
                    <div className="footer-child4">
                        <div className={`footer-child2-content ${bool2 ? "child2" : null}`}>
                            <h4 style={{ marginBottom: "20px" }}>
                                Heading 3&nbsp;
                                <span onClick={() => setBool2(!bool2)}>&#8681;</span>
                            </h4>
                            <div className="footer-links">
                                <Link to="/data-analytics">Something 1</Link>
                                <Link to="/machine-learning">
                                    {" "}
                                    getjobs
                                </Link>
                            </div>
                        </div>
                    </div>
             </div>
                <div className="footer-foot">
                    <p style={{ fontSize: "12px" }}>
                        This site is protected by reCAPTCHA and the Google Privacy Policy and
                        Terms of Service
                    </p>
                    <div className="footer-terms">
                        {" "}
                        <Link to="/terms-of-use">Term of use .</Link>
                        <Link to="/refund-policy">Refund Policy .</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
            );
}