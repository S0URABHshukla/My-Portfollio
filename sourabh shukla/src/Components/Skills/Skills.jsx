import React, { useContext } from "react";
import "./Skills.css";
// import SkillCard from "./SkillCard";
import styled from "styled-components";
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiRedux,
  SiChakraui,
  SiMaterialui,
  SiBootstrap,
  SiStyledcomponents,
  SiVisualstudiocode,
  SiPostman,
  SiNpm,
  SiYarn,
  SiGithub,
  SiCanva,
  SiNetlify,
  SiVercel,
  SiHeroku,
  SiReplit,
  SiCodepen,
  SiCodesandbox,
  SiMiro,
  SiNotion,
  SiMongodb,
  SiExpress,
  SiJson
} from "react-icons/si";
import { themeContext } from "../../Context";

const StyledDivForSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: 3px solid var(--orangeCard);
  box-shadow: var(--boxShadow);
  border-radius: 20px;
  padding: 15px;
  gap: 5px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
    & > .html-icon{
      // color: orange;
    }
  }
  
`;

function Skills() {
  const {theme,mode,toggle}  = useContext(themeContext);
   const {darkmode,lightdarkmode,lightmode} = theme;
  return (
    <div className="skills" id="skills">
      <h1 className="s-heading">
        <span style={{ color: `var(--orange)` }}>{`<`}</span>
        <span>SKILLS</span>
        <span style={{ color: `var(--orange)` }}>{`/>`}</span>
      </h1>
      <div className="all-skills">
        {/* <div className="blur blur-s1" style={{ background:"#ABF1FF94" }}></div> */}
        <div className="skills-section">
          {/* <SkillCard url='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' text='HTML' /> */}
          {/* <SkillCard url='https://cdn.svgporn.com/logos/css-3.svg' text='CSS' /> */}
          {/* <SkillCard url="https://cdn.svgporn.com/logos/javascript.svg" text='JavaScript' /> */}
          {/* <SkillCard url='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' text='React' /> */}
          {/* <SkillCard url='https://cdn.svgporn.com/logos/redux.svg' text="Redux" /> */}
          {/* <SkillCard url='https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png' text="NodeJs" /> */}
          <StyledDivForSkills>
            <FaHtml5 size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">HTML</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <FaCss3Alt size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">CSS</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <DiJavascript1 size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">JavaScript</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <FaReact size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">React</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiRedux size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Redux</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <FaNodeJs size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">NodeJs</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiExpress size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">ExpressJs</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiMongodb size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">MongoDB</span>
          </StyledDivForSkills>
        
        
          {/* <SkillCard url='https://pbs.twimg.com/profile_images/1244925541448286208/rzylUjaf_400x400.jpg' text='Chakra-UI' /> */}
          {/* <SkillCard url='https://mui.com/static/logo.png' text='Material-UI' /> */}
          {/* <SkillCard url="https://gozattila.dev/static/media/styled_components.a46dc006.png" text='Styled-Components' /> */}
          {/* <SkillCard url='https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png' text='Bootstrap' /> */}
          <StyledDivForSkills>
            <SiJson size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">JSON-Server</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiChakraui size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Chakra-UI</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiMaterialui size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Material-UI</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiStyledcomponents size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Styled-Components</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiBootstrap size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Bootstrap</span>
          </StyledDivForSkills>
          </div>
        <h1 className="tools-heading">
          Tools{" "}
          <span
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              color: "var(--orange)",
            }}
          >{` | `}</span>{" "}
          Use
        </h1>
        <div className="skills-section">
          {/* <SkillCard url='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' text='VS Code' /> */}
          {/* <SkillCard url='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' text='Git' /> */}
          {/* <SkillCard url="https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png" text="Postman" /> */}
          {/* <SkillCard url="https://images.ctfassets.net/6qz05ishztgm/6Y4GkgE5SePkfk0zs8qblu/ccaf51cc7c2e7f0e2a525ba1be9082b7/npm-logo.webp" text='NPM'/> */}
          {/* <SkillCard url='https://idroot.us/wp-content/uploads/2018/09/yarn-logo.png' text='Yarn' /> */}
          {/* <SkillCard url='https://cdn-icons-png.flaticon.com/512/25/25231.png' text="GitHub" /> */}
          {/* <SkillCard url="https://www.apkmirror.com/wp-content/uploads/2019/01/5c5b88516489f.png" text='Canva' /> */}
          {/* <SkillCard url="https://www.netlify.com/v3/img/components/logomark.png" text="Netlify" /> */}
          {/* <SkillCard url="https://static.vecteezy.com/system/resources/previews/001/200/668/original/triangle-rounded-png.png" text="Vercel" /> */}
          {/* <SkillCard url="https://uploads.sitepoint.com/wp-content/uploads/2016/04/1461122387heroku-logo.jpg" text="Heroku" /> */}
          <StyledDivForSkills>
            <SiVisualstudiocode size={"70px"} className="html-icon" />
            <span className="html-text" >VS Code</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <FaGitAlt size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Git</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiPostman size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Postman</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiNpm size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">NPM</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiYarn size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Yarn</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiGithub size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">GitHub</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiCanva size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Canva</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiNetlify size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Netlify</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiVercel size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Vercel</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiHeroku size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Heroku</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiReplit size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Replit</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiCodesandbox size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Codesandbox</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiCodepen size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Codepen</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiMiro size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Miro</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiNotion size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Notion</span>
          </StyledDivForSkills>
          <StyledDivForSkills>
            <SiMongodb size={"70px"} className="html-icon" />
            <span style={mode?{color:"#FCA61F"}:lightmode} className="html-text">Atlas</span>
          </StyledDivForSkills>
        </div>
        {/* <div className="blur blur-s2" style={{ background:"var(--purple)" }}></div> */}
      </div>
    </div>
  );
}

export default Skills;
