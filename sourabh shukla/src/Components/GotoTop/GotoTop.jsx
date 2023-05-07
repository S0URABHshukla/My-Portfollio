import React from 'react';
import './GotoTop.css';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import {Link} from 'react-scroll';

function GoToTop() {
  return (
    <div className='GoToTopBtn'>
        <Link activeClass="active" to="intro" spy={true} smooth={true} ><BsFillArrowUpCircleFill size={'30px'} color='var(--orange)'/></Link>
        
    </div>
  )
}

export default GoToTop