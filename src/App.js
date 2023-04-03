import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
// import About from './components/About';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import "./components/All.css";
import ScreenUp from './components/ScreenUp';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Education/>
      {/* <About/> */}
      <Projects/>
      <Skill/>
      
      <Contact/>
      <SocialLinks/>
      <ScreenUp/>
      <Footer/>
    </div>
  );
}

export default App;
