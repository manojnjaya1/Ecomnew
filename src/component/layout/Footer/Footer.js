import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"
const Footer = () => {
  return (
    <footer id="footer">
     <div className="leftFooter">
    <h4>DOWNLOAD OUR APP</h4>
    <p>Download app for android and IOS mobile phone</p>
    <img src={playStore} alt="playstore"/>
    <img src={appStore} alt="Appstore"/>
     </div>

     <div className="midFooter">
         <h1>ECOMMERCE</h1>
         <p>Best Quality is Our Top Priority</p>

         <p>Copyrights 2022 &copy;  manoj</p>
     </div>

     <div className="rightFooter">
      <h4>Follow Us</h4>
      <a href='http://instagram.com/manojnjaya'>Instagram</a>
      <a href='http://instagram.com/manojnjaya'>Facebook</a>
      <a href='http://instagram.com/manojnjaya'>LinkedIn</a>
     </div>

    </footer>

  );
}

export default Footer