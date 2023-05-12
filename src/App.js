import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Jobpage from "./Pages/Jobpage/Jobpage";
import Homepage from './Pages/Homepage';
import Navbar from './Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import Login from "./Components/popups/login/Login"
import SignUp from "./Components/popups/signUp/Signup"

function App() {
  const [trigger1, setTrigger1] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  let body;
  let background;
  useEffect(() => {
    body = document.body;
    background = document.querySelector(".backgound-filter");
    if (trigger1||trigger2){
      body.style.overflow="hidden"
      background.style.filter="blur(5px)"
    }else{
      body.style.overflow="auto"
      background.style.filter="blur(0px)"
    }
    if(trigger2){
      setTrigger1(false)
    }
  }, [trigger1,trigger2])
  return (
      <BrowserRouter>
       {trigger1 && <Login setTrigger1={setTrigger1} setTrigger2={setTrigger2}/>}
      {trigger2 && <SignUp setTrigger2={setTrigger2} />}
      <Navbar setTrigger1={setTrigger1} setTrigger2={setTrigger2} />
      <div className='backgound-filter'>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/jobs' element={<Jobpage setTrigger1={setTrigger1}/>} />
        {/* <Route path='/login' element={<Login/>} /> */}
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
