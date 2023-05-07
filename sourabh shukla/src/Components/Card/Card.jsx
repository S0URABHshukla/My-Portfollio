import React from 'react';
import './Card.css';
import { Link } from 'react-scroll';

function Card({emoji, heading, details}) {
  return (
    <div className='card'>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{details}</span>
      <button className='c-button'><Link style={{fontSize:'16px'}} spy={true} smooth={true} to="skills">CHECK MORE</Link></button>
    </div>
  )
}

export default Card
