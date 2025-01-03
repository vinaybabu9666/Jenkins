import React from 'react';
//import './styles.css';
import './Responsive.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          <div className="footer-links">
            QUICK LINKS:
            <a href="overview">Overview</a><span className="textcolor">  | </span> 
            <a href="visionmission">Vision & Mission</a><span className="textcolor">  | </span>
            <a href="boardofdirectors">Board of Directors</a><span className="textcolor">  | </span>
            <a href="keymanagerialteam">Key Managerial Team</a><span className="textcolor">  | </span>
            <a href="commercialvehicle">Commercial Vehicles</a><span className="textcolor">  | </span>
            <a href="car">Car</a><span className="textcolor">  | </span>
            <a href="3wheeler">3 Wheeler</a><span className="textcolor">  | </span>
            <a href="2wheeler">2 Wheeler</a><span className="textcolor">  | </span>
            <a href="goldloan">Gold Loan</a><span className="textcolor">  | </span>
            <a href="financialreport">Financial Reports</a><span className="textcolor">  | </span>
            <a href="performancehighlights">Performance Highlights</a><span className="textcolor">  | </span>
            <a href="ourpartners">Our partners in Progress</a><span className="textcolor">  | </span>
            <a href="network">Network</a><span className="textcolor">  | </span>
            <a href="careers">Careers</a><span className="textcolor">  | </span>
            <a href="contactus">Contact Us</a><span className="textcolor">  | </span>
            <a href="Privacy Policy">Privacy policy</a>
            <br /><br /><br />
            &copy; Copyright Kanakadurga. All Rights Reserved
          </div>
        </div>
      </div>
      <a href=" " className="back-to-top"><i className="fa fa-chevron-up"></i></a>
    </footer>
  );
}

export default Footer;
