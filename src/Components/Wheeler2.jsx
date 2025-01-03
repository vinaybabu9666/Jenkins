import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TwoWheelerServices = () => {
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
    <section id="twowheelerpg">
      <div className="container">
        <header className="section-headerin heading">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="img-icon"><img src="img/icon4.png" alt="icon" /></a>
          <h3>2 Wheeler</h3>
          <h2>Services | 2 Wheeler</h2>
        </header>
      </div>

      {/* Services Section */}
      <section id="about">
        <div className="container">
          <div className="row about-cols">
            <div className="col-md-4 wow fadeInUp">
              <div className="padding1">
                <p>
                  <span className="bigtext">
                    <strong>If you have been wanting to own that shiny 2 wheeler you dream of, come to us and ride your dream.</strong>
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
                  <img src="img/bike1.jpg" width="100%" alt="bike1" />
                </div>
                <div>
                  <img src="img/bike2.jpg" width="100%" alt="bike2" />
                </div>
                <div>
                  <img src="img/bike3.jpg" width="100%" alt="bike3" />
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

export default TwoWheelerServices;
