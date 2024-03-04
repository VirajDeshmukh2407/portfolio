
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const showSidebar = () => {
    setSidebarVisibility(true);
  };

  const hideSidebar = () => {
    setSidebarVisibility(false);
  };

  return (
    <div className={`body ${isSidebarVisible ? 'show-sidebar' : ''}`} style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
      <div className="header" >
        <div className="social-icons" style={{marginTop:'10px'}}>
          <a href="https://www.linkedin.com/viraj-deshmukh-513352292" target="_blank" className="ac">
            <FontAwesomeIcon icon={faLinkedin} style={{backgroundColor: 'black', fontSize: '20px' }} />
          </a>
          <a href="https://www.twitter.com/VirajDe95983214" target="_blank" className="ac">
            <FontAwesomeIcon icon={faTwitter} style={{ backgroundColor: 'black', fontSize: '20px' }} />
          </a>
          <a href="https://www.github.com/VirajDeshmukh2407" target="_blank" className="ac">
            <FontAwesomeIcon icon={faGithub} style={{ backgroundColor: 'black', fontSize: '20px' }} />
          </a>
        </div>
        <div className="header-content" >
          <a href='#homesection'>Home</a>
          <a href='#aboutsection'>About</a>
          <a href='#projectsection'>Projects</a>
          <a href='#skillsection'>Skills</a>
          <a href='#contactsection'>Contact Me</a>
          <a href='#'  onClick={isSidebarVisible ? hideSidebar : showSidebar} className='menu-button'>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </div>

        <div className='sidebar'>
          
          <a href='#' onClick={hideSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Projects</a>
          <a href='#'>Skills</a>
          <a href='#'>Contacts</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
