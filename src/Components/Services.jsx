import React from 'react';
import './styles.css';
import serv1 from '../img/serv1.png';

const ServicesSection = () => {
  return (
    <div>
      <section id="services">
        <section id="services2">
          <div className="container">
            <header className="section-header wow fadeInUp">
             
            </header>
            <div className="row">
              <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s ">
                <div className="img"><img src="img/servhead.png" alt="" className="img-fluid" /></div>
              </div>
              <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                <div className="img">  <a href="commercialvehicle.html"><img src={serv1} alt="" className="img-fluid" />  </a> </div>
              </div>
              <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
                <div className="img"><a href="car.html"><img src="img/serv2.png" alt="" className="img-fluid" /></a> </div>
              </div>
              <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                <div className="img"><a href="3wheeler.html"> <img src="img/serv4.png" alt="" className="img-fluid" /></a></div>
              </div>
              <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                <div className="img"> <a href="2wheeler.html"><img src="img/serv3.png" alt="" className="img-fluid" /></a></div>
              </div>
              <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                <div className="img"> <a href="goldloan.html"><img src="img/serv5.png" alt="" className="img-fluid" /></a></div>
              </div>
            </div>
            <p></p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ServicesSection;
