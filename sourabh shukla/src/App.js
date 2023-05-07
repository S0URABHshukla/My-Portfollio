import Navbar from "./Components/Navbar/Navbar"
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import GoToTop from "./Components/GotoTop/GotoTop";
import Projects from "./Components/Projects/Projects";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
   const {theme,mode,toggle}  = useContext(themeContext);
   const {darkmode,lightdarkmode,lightmode} = theme;
  // const darkMode = themedarkMode;
  return (
    <div
      className="App"
      style={mode?darkmode:lightmode}
    >
      
      <Navbar />
      <Intro />
      <Services />
      <About/>
      <Skills/>
      <Projects/>
      {/* <Experience /> */}
      
      {/* <Works /> */}
      {/* <Portfolio /> */}
      {/* <Testimonial /> */}
      <Contact />
      <GoToTop/>
      <Footer />
    </div>
  );
}

export default App;
