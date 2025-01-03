import React from 'react';
import './styles.css';

const AnnualReportsComponent = () => {
  return (
    <section id="finreportpg">
      <div className="container">
        <header className="section-headerin heading">
          <h3>Annual <br />Reports</h3>
          <h2>Investors | Annual Reports</h2>
        </header>
      </div>
      <section id="servicesin">
        <div className="container">
          <div className="row about-cols">
            <div className="col-md-12 wow fadeInUp">
              <div className="about-col">
                <p>Everything we do is guided by a set of principles that define our character and culture; they have been at the core of KFL since its inception. These enduring qualities are the shared convictions that we bring to our professional and personal conduct – they are a fundamental strength of our business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <section id="services2">
            <div className="row">
              <AnnualReportItem
                pdfUrl="investors/pdf/ANNUAL_REPORT_2022-2023.pdf"
                imgUrl="img/2022-2023.jpg"
                alt="annual report"
                year="2022-2023"
              />
              <AnnualReportItem
                pdfUrl="investors/pdf/KFL_Annual_Report_21-22.pdf"
                imgUrl="img/ANNUAL_REPORT_2021-2022.jpg"
                alt="annual report"
                year="2021-2022"
              />
              <AnnualReportItem
                pdfUrl="investors/pdf/ANNUAL_REPORT_2020-2021.pdf"
                imgUrl="img/ANNUAL_REPORT_2020-2021.jpg"
                alt="annual report"
                year="2020-2021"
              />
            </div>
            <br />
<div className="row">
  <div className="col-lg-4 col-md-6 pad1 box wow bounceInUp" data-wow-duration="1.4s">
    <div className="img">
      <a href="investors/pdf/report2019-2020.pdf" target="_blank" rel="noreferrer">
        <img src="img/2019-2020b.jpg" alt="annual report" id="2019-2020" className="img-fluid1" />
      </a>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 pad1 box wow bounceInUp" data-wow-duration="1.4s">
    <div className="img">
      <a href="investors/pdf/report2018-2019.pdf" target="_blank" rel="noreferrer">
        <img src="img/2018-2019b.jpg" alt="annual report" id="2018-2019" className="img-fluid1" />
      </a>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 pad1 box wow bounceInUp" data-wow-duration="1.4s">
    <div className="img">
      <a href="investors/pdf/report2017-2018.pdf" target="_blank" rel="noreferrer">
        <img src="img/2017-2018b.jpg" alt="annual report" id="2017-2018" className="img-fluid1" />
      </a>
    </div>
  </div>
</div>
<br />
<div className="row">
  <div className="col-lg-4 col-md-6 pad1 box wow bounceInUp" data-wow-duration="1.4s">
    <div className="img">
      <a href="investors/pdf/report2016-2017.pdf" target="_blank" rel="noreferrer">
        <img src="img/2016-2017b.jpg" alt="annual report" id="2016-2017" className="img-fluid1" />
      </a>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 pad1 box wow bounceInUp" data-wow-duration="1.4s">
    <div className="img">
      <a href="investors/pdf/report2015-2016.pdf" target="_blank" rel="noreferrer">
        <img src="img/2015-2016b.jpg" alt="annual report" id="2015-2016" className="img-fluid1" />
      </a>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 pad1 box wow bounceInUp" data-wow-duration="1.4s">
    <div className="img">
      <a href="investors/pdf/Annual_Report_2014_15.pdf" target="_blank" rel="noreferrer">
        <img src="img/2014-2015b.jpg" alt="annual report" id="2014-2015" className="img-fluid1" />
      </a>
    </div>
  </div>
</div>
<br />
<div className="row">
  <div className="col-lg-4 col-md-6 pad1 box wow bounceInUp" data-wow-duration="1.4s">
    <div className="img">
      <a href="investors/pdf/report2013-2014.pdf" target="_blank" rel="noreferrer">
        <img src="img/2013-2014b.jpg" alt="annual report" id="2013-2014" className="img-fluid1" />
      </a>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 pad1 box wow bounceInUp" data-wow-duration="1.4s">
    <div className="img">
      <a href="investors/pdf/report2011-2012.pdf" target="_blank" rel="noreferrer">
        <img src="img/2011-2012b.jpg" alt="annual report" id="2011-2012" className="img-fluid1" />
      </a>
    </div>
  </div>
  <div className="col-lg-4 col-md-6 pad1 box wow bounceInUp" data-wow-duration="1.4s">
    <div className="img">
      <a href="investors/pdf/report2010-2011.pdf" target="_blank" rel="noreferrer">
        <img src="img/2010-2011b.jpg" alt="annual report" id="2010-2011" className="img-fluid1" />
      </a>
    </div>
  </div>
</div>

           
          </section>
        </div>
      </section>
    </section>
  );
}

const AnnualReportItem = ({ pdfUrl, imgUrl, alt, year }) => {
  return (
    <div className="col-lg-4 col-md-6 pad1 box wow bounceInUp" data-wow-duration="1.4s">
      <div className="img">
      <a href={pdfUrl} target="_blank" rel="noreferrer">

          <img src={imgUrl} alt={alt} id={year} className="img-fluid1" />
        </a>
      </div>
    </div>
  );
}

export default AnnualReportsComponent;
