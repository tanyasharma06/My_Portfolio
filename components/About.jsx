


import React from 'react';
import './About.css';
import Navbar from './Navbar';

const About = () => {
  return (
    <section className="about-container">
        <Navbar/>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm <strong>Tanya Sharma</strong>, a passionate 3rd-year BTech student with a keen interest in software engineering. I love problem-solving, exploring web development, and integrating APIs into my projects. I’m constantly seeking opportunities to grow and apply my skills in real-world applications.
        </p>
        <p>
          With experience in JavaScript, React, and backend development, I’m excited about contributing to projects that challenge my skills and push me to learn more. Let's connect and build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
