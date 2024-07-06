import React, { useContext, useState } from 'react';
import './Navbar.css'
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import logo from '../images/web.png'
import { ImCross } from "react-icons/im"
import { AuthContext } from '../../providers/AuthProviders';

const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    const {user,handleSignOut} = useContext(AuthContext)
    return (
        <>
         <nav className='navbar'>
       <img src={logo} width={"150px"} alt="" />
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
          {/* <Link to='/platform' className='services'>
            <li>Platform</li>
          </Link> */}

          {/* <Link to='/solution' className='about'>
            <li>Solutions</li>
          </Link>
       
          <Link to='/services' className='skills'>
            <li>Services</li>
          </Link> */}
        
      
        
          {
            user ?
            <>
            <Link to='/profile' style={{fontWeight:'700'}} className='home'>
           <li style={{color:'red'}}>{user.email}</li>
         </Link>
         <button onClick={handleSignOut}>Log Out</button>

            </>
           :
           <Link to='/login' className='home'>
           <li className='loginBtn'>login</li>
         </Link>
           
          }
     
         
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
      
            
        
    
    );
};

export default Navbar;