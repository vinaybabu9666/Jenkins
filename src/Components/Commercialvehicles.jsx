import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';

const YourComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2500 
  };

  return (
    <section id="compg">
      <div className="container">
        <header className="section-headerin heading">
          <button className="img-icon">
            <img src="img/icon1.png" width="85" height="38" alt="Commercial Vehicles Icon" />
          </button>
          <h3>Commercial <br /> Vehicles</h3>
          <h2>Services | Commercial Vehicles</h2>
        </header>
      </div>

      <section id="about">
        <div className="container">
          <div className="row about-cols">
            <div className="col-md-4 wow fadeInUp">
              <div className="padding1">
                <p>
                  <span className="bigtext">
                    <strong>
                      Financing of used commercial vehicles is the core business operation of KFL. We provide loans for purchasing SCV, LCV, School Bus and Tractors for eligible customers.
                    </strong>
                  </span>.
                </p>
                <span className="smtext">
                  <strong>Features:</strong><br />
                  <span className="dot1"></span> Simplified documentation <br />
                  <span className="dot1"></span> Easy loan processing <br />
                  <span className="dot1"></span> Quick loan disbursal <br />
                  <span className="dot1"></span> Attractive interest <br /><br />
                </span>
              </div>
            </div>

            <div className="col-md-8 wow fadeInUp" data-wow-delay="0.2s">
              <Slider {...settings}>
                <div>
                  <img src="img/comveh1.jpg" width="100%" alt="Commercial Vehicle 1" />
                </div>
                <div>
                  <img src="img/comveh2.jpg" width="100%" alt="Commercial Vehicle 2" />
                </div>
                <div>
                  <img src="img/comveh3.jpg" width="100%" alt="Commercial Vehicle 3" />
                </div>
                <div>
                  <img src="img/comveh4.jpg" width="100%" alt="Commercial Vehicle 4" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default YourComponent;
