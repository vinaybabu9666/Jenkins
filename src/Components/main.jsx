import React, { useEffect, useState } from "react";
//import "./styles.css";
import './Responsive.css'

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const wallpapers = [
    "/img/building-1.jpg",
    "/img/building-2.jpg",
    "/img/building-3.jpg",
    "/img/building-4.jpg",
    "/img/building-5.jpg",
    "/img/bike3.jpg",
  ];

  const nextWallpaper = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % wallpapers.length);
  };

  const prevWallpaper = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? wallpapers.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextWallpaper();
    }, 5000); // Change wallpaper every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container">
      <div className="demo-2">
        <div className="banner-bottom">
          <div className="row counters">
            <div className="col-lg-3 col-6 text-center wow fadeInUp services c1">
              <a href="commercialvehicles">
                <img
                  src="/img/c1.png"
                  alt="Commercial Vehicles"
                  id="Commercial Vehicles"
                />
              </a>
            </div>

            <div className="col-lg-3 col-6 text-center wow fadeInUp services c2">
              <a href="car">
                <img src="/img/c2.png" alt="Car" id="Car" />
              </a>
            </div>
            <div className="col-lg-3 col-6 text-center wow fadeInUp services c3">
              <a href="wheeler2">
                <img src="/img/c3.png" alt="3 Wheeler" id="3 Wheeler" />
              </a>
            </div>
            <div className="col-lg-3 col-6 text-center wow fadeInUp services c4">
              <a href="wheeler3">
                <img src="/img/c4.png" alt="2 Wheeler" id="2 Wheeler" />
              </a>
            </div>
            <div className="col-lg-3 col-6 text-center wow fadeInUp services c5">
              <a href="goldloan">
                <img src="/img/c5.png" alt="Gold Loan" id="Gold Loan" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <svg className="hidden">
            <defs>
              <symbol id="icon-arrow" viewBox="0 0 24 24">
                <title>arrow</title>
                <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 " />
              </symbol>
              <symbol id="icon-drop" viewBox="0 0 24 24">
                <title>drop</title>
                <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z" />
                <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z" />
              </symbol>
            </defs>
          </svg>
        </div>
      </div>
      <div className="container-box rotated">
        <div className="d-inline-block">
          <a href="https://play.google.com/store/apps/details?id=com.appsheet.whitelabel.guid_63f1707c_c518_4e26_a6be_7cd2be3f1b68&hl=en&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img
              className=""
              alt="Get it on Google Play"
              src="/img/google-play-badge.png"
              width="150"
              height="60"
            />
          </a>
        </div>

        <button
          type="button"
          className="btn btn-lg turned-button"
          data-toggle="modal"
          data-target="#myModal1"
        >
          <a className="img-icon" href=" ">
            <img src="/img/cal.png" width="30" height="30" alt="" />
          </a>{" "}
          EMI Calculator
        </button>

        <button
          type="button"
          className="btn btn-lg turned-button"
          onClick={() =>
            window.open(
              "https://bills.setu.co/landing/7d0edb49-1a3b-404e-9c09-e3de022e8531",
              "_blank",
              "resizable=yes"
            )
          }
        >
          <a className="img-icon" href="EMI">
            <img src="/img/loan.png" width="30" height="30" alt="" />
          </a>
          PAY EMI
        </button>

        <button
          type="button"
          className="btn btn-lg turned-button"
          onClick={() =>
            (window.location.href = "investors/pdf/Moratorium_Policy.pdf")
          }
        >
          <span className="img-icon">
            <img src="/img/Mor.png" width="30" height="30" alt="" />
          </span>
          Moratorium
        </button>

        <button
          type="button"
          className="btn btn-lg turned-button"
          data-toggle="modal"
          data-target="#cancellationrequestModal"
        >
          <a className="img-icon" href="NACH">
            <img src="/img/nach.png" width="30" height="30" alt="" />
          </a>{" "}
          NACH
        </button>
      </div>
      <div className="page-view carousel">
        <div
          className="project"
          style={{ backgroundImage: `url(${wallpapers[currentIndex]})` }}
        >
          <div className="text"></div>
        </div>
        <div className="project">
          <div className="text"></div>
        </div>
        <div className="project">
          <div className="text"></div>
        </div>
        <div className="project">
          <div className="text"></div>
        </div>
        <div className="project">
          <div className="text"></div>
        </div>

        <nav className="arrows">
          <div className="arrow previous" onClick={prevWallpaper}>
            <svg viewBox="208.3 352 4.2 6.4" fill="currentColor">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div className="arrow next" onClick={nextWallpaper}>
            {/* <svg viewBox="208.3 352 4.2 6.4">
                            <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8" /> */}
            <svg viewBox="208.3 352 4.2 6.4" fill="currentColor">
              <path d="M15 18l-6-6-6-6" />
            </svg>
          </div>
        </nav>
      </div>

      <div id="myModal1" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div
              id="ecww-widgetwrapper"
              style={{ minWidth: "250px", width: "100%" }}
            >
              <div
                id="ecww-widget"
                style={{
                  position: "relative",
                  paddingTop: "0",
                  paddingBottom: "280px",
                  height: "0",
                  overflow: "hidden",
                }}
              ></div>
              <div
                id="ecww-more"
                style={{
                  background: "#77162e",
                  font: "normal 13px/1 Helvetica, Arial, Verdana, Sans-serif",
                  padding: "10px 0",
                  color: "#FFF",
                  textAlign: "center",
                  width: "100%",
                  clear: "both",
                  margin: "0",
                  float: "left",
                }}
              >
                <a
                  style={{
                    background: "#77162e",
                    color: "#FFF",
                    textDecoration: "none",
                    borderBottom: "1px dotted #77162e",
                  }}
                  href="https://emicalculator.net/"
                  title="Loan EMI Calculator"
                  rel="noreferrer"
                  target="_blank"
                >
                  emicalculator.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="myModal2" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">APPLY FOR LOAN</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <br />
            </div>
            <div className="modal-body">
              <form action="loanform.php" method="post" className="cbp-mc-form">
                <div className="cbp-mc-column">
                  <div className="form-group">
                    <label htmlFor="make">Make</label>
                    <input
                      type="text"
                      id="make"
                      name="make"
                      placeholder=""
                      className="form-control"
                      required
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      placeholder=""
                      className="form-control"
                      required
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="varient">Variant</label>
                    <input
                      type="text"
                      id="variant"
                      name="variant"
                      placeholder=""
                      className="form-control"
                      required
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="year">Year of Manufacture</label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      placeholder=""
                      className="form-control"
                      required
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=""
                      className="form-control"
                      required
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder=""
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder=""
                      className="form-control"
                      required
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      placeholder=""
                      className="form-control"
                      required
                      maxLength="50"
                    />
                  </div>
                </div>
                <div className="cbp-mc-submit-wrap">
                  <input
                    className="cbp-mc-submit"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
              <div
                id="success_message"
                style={{ width: "100%", height: "100%", display: "none" }}
              >
                <h3>Registered successfully!</h3>
              </div>
              <div
                id="error_message"
                style={{ width: "100%", height: "100%", display: "none" }}
              >
                <h3>Error</h3> Sorry there was an error sending your form.
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="thankyou">
        <div id="myModal3" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="cancellationrequestModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Cancellation Request</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
              <br />
            </div>
            <div className="modal-body">
              <form action="nachForm.php" method="post" className="cbp-mc-form">
                <div className="cbp-mc-column">
                  <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=""
                      className="form-control"
                      required
                      maxLength="50"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="PhoneNumber">Phone Number</label>
                    <input
                      type="phone"
                      id="PhoneNumber"
                      name="PhoneNumber"
                      placeholder=""
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="LoanNumber">Loan Number</label>
                    <input
                      type="text"
                      id="LoanNumber"
                      name="LoanNumber"
                      placeholder=""
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="VehicleNumber">Vehicle Number</label>
                    <input
                      type="text"
                      id="VehicleNumber"
                      name="VehicleNumber"
                      placeholder=""
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="cbp-mc-submit-wrap">
                  <input
                    className="cbp-mc-submit"
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
              <div
                id="success_message"
                style={{ width: "100%", height: "100%", display: "none" }}
              >
                <h3>Registered successfully!</h3>
              </div>
              <div
                id="error_message"
                style={{ width: "100%", height: "100%", display: "none" }}
              >
                <h3>Error</h3> Sorry there was an error sending your form.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section id="intro">
      <div className="container">
        <div className="demo-2">
          <div className="banner-bottom">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center wow fadeInUp services c1">
              </div>
            </div>
            <div className="clearfix"></div>
          </div>

          <div className="page-view carousel">
            <div className="project" >
              <div className="text">
              </div>
            </div>
            <div className="project">
              <div className="text">
              </div>
            </div>
            <div className="project">
              <div className="text">
              </div>
            </div>
            <div className="project">
              <div className="text">
              </div>
            </div>
            <div className="project">
              <div className="text">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    </div>
  );
};

export default App;
