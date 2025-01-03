import React from 'react';
import './styles.css';

const OverviewSection = () => (
  <section id="insidepg">
    <div className="container">
      <header className="section-headerin heading wow fadeInUp">
        <h3>Overview</h3>
        <h2>About Us | Overview</h2>
      </header>
    </div>
    <section id="servicesin">
      <div className="container">
        <div className="row about-cols">
          <div className="col-md-12 wow fadeInUp">
            <div className="about-col">
              <p>
                <span className="bigtext">
                  <strong>KFL has a brand promise that transcends the category of operation and works towards fulfilling dreams, staying true to our slogan, ‘Your prosperity, our priority’.</strong>
                </span>
              </p>
              <div className="border1"></div>
              <p>
                <br />
                The success of KFL has been in identifying areas and niches which have limited coverage of banks and making significant inroads into the hearts and minds of customers, by meeting their funding needs. We leverage on alternative and tech-driven credit appraisal methodologies to gauge creditworthiness, which lets us target the ones left traditionally underserved by banks and financial institutions. The use of technology to optimise business processes keeps our cost in check and allows us to maintain consistent profitability since our inception.
                <br /><br />
                We would like to emerge as a new paradigm of economic growth through financial inclusion and be the robust pillars of progress, economic growth and development of the economy.
                <br /><br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default OverviewSection;
