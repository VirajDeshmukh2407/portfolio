
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/projects';
import Contact from './components/Contact';
import Footer from './components/footer';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = ()=>{

  useEffect (() =>{
    AOS.init({
      duration : 7000
    });
  }, []);

  return(
    <div className='app-div'>

    
    <Header></Header>
    <Home/><br/>
   <About data-aos="fade-up"></About><br/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>

      
      </div>

    
  );
};

export default App;
