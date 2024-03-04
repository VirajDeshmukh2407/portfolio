import React from 'react';
import './skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Skills = () => {

  useEffect(()=>{
    AOS.init({
      duration:4000,
      once:false
    });
  });
  return (
    <div id="skillsection" className='skills-container' >
      <div className='my-skill'>
        <h1>My Skills</h1>
      </div>
      <div className='skills-set' data-aos="fade-up">
        <div className='skill'>
          <i className='fab fa-html5' style={{top:"17%"}}></i>
          <span style={{ color: "#e34c26", left:"66%"}}>HTML</span>
        </div>

        <div className='skill'>
          <i className='fab fa-css3' style={{top:"17%"}}></i>
          <span style={{ color: "#1572b6", left:"65%" }}>CSS</span>
        </div>

        <div className='skill'>
          <i className='fab fa-js' style={{top:"17%"}}></i>
          <span style={{ color: "#beca10",left:"52%"}}>JavaScript</span>
        </div>

        <div className='skill' style={{marginTop:"20px"}}>
          <i className='fab fa-react' style={{top:"17%"}}></i>
          <span style={{ color: "#61dafb",left:"63%" }}>React</span>
        </div>

        <div className='skill' style={{marginTop:"20px"}}>
          <i className='fab fa-java' style={{top:"11%"}}></i>
          <span style={{ color: "#007396",left:"66.4%" }}>Java</span>
        </div>

        <div className='skill' style={{marginTop:"20px"}}>
          <i className='fab fa-github' style={{top:"17%"}}></i>
          <span style={{ color: "#211f1f",left:"56%" }}>GitHub</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
