import './projects.css';
import photo from './photoP.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React from 'react';
const Projects = () =>{
    useEffect(()=>{
        AOS.init({
            duration:4000,
            once:false
        });
    });
    return(
        <div id="projectsection" className='project-container'>
            <div className='project-header'>
                <h1>Projects</h1>
            </div>
            

            <div className='projects-set' data-aos="fade-up">
                <div className='prj'>
                    <img src={photo}  className='photo'/>
                    <h3>Project Name</h3>
                    <div className='icon'></div>
                    <i className='fab fa-html5' style={{color:"#e34c26"}}></i>
                    <i className='fab fa-css3' style={{color: "#1572b6"}}></i>
                    <i className='fab fa-js' style={{color: "#beca10"}}></i>
                    
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> dignissim sit amet, adipiscing nec, ultricies sed, dolor. <br/>Cras elementum ultrices diam. Maecenas ligula massa,<br/> semper congue, euismod non, mi. <br/>Proin porttitor, orci nec nonummy molestie, <br/>enim est eleifend mi, non fermentum diam nisl sit amet erat.<br/> Duis semper. Duis arcu massa, scelerisque vitae, consequat in. 
                    </p>
                </div>
                <div className='prj'>
                    <img src={photo}  className='photo'/>
                    <h3>Project Name</h3>
                    <div className='icon'></div>
                    <i className='fab fa-html5' style={{color:"#e34c26"}}></i>
                    <i className='fab fa-css3' style={{color: "#1572b6"}}></i>
                    <i className='fab fa-js' style={{color: "#beca10"}}></i>
                    
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> dignissim sit amet, adipiscing nec, ultricies sed, dolor. <br/>Cras elementum ultrices diam. Maecenas ligula massa,<br/> semper congue, euismod non, mi. <br/>Proin porttitor, orci nec nonummy molestie, <br/>enim est eleifend mi, non fermentum diam nisl sit amet erat.<br/> Duis semper. Duis arcu massa, scelerisque vitae, consequat in. 
                    </p>
                </div>
                
                <div className='prj'>
                    <img src={photo}  className='photo'/>
                    <h3>Project Name</h3>
                    <div className='icon'></div>
                    <i className='fab fa-html5' style={{color:"#e34c26"}}></i>
                    <i className='fab fa-css3' style={{color: "#1572b6"}}></i>
                    <i className='fab fa-js' style={{color: "#beca10"}}></i>
                    
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> dignissim sit amet, adipiscing nec, ultricies sed, dolor. <br/>Cras elementum ultrices diam. Maecenas ligula massa,<br/> semper congue, euismod non, mi. <br/>Proin porttitor, orci nec nonummy molestie, <br/>enim est eleifend mi, non fermentum diam nisl sit amet erat.<br/> Duis semper. Duis arcu massa, scelerisque vitae, consequat in. 
                    </p>
                </div>

                {/* <div className='prj'>
                    <img src={photo}  className='photo'/>
                    <h3>Project Name</h3>
                    <div className='icon'></div>
                    <i className='fab fa-html5' style={{color:"#e34c26"}}></i>
                    <i className='fab fa-css3' style={{color: "#1572b6"}}></i>
                    <i className='fab fa-js' style={{color: "#beca10"}}></i>
                    
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> dignissim sit amet, adipiscing nec, ultricies sed, dolor. <br/>Cras elementum ultrices diam. Maecenas ligula massa,<br/> semper congue, euismod non, mi. <br/>Proin porttitor, orci nec nonummy molestie, <br/>enim est eleifend mi, non fermentum diam nisl sit amet erat.<br/> Duis semper. Duis arcu massa, scelerisque vitae, consequat in. 
                    </p>
                </div> */}


                
            </div>
        </div>

    );
};

export default Projects;