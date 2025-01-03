import React from 'react';
import './styles.css';

const PolicyComponent = () => {
  const PolicyItem = ({ title, url }) => {
    return (
      <div className="col-lg-4 col-md-6 pad1 box wow bounceInUp" data-wow-duration="1.4s">
        <div className="img"><a href={url} target="_blank" rel="noreferrer">{title}</a></div>
      </div>
    );
  };

  return (
    <section id="finreportpg">
      <div className="container">
        <header className="section-headerin heading ">
          <h3>Policies</h3>
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
              <PolicyItem title="APPOINTMENT OF SA POLICY" url="policies/APPOINTMENT OF SA POLICY.pdf" />
              <PolicyItem title="CODE OF CONDUCT EMPLOYEE KFL" url="policies/Code of Conduct Employee KFL.pdf" />
              <PolicyItem title="CODE OF CONDUCT FOR DIRECTOR" url="policies/Code of conduct for KMP Director.pdf" />
            </div>
            <br />
            <br />
            <div className="row">
              <PolicyItem title="CREDIT POLICY" url="policies/credit policy.pdf" />
              <PolicyItem title="FAIR PRACTICE CODE ENGLISH POLICY" url="policies/Fair_Practice_Code_English.pdf" />
              <PolicyItem title="FIT & PROPER CRITERIA FOR DIRECTORS APPOINTMENT" url="policies/Fit and proper criteria for Directors appointment.pdf" />
            </div>
            <br />
            <br />
            <div className="row">
              <PolicyItem title="FPC ENGLISH POLICY" url="policies/FPC English.pdf" />
              <PolicyItem title="GOLD LOAN POLICY" url="policies/GOLD LOAN POLICY.pdf" />
              <PolicyItem title="HR POLICY" url="policies/HR Policy.pdf" />
            </div>

            <br />
            <br />
            <div className="row">
              <PolicyItem title="INTEREST RATE POLICY" url="policies/Interest Rate Policy.pdf" />
              <PolicyItem title="INTERNAL AUDIT POLICY" url="policies/INTERNAL AUDIT POLICY.pdf" />
              <PolicyItem title="KFL ALM POLICY" url="policies/KFL ALM POLICY.pdf" />
            </div>

            <br />
            <br />
            <div className="row">
              <PolicyItem title="KFL CSR POLICY" url="policies/KFL CSR Policy.pdf" />
              <PolicyItem title="KFL GRIEVANCE" url="policies/KFL Grievance Mechanism.pdf" />
              <PolicyItem title="KFL NOMINATION AND REMUNERATION" url="policies/KFL Nomination and Remuneration policy.pdf" />
            </div>
            <br />
            <br />
            <div className="row">
              <PolicyItem title="KFL PAML KYC POLICY" url="policies/KFL PAML KYC Policy.pdf" />
              <PolicyItem title="KFL VIGIL MECHANISIM" url="policies/KFL Vigil Mechanisim.pdf" />
              <PolicyItem title="NPA POLICY" url="policies/NPA Policy.pdf" />
            </div>

            <br />
            <br />

            <div className="row">
              <PolicyItem title="OUTSOURCING POLICY" url="policies/outsourcing policy.pdf" />
              <PolicyItem title="POLICY PRESERVATION OF DOCUMENTS" url="policies/Policy on preservation of documents.pdf" />
              <PolicyItem title="POLICY ON RPT" url="policies/Policy on RPT.pdf" />
            </div>

            <br />
            <br />

            <div className="row">
              <PolicyItem title="RESOURCE PLANNING" url="policies/Policy-on-Resource-Planning-.pdf" />
              <PolicyItem title="RISK MITIGATION" url="policies/Risk mitigation.pdf" />
              <PolicyItem title="PRIVACY POLICY" url="policies/KFL_Privacy_Policy.pdf" />
            </div>
            <br />
            <br />
          </section>
        </div>
      </section>
    </section>
  );
}

export default PolicyComponent;
