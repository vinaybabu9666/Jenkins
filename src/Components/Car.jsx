import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.css';

const CarServicesComponent = () => {
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
    <section id="carpg">
      <div className="container">
        <header className="section-headerin heading">
          <span className="img-icon"><img src="img/icon2.png" alt="Car Icon" /></span>
          <h3>Car</h3>
          <h2>Services | Car</h2>
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
                      Now, That dream car of yours is no more a dream. Make it a reality with us by your side. We provide loans for purchasing used cars or 4 wheelers.
                    </strong>
                  </span>.
                </p>
                <span className="smtext">
                  <strong>Features:</strong><br />
                  <span className="dot1"></span> Simplified documentation <br />
                  <span className="dot1"></span> Easy loan processing <br />
                  <span className="dot1"></span> Quick loan disbursal <br />
                  <span className="dot1"></span> Attractive interest <br />
                  <br />
                </span>
              </div>
            </div>
            <div className="col-md-8 wow fadeInUp" data-wow-delay="0.2s">
              <Slider {...settings}>
                <div>
                  <img src="img/car1.jpg" alt="Car 1" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div>
                  <img src="img/car2.jpg" alt="Car 2" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div>
                  <img src="img/car3.jpg" alt="Car 3" style={{ width: '100%', height: 'auto' }} />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
};

export default CarServicesComponent;
