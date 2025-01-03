import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';

const ThreeWheelerServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <section id="threewheelerpg">
      <div className="container">
        <header className="section-headerin heading">
          <span className="img-icon"><img src="img/icon3.png" alt="icon"/></span>
          <h3>3 Wheeler</h3> 
          <h2>Services | 3 Wheeler</h2>
        </header>
      </div>
    
      <section id="about">
        <div className="container">
          <div className="row about-cols">
            <div className="col-md-4 wow fadeInUp">
              <div className="padding1">
                <p>
                  <span className="bigtext">
                    <strong>Be it a Goods or Passenger vehicle, Go ahead, earn your living and soar high.</strong>
                  </span>
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
                  <img src="img/auto1.jpg" alt="auto1" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div>
                  <img src="img/auto2.jpg" alt="auto2" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div>
                  <img src="img/auto3.jpg" alt="auto3" style={{ width: '100%', height: 'auto' }} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <br /><br />
      <section id="contentin">
        <div className="container">
          <div className="row">
            <div className="row"></div>
          </div>
        </div>
      </section>
    </section>
  ); 
};

export default ThreeWheelerServices;
