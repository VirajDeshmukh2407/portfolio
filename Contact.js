// import mongoose from 'mongoose';
import './Contact.css';
import image from './image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import React from 'react';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// const mongoose = require("mongoose");

const Contact = () =>{

  

  // mongoose.connect("mongodb://127.0.0.1:27017/");

  // const Message = new mongoose.Schema({
  //   firstName: {
  //     type: String,
  //     required : true
  //   },
  //   lastName : {
  //     type: String,
  //     required : true
  //   },
  //   email : {
  //     type: String,
  //     required : true
  //   },
  //   message: {
  //     type : String,
  //     required : true
  //   }
  // });

  // // Collection
  // const Collection = new mongoose.model("Collection", Message);

  // // insert document

  // const contactDocument  = new Collection({

  //   firstName: {
  //     type: "viraj",
  //     // required : true
  //   },
  //   lastName : {
  //     type: "deshmukh",
  //     // required : true
  //   },
  //   email : {
  //     type: "viraj@9823",
  //     // required : true
  //   },
  //   message: {
  //     type : "Heloo",
  //     // required : true
  //   }
  // })

  // contactDocument.save();


  useEffect(()=>{
    AOS.init({
      duration:4000,
      once:false
    })
  });
    return(

        <div id="contactsection">
            <div className='c-header'> <h1>Contact</h1></div>

            <div className='contact-cover' data-aos="fade-up">
                <div className='cover-content'>
                    <img src={image}/>
                    <h3>Contact Me</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> dignissim sit amet, adipiscing nec, ultricies sed, dolor. <br/>Cras elementum ultrices diam. Maecenas ligula massa</p>
                     <i className="fas fa-phone"></i> 
                    <span> +1234567890</span><br/>

                    <i className="fas fa-envelope"></i> 
                    <span> info@example.com</span><br/>

                    <i className="fas fa-map-marker-alt"></i> 
                    <span> 123 Street, City</span>

                <div className='contact-links'>
                    <a href="https://www.linkedin.com/viraj-deshmukh-513352292" target="_blank"  className='link'>
            <FontAwesomeIcon icon={faLinkedin} style={{backgroundColor:"#007bffe0",fontSize:"29px",borderRadius: "10%"}} />
          </a>
          <a href="https://www.twitter.com/VirajDe95983214" target="_blank" className='link' >
            <FontAwesomeIcon icon={faTwitter} style={{backgroundColor:"#007bffe0",fontSize:"29px"}}  />
          </a>
          <a href="https://www.github.com/VirajDeshmukh2407" target="_blank" className='link'>
            <FontAwesomeIcon icon={faGithub}  style={{backgroundColor:"#007bffe0",fontSize:"29px"}} />
          </a>
          </div>

                </div>

            </div>
        <div className='contact-container' data-aos="fade-up">
            
            <div className='contact-details'>
            <div className="name-fields">
          <input type="text" placeholder="First Name" className="first-name" />
          <input type="text" placeholder="Last Name" className="last-name" />
        </div>
        <input type="text" placeholder="Email" className="email" />
        <textarea placeholder="Your Message..." className="message"></textarea>
        <button className="send-button">Send Message</button>
      </div>     
             
        </div>
        </div>
    );
};

export default Contact;