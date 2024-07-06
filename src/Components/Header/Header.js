import React from 'react';
import './Header.css'
import bannerImg from '../images/rm373batch4-15 - Copy.jpg'



const Header = () => {
    return (
        <div className="two-sided-section">
      <div className="text-side">
        <h1>Safeguarding the Web</h1>
        <h3> with Powerful Encryption.</h3>
       
      </div>
      <div className="image-side">
      <img src={bannerImg} alt="" />
      </div>
    </div>
     
    );
};

export default Header;