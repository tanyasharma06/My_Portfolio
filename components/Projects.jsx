import React from 'react';
import './Projects.css';
import Navbar from './Navbar';

const projectsData = [
  {
    id: 1,
    title: 'Weather-App',
    description: 'Basically This Project is a weather condition tracker app that uses for Open Weather API to fetch current weather data to given location. This Project leverages HTML,CSS,JavaScript to fetch weather from weather API.',
    technologies: ['HTML', 'CSS', 'JavaScript' ],
    link: 'https://github.com/tanyasharma06/WeatherApp'
  },
  {
    id: 2,
    title: 'Share-Modal',
    description: ' share modal involves creating a modal window that allows users to share content from a webpage to various social media platforms. ',
    technologies: ['HTML', 'CSS', 'JavaScript' ],
    link: 'https://github.com/tanyasharma06/Share-Modal'
  },
  {
    id: 3,
    title: 'TIC-TOC-TOE',
    description: 'This tic-tac-toe game applies a minimax algorithm to AI players and no one can beat it. An invincible game!',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/tanyasharma06/tic-toc-toe-game'
  },
  {
    id: 4,
    title: 'Password-Genrator',
    description: 'This is Password-genrator which will tell us how strong and weak is our password and will give a strong password. ',
    technologies: ['HTML', 'CSS' ,'JavaScript'],
    link: 'https://github.com/tanyasharma06/password-genrator'
  },
  {
    id:5,
    title:'CounterCode',
    description:'In this countercode we will increase and decrease value .',
    technologies:['HTML' ,'CSS' ,'JavaScript'],
    link:'https://github.com/tanyasharma06/countercode'
  },
  {
    id:6,
    title:'Tour-Plan',
    description:'Made this Project using HTML,CSS , JavaScript and React.This application has intutive interface powered by react componentbased architecture and also alllows for seamless navigation and optimized user experience.',
    technologies:['HTML' ,'CSS','JavaScript' ,'React'],
   link:'https://github.com/tanyasharma06/Tour-Plan'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-section">
      <Navbar/>
      <h1 className="projects-heading">My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
