import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { SiWhatsapp, SiLinkedin, SiGithub } from 'react-icons/si';
import { HiOutlineMailOpen } from 'react-icons/hi';
const Footer = () => {
  return (
    <div className="footer">
      {/* <img src={Wave} alt="" style={{ width: "100%" }} /> */}
      <div style={{fontSize:'16px'}}>© 2022</div>
        <div style={{fontSize:'16px'}}>Design and Developed by Sourabh Shukla</div>
        <div className='socials-icon'>
            <a href="mailto:sourabh01itsme@gmail.com" target='_blank' rel="noreferrer"><HiOutlineMailOpen size={'22px'}/></a>
            <a href="https://www.linkedin.com/in/sourabh-shukla-b08166239/" target='_blank' rel="noreferrer"><SiLinkedin size={'18px'}/></a>
            <a href="https://github.com/S0URABHshukla" target='_blank' rel="noreferrer"><SiGithub size={'20px'}/></a>
        </div>
    </div>
  );
};

export default Footer;
