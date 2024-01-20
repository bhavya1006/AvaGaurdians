import React from 'react'

function About() {
  return (
    <div className="about-container">
        <div  className="videotechacks" >
            <section  className="about-video-container">
              <h2 className="section-title blinking-text">Video Tutorial</h2>
              <div className="video-item">
                <video controls="true">
                  <source src="./tutorial.mp4" type="video/mp4" />
                </video>
              </div>
            </section>
          </div>
        <div className="project-details blinking1Text">
            <h2>Project Details</h2><hr/>
            <p>This project follows a specific workflow to ensure successful completion.</p>
        </div>
        <div className="team-container">
            <h2 >Team Information</h2><hr/>
            <p>This project was built by a talented team of developers.</p>
        </div>
    </div>
  )
}

export default About
