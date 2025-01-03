import React from 'react';
import './styles.css';

const VisionMissionSection = () => (
  <section id="visionpg">
    <div className="container">
      <header className="section-headerin heading wow fadeInUp">
        <h3>Vision & <br /> Mission</h3>
        <h2>About Us | Vision & Mission</h2>
      </header>
    </div>

    <section id="about">
      <div className="container">
        <div className="row about-cols">
          <div className="col-md-5 wow fadeInUp">
            <div className="about-col">
              <div className="img">
                <img src="" alt="" className="img-fluid" />
                <div className="icon"><i className="ion-ios-eye-outline"></i></div>
              </div>
              <h2 className="title">Our Vision</h2>
              <p>
                We aspire to be one of the largest NBFC in the country and play a major role in creating financial inclusion for the underserved.
              </p>
            </div>
          </div>

          <div className="col-md-5 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
                <img src="" alt="" className="img-fluid" />
                <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
              </div>
              <h2 className="title">Our Mission</h2>
              <p>
                Our mission is to provide timely and adequate credit needed by underserved groups such as weaker sections and low-income groups at an affordable cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default VisionMissionSection;
