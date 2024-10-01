import React from 'react';
import image from '../images/tanya.jpg'
import Navbar from './Navbar'
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  <Navbar/>
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
  
    <div className="hero-container">
      <div className="hero-left">
        <h1>Hi, I'm   <span className="highlight">  Tanya Sharma </span></h1>
        <p>A passionate 3rd-year BTech student aspiring to be a Software Engineer.</p>
        <p>Exploring Web Development, Problem-Solving, and API Integrations.</p>
        <button className="hero-btn" onClick={handleContactClick}>Contact Me</button>
      </div>
      <div className="hero-right">
        <img src={image} alt=" Tanya Sharma" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
