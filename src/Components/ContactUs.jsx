import React from 'react';
import './styles.css';

const ContactPage = () => {
    return (
        <section id="contactpg">
            <div className="container">
                <header className="section-headerin heading">
                    <h3>Contact Us</h3>
                    <h2>Home | Contact Us</h2>
                </header>
            </div>
            <section id="servicesin">
                <div className="container">
                    <div className="col-md-12 wow fadeInUp">
                        <div className="about-col">
                            <p className="bigtext">
                                <strong>We are always eager to serve you, please do reach out to us with your queries and concerns.</strong>
                            </p>
                        </div>
                    </div>
                </div>
                <section id="contact" className="section-bg wow fadeInUp">
                    <div className="container">
                        <div className="row contact-info">
                            <div className="col-md-4">
                                <div className="contact-address">
                                    <i className="ion-ios-location-outline"></i>
                                    <h3>Registered & Corporate Office</h3>
                                    <address>
                                        # 54-9-23, 100 Feet Road, Auto Nagar,
                                        Vijayawada, Krishna, AP-520007 IN
                                    </address>
                                </div>
                                <button className="popup-trigger btn2" onClick={() => {}}>
                                <span className="img-icon"><img src="img/locator1.png" width="29" height="28" alt="locator" /></span> Locate on Map
                            </button>

                                <div id="popup1" className="popup">
                                    <div className="popup-text">
                                    <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3900898192933!2d80.67334697516155!3d16.50639262758644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fad8e39610a5%3A0xf4776fcf2f58e52!2sGM4G%2BH93%2C%20Auto%20Nagar%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520007!5e0!3m2!1sen!2sin!4v1702037798961!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    <span className="popup-btn-close">&times;</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-phone">
                                    <i className="ion-ios-telephone-outline"></i>
                                    <h3>Toll-Free Number</h3>
                                    <p><strong>18002585843</strong></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-email">
                                    <i className="ion-ios-email-outline"></i>
                                    <h3>GRIEVANCE Email</h3>
                                    <p><a className="button2" href="mailto:helpdesk@kanakadurgafinance.com">helpdesk@kanakadurgafinance.com</a></p>
                                </div>
                            </div>
                            <h3 className="contact-address">ENQUIRY FORM/GRIEVANCE FORM</h3>
                        </div>
                        <div className="form">
                            <div id="sendmessage">Your message has been sent. Thank you!</div>
                            <div id="errormessage"></div>
                            <form action="contact.php" method="post" className="contactForm">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <input type="text" name="name" className="form-control" required id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="email" className="form-control" required name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="mobile" className="form-control" required name="mobile" id="mobile" placeholder="Your Mobile Number" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validation"></div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" required name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" required name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                    <div className="validation"></div>
                                </div>
                                <div className="form-group" style={{ color: '#de4137' }}>
                                    <input type="checkbox" id="dnd" name="dnd" value="dnd" />
                                    <label htmlFor="dnd"> I hereby authorize kanakadurga Finance to contact me in future through calls / SMS / Emails. It will override my registry on the NCPR. </label>
                                </div>
                                <div className="text-sm-left"><button type="submit">Send Message</button></div>
                            </form>
                        </div>
                        <br /><br />
                    </div>
                </section>
            </section>
        </section>
    );
};

export default ContactPage;
