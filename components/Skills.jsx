import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="heading-1">MY SKILLS

    <div className="container">
      <div className="container-1">
        <h1 className="heading-2">Technical Skills</h1>
        <div className="technical-bars">
          <div className="bar html">
            <i className="bx bxl-html5" style={{ color: '#147bbc' }}></i>
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line html">
              <span></span>
            </div>
          </div>
          <div className="bar css">
            <i className="bx bxl-css3" style={{ color: '#c95d2e' }}></i>
            <div className="info">
              <span>CSS</span>
            </div>
            <div className="progress-line css">
              <span></span>
            </div>
          </div>
          <div className="bar javascript">
            <i className="bx bxl-javascript" style={{ color: '#b0bc1e' }}></i>
            <div className="info">
              <span>JavaScript</span>
            </div>
            <div className="progress-line javascript">
              <span></span>
            </div>
          </div>
          <div className="bar react">
            <i className="bx bxl-react" style={{ color: '#1a1ad4' }}></i>
            <div className="info">
              <span>React</span>
            </div>
            <div className="progress-line react">
              <span></span>
            </div>
          </div>
          {/* Add other technical skills similarly */}
        </div>
      </div>

      <div className="container-2">
        <h1 className="heading-3">Professional Skills</h1>
        <div className="radial-bar-container">
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path" cx="100" cy="100" r="80" style={{ strokeDashoffset: 'calc(502 - (502 * 75) / 100)' }}></circle>
            </svg>
            <div className="percentage">75%</div>
            <div className="text">Creativity</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path" cx="100" cy="100" r="80" style={{ strokeDashoffset: 'calc(502 - (502 * 80) / 100)' }}></circle>
            </svg>
            <div className="percentage">80%</div>
            <div className="text">Communication</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path" cx="100" cy="100" r="80" style={{ strokeDashoffset: 'calc(502 - (502 * 80) / 100)' }}></circle>
            </svg>
            <div className="percentage">80%</div>
            <div className="text">Problem Solving</div>
          </div>
          <div className="radial-bar">
            <svg x="0px" y="0px" viewBox="0 0 200 200">
              <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
              <circle className="path" cx="100" cy="100" r="80" style={{ strokeDashoffset: 'calc(502 - (502 * 90) / 100)' }}></circle>
            </svg>
            <div className="percentage">90%</div>
            <div className="text">Team Work</div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
};

export default Skills;
