import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  const navRef=useRef();
  const navigate = useNavigate()
  const [click, setClick] = useState(false);
  const [img, setImg] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const auth = JSON.parse(localStorage.getItem("user"));
  function handleLogout() {
    localStorage.clear();
    navigate("/")
  }
  window.onscroll=function(){
    if(document.documentElement.scrollTop>499){
      setImg(true);
      navRef.current.style.padding="10px 0px"
      navRef.current.style.boxShadow="0 0 2px #999";
    }
 if(document.documentElement.scrollTop<400){
    setImg(false);
    navRef.current.style.boxShadow="none";
    navRef.current.style.padding=" 0px"
 }
  }

  return (
    <nav className='navbar' ref={navRef} >
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
         {
            img?<img src="assets/images/vrsLogo2.jpg" alt="main-logo" width="150px" />:<img src="assets/images/vrsLogo.png" alt="main-logo" />
         } 
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {
            !auth && (<li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>)
          }
          <li className='nav-item'>
            <Link to='/jobs' className='nav-links' onClick={closeMobileMenu}>
              Jobs
            </Link>
          </li>
          <li className='nav-item'>

          </li>
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          {/* Conditionally render the login and signup buttons only on small displays */}
          <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Log In
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/signup'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {/* Render the login and signup buttons on large displays */}
        <div className='nav-buttons'>
          {!auth && <div onClick={() => props.setTrigger1(true)} className='btn-login'>
            <img src="assets/images/login-icon.svg" alt="login-icon" /> Login/SignUp
          </div>}
          {auth ? (<div to='/signup' className='btn-signup' onClick={handleLogout}>
            logout
          </div>) : (<div to='/signup' className='btn-signup'>
            Hire Candidates
          </div>)}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
