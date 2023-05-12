import React, { useState } from 'react';
import "./login.css";
import { useNavigate } from "react-router-dom"
import { ImCross } from "react-icons/im"

export default function Login(props) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bool, setbool] = useState(false)
  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      setbool(true)
    } else {
      verifyAcc();
    }
  }
  const verifyAcc = async () => {
    let result = await fetch("http://localhost:4000/acc-verify", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email })
    })
    result = await result.json();
    if (result) {
      loginData()
    } else {
      alert("No account by this id please signUp!!")
    }
  }
  const loginData = async () => {
    let result = await fetch("http://localhost:4000/login", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    result = await result.json();
    if (result.fullname) {
      console.log("working")
      localStorage.setItem("user", JSON.stringify(result));
      props.setTrigger1(false);
      setTimeout(()=>{
        navigate("/jobs");
      },0)
    } else {
      alert("Either email or password wrong!!")
    }
  }
  return (
    <>
      <div className="login-page">
        <div className="left-side">
          <h2>Welcome to our Job Portal</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor lectus et arcu dignissim efficitur.</p>
        </div>
        <div className="right-side">
          <ImCross className='cross-icon' onClick={() => props.setTrigger1(false)} />
          <h2>Login</h2>
          <form onSubmit={handleSubmit} >
            <div className="input-box">
              <label htmlFor="email">Email Id</label>
              <input type="email" id="email" name="email" placeholder="Enter your email address" onChange={(e) => setEmail(e.target.value)} />
              {bool && !email && <span>Enter a valid field</span>}
            </div>
            <div className="input-box">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your passowrd " onChange={(e) => setPassword(e.target.value)} />
              {bool && !password && <span>Enter a valid field</span>}
            </div>
            <button type="submit">Get Started</button>
          </form>
          <h5 className='account-check'>Dont have account yet <span onClick={() => props.setTrigger2(true)} className='signup-link'>SignUp</span> here</h5>
        </div>
      </div>
    </>
  )
}



