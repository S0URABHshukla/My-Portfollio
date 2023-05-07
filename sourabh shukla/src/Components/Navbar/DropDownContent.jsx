import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const StyledDiv = styled.div`
  margin-top: 60px;
  // border: 2px solid black;
  text-align: center;
  // width: 100%;
  // margin-bottom: 80px;
  position: relative;
  margin-left: -3.5rem;
    margin-right: -3.5rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;

  & > div {
    position: fixed;
    background-color: rgba(255, 255, 255, 0.951);
    // border : 1px solid black;
    z-index: 9000;
    width: 100%;
    padding: 20px;
    margin-left: -3.5rem;
    margin-right: -3.5rem;
    // padding-left: 3.5rem;
    padding-right: 3.5rem;
    
  }


  & > div > div > ul {
    list-style-type: none;
    text-align: center;
    // border : 1px solid black;
    padding-left: 0px;
    margin-top: 0px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & > div > div > ul > li:hover,
  & > div > div > ul > a:hover {
    cursor: pointer;
    color: var(--orange);
  }
  & > div > div > ul > a {
    text-decoration: none;
    color: inherit;
  }
`;

function DropDownContent({handleDropDownBtnClick}) {
  return (
    <StyledDiv>
      <div>
      <div>
        <ul>
          <li>
            <Link activeClass="active" to="intro" spy={true} smooth={true} onClick={handleDropDownBtnClick}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} onClick={handleDropDownBtnClick}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true} onClick={handleDropDownBtnClick}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} onClick={handleDropDownBtnClick}>
              Projects
            </Link>
          </li>
          <a
            href="https://drive.google.com/drive/folders/1DvMXCf_5H0NZ9lIZKuvmZSfGo1SaXoxO?usp=share_link"
            target="blank" onClick={handleDropDownBtnClick}
          >
            <li>Resume</li>
          </a>
        </ul>
      </div>
      <button className="button">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          style={{ fontSize: "16px" }}
          onClick={handleDropDownBtnClick}
        >
          Contact
        </Link>
      </button>
      </div>
    </StyledDiv>
  );
}

export default DropDownContent;
