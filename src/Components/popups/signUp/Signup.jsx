import React, { useState } from 'react';
import "./signup.css";
import { ImCross } from "react-icons/im"
import { useNavigate } from 'react-router-dom';
import Spinner from "..//../spinner/Spinner"

export default function Login(props) {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mobile, setMobile] = useState("")
    const [cpassowrd, setCpassword] = useState("")
    const [bool, setbool] = useState(false)
    const [otp, setOtp] = useState("")
    const [display, setDisplay] = useState(false);
    const [loading, setLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!fullname || !email || !password || !mobile) {
            setbool(true)
            return false
        } else {
            if (password == cpassowrd) {
                register();
                sendOtp();
            } else {
                alert("password not matched");
                return false
            }
        }
    }
    async function register() {
        let result = await fetch("http://localhost:4000/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullname, email, password, mobile })
        })
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result))
    }

    async function sendOtp() {
        setLoading(true);
        let result = await fetch("http://localhost:4000/otp-sent", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        })
        result = await result.json();
        
        if (result) {
            setDisplay(true);
            setLoading(false)
        }else{
            alert("otp sending failed")
        }
    }
    // OTP----funcrions
   async function handleSubmitotp(e) {
        e.preventDefault()
        let numOtp=Number(otp)
        let result = await fetch("http://localhost:4000/otp-verify", 
        {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({email,otp:numOtp })
        })
        result=await result.json();
        console.log(result)
        if(result){
            alert("otp-verification sucessfull");
            props.setTrigger2(false)
            setTimeout(()=>{
                navigate("/jobs")
            },0);
        
        }else{
            alert("otp-enterd does not match")
        }
    }
    return (
        <>

            <div className="login-page">
                <div className="right-side">
                    <ImCross className='cross-icon' onClick={() => props.setTrigger2(false)} />
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit} >
                        <div className='input-box'>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" value={fullname} id="fullname" name="fullname" placeholder="Enter Full Name" onChange={(e) => setFullname(e.target.value)} />
                            {bool && !fullname && <span>Enter a valid field</span>}
                        </div>
                        <div className='input-box'>
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="text" value={mobile} id="mobile" name="mobile" placeholder="Enter phone Name" onChange={(e) => setMobile(e.target.value)} />
                            {bool && !mobile && <span>Enter a valid field</span>}
                        </div>
                        <div className='input-box'>
                            <label htmlFor="email">Email Id</label>
                            <input type="email" value={email} id="email" name="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} />
                            {bool && !email && <span>Enter a valid field</span>}
                        </div>
                        <div className='input-box'>
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} id="password" name="password" placeholder="Enter your passowrd " onChange={(e) => setPassword(e.target.value)} />
                            {bool && !password && <span>Enter a valid field</span>}
                        </div>
                        <label htmlFor="Cpassword">Confirm passowrd</label>
                        <input type="password" id="Cpassword" name="Cpassword" value={cpassowrd} placeholder="Confirm your passowrd " onChange={(e) => setCpassword(e.target.value)} />
                        <button type="submit" >Get Started</button>
                    </form>
                </div>
                <div className="left-side">
                    {
                        loading&&<Spinner/>
                    }
                    <h2>Welcome to our Job Portal</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lectus et arcu dignissim efficitur.</p>

                    <div className={display ? "email-otp-verification-show" : "email-otp-verification-hide"}>
                        <ImCross className='cross-icon' onClick={() => setDisplay(false)} />
                        <div className="form-container">
                            <h3>verify otp!</h3>
                            <p>We have send six digit code to {email}</p>

                            <form className="otp-form">
                           <input type="text" value={otp}
                              onChange={(e)=>setOtp(e.target.value)}     />
                            </form>
                            <div>
                                <button className='verify-btn' type="submit" onClick={handleSubmitotp}>Verify</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



