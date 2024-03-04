import { useEffect } from 'react';
import React  from 'react';
import './About.css';
import myimg from './image.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const About = ()=>{
    useEffect(() =>{
        AOS.init({
            duration : 3000,
            once: false
        });
    });
    return(
        <div className='about-header' >
            <div className='img' >
                <img src={myimg} alt='photo' className='img' data-aos="fade-up" />
            </div>
        <div id = "aboutsection" className='About-container' >
        <h1>About me</h1>

            

            <div className='About-description' >
                 <h1 data-aos="fade-up">
                    "BE CONSISTENT,<br/>
                     BE YOU!"
                </h1>
                <p data-aos="fade-up"> 
                Hey there, I'm Viraj, an IT enthusiast currently in my second year of undergraduate studies. I bring a solid foundation in web development, with expertise in HTML, CSS, and JavaScript. My journey began with a diploma in IT, and I'm now diving into the exciting world of the MERN stack, exploring MongoDB, Express.js, React, and Node.js.
                As a tech enthusiast, I'm passionate about creating dynamic and engaging web experiences. Whether it's crafting sleek user interfaces or diving into the intricacies of full-stack development.
                </p>
            </div>
        </div>
        </div>
    );
};

export default About;

