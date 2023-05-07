import React from "react";
import "./Navbar.css";
import {Link} from 'react-scroll';
import NavDropDownBtn from "./NavDropDownBtn";
import DropDownContent from "./DropDownContent";
import NavDropDownBtn2 from "./NavDropDownBtn2";
import { useContext } from "react";
import { themeContext } from "../../Context";
import Toggle from "../Toggle/Toggle";

const Navbar = () => {
  const [dropDownBtn, setDropDownBtn] = React.useState(false);
  const {theme,mode,toggle}  = useContext(themeContext);
   const {darkmode,lightdarkmode,lightmode} = theme;

  const handleDropDownBtnClick = () => {
      setDropDownBtn(!dropDownBtn);
  }
  return (
    <nav>
      <div className="n-wrapper" style={mode?lightdarkmode:lightmode}>
        <div className="n-left">
          <div className="n-name">{`${"< SOURABH />"}`}</div>
          <Toggle/>
        </div>
        
        <div className="n-right">
        
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
             
              <li><Link activeClass="active" to="intro" spy={true} smooth={true} >Home</Link></li>
              <li><Link to="about" spy={true} smooth={true}>About</Link></li>
              <li><Link to="skills" spy={true} smooth={true}>Skills</Link></li>
              <li><Link to="projects" spy={true} smooth={true}>Projects</Link></li>
              <a
                href="https://drive.google.com/drive/folders/1DvMXCf_5H0NZ9lIZKuvmZSfGo1SaXoxO?usp=share_link"
                target="_blank"
              >
                <li>Resume</li>
              </a>
            </ul>
          </div>
          <button className="button n-button"><Link to="contact" spy={true} smooth={true} style={{fontSize:'16px'}} >Contact</Link></button>
          
        </div>
        <button onClick={handleDropDownBtnClick} className="nav-dropDownBtn">{dropDownBtn ? <NavDropDownBtn2 /> :<NavDropDownBtn />}</button>
      </div>
      {
        dropDownBtn ? <DropDownContent handleDropDownBtnClick={handleDropDownBtnClick} /> : null
      }
    </nav>
  );
};

export default Navbar;
