import './home.css';
import myimage from './image.jpg';
import React, { useEffect } from 'react';
import AOS from 'aos';
const Home = () =>{
    useEffect(() =>{
        AOS.init({
            duration : 2000,
            once: false
        });
    }, []);
    return(
        <div className="home-container" id="homesection">
            <div className="home-description" data-aos="fade-in">
                <h1 data-aos="fade-up">Hi,<br/>
                I'm Viraj<br/>
                A Indian<br/>
                Based Web Developer
                </h1>
                            
                <p data-aos="fade-up">hey,looking to hire a web developer for your<br/>
                business, let's share hands. Dedicated to crafting standout and eye-touching projects  </p> <br/>   

                <button type="download" className='button'data-aos="fade-up">
                    Download CV</button>  
                    </div>

                
                <img data-aos="fade-up" src={myimage} alt="it's me guys" className='image'/>          
                  
                <div className='floating' data-aos="fade-in">
                    <p data-aos="fade-up">Connect! Let's Build Quality Projects Together</p>
                </div>
        </div>
    );
};

export default Home;