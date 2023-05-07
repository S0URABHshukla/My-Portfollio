import React, { useContext } from "react";
import "./Projects.css";
import Rodan from "./Asos.png";
import Indeed from "./greenhouse.jpg";
import { themeContext } from "../../Context";
function Projects() {
  const {theme,mode,toggle}  = useContext(themeContext);
   const {darkmode,lightdarkmode,lightmode} = theme;
   
  return (
    <div className="projects" id="projects">
      <h1 className="p-title">PROJECTS</h1>
      <div className="project">
        <h1 className="project-heading">Zostel Clone</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
            <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="react"/>
            <img src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" alt="redux"/>
            <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="material-ui" />
            <img src="https://img.shields.io/badge/Chakra%20UI-3bc7bd?style=for-the-badge&logo=chakraui&logoColor=white" alt="chakra" /> 
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="nodejs" />
            <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="express" />
            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
            </div>
            <div className="project-video-div-for-media">
             
              <img src={"https://user-images.githubusercontent.com/113697547/213976509-ffd7e261-776b-4a73-a50b-2480d660a636.png"} alt="zostel" style={{width:"100%", height:"100%",margin:"20px 0px",border:"1px solid gray"}}></img>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://zostel.vercel.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/DenishFuletra/zostel-clone"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
            Zostel is the world’s largest backpacker hostel chain. Stay with us at 60+ destinations across India and Nepal,exploring remote locations, remote parts of famous locations.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>User can search the hotels according to their preference</li>
              <li>Category-wise page listing & Product filtration</li>
              <li>Add to cart & Multiple types of payment options</li>
              <li>All the data is coming from backed using fetch and stored payment and booking details in MongoDB</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Developed Navbar Page</li>
              <li>
              Developed Single Product Page along with all Functionality
              </li>
              <li>Developed Checkout Page along with all Functionality</li>
              <li>Developed Backend for Web App</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 4 Developers within 6 days.
            </h1>
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">Snapdeal Clone</h1>
        <div className="project1">
          <div className="project-video-div">
            <div className="project-lang">
              <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="js"
              />
              <img
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
                alt="json"
              />
            </div>
            <div className="project-video-div-for-media">
             
              <img src="https://s01.sgp1.digitaloceanspaces.com/large/816287-41227-atbuqceluy-1473660885.png" alt="snapdeal" style={{width:"100%", height:"100%",margin:"20px 0px",border:"1px solid gray"}}></img>
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://lucky-dasik-7d7052.netlify.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/PPnaruto/Project_SnapDeal"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
            Snapdeal is an Indian e-commerce company.Where User can Shopping according thier prefece.
            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Sign Up | Login | Landing Page | Home Page | Products Page | Add To Cart Page</li>
              
              <li>Add To Cart Page| Add Products in Cart | Checkout</li>
              
              <li>Filter & Sort Products according to your need</li>
              
              <li>Checkout and Payment Page along with all Functionality</li>
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Developed Products Page with filter and sort functionality </li>
              <li>
              Sign Up and Login Functionality
              </li>
              <li>
              Developed a Particular Products Page with all Functionality
              </li>
              <li>Developed Checkout & Payment Page along with all Functionality | Add Address and Apply Coupon Feature</li>
              <li>Developed Backend for Web App using JSON-Server</li>
              <li>Deployed the Project along with Frontend and Backend Deployment</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 4 Developers within 6 days.
            </h1>
          </div>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">Zoomcar Clone</h1>
        <div className="project2">
          <div className="project-video-div">
            <div className="project-lang">
            <img
                src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                alt="html"
              />
              <img
                src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <img
                src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                alt="js"
              />
              <img
                src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"
                alt="json"
              />
            </div>
            <div className="project-video-div-for-media">
             <img src="https://beta.techcrunch.com/wp-content/uploads/2016/08/screenshot-2016-08-25-03-51-30.png?w=680" alt="zoomcar" style={{width:"100%", height:"100%",margin:"20px 0px",border:"1px solid gray"}}></img>  
            </div>
            <div className="goto-button-div">
              <button className="button">
                <a
                  className="button-goto"
                  href="https://zoomcar-clone-vanilla-js.netlify.app/"
                  target="_blank"
                >
                  LIVE
                </a>
              </button>
              <button className="button">
                <a
                  className="button-goto"
                  href="https://github.com/S0URABHshukla/Zoomcar-Clone"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </button>
            </div>
          </div>
          <div className="project-about-div">
            <h1 className="p-div">
            Zoomcar is a self-drive car rental company, Zoomcar operates on short-term rental and a long-term subscription business model

            </h1>
            <h1 className="p-div">Features</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Sign Up | Login</li>
              <li>Search Apply any cabs</li>
              <li>Products and Solutions</li>
              <li>Blog Page</li>
              <li>See all applied cabs </li>
              
            </ul>
            <h1 className="p-div">Areas of responsibility</h1>
            <ul className="p-details" style={mode?{color:"lightgray"}:lightmode}>
              <li>Lead the Team | Manage the Project | Deployment of Project</li>
              
              <li>Developed Comapny Reviews Page</li>
              
              <li>Search company in review page</li>
                            
              <li>Developed other supporting pages for website</li>
              <li>Creating data for website</li>
            </ul>
            <h1 className="p-div">
              A collaborative project built by 4 Developers within 7 days.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
