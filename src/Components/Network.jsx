import React, { useState } from "react";
import "./styles.css";

const Tab = ({ id, label, onChange, checked }) => (
  <>
    <input
      type="radio"
      name="tabset"
      id={id}
      aria-controls={id}
      onChange={onChange}
      checked={checked}
    />
    <label htmlFor={id}>{label}</label>
  </>
);

// const Branch = ({ name, address, phone, email, mapSrc, popupId }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => setIsOpen(!isOpen);

//   return (
//     <div className="col-lg-4 col-md-6 box wow bounceInUp" data-wow-duration="1.4s">
//       <p className="description left">
//         <span className="text2sm">Branch</span><strong>{name}</strong><br />
//         <i className="ion-ios-location bigicon"></i>{address}<br />
//         <i className="ion-iphone bigicon"></i><strong>{phone}</strong><br />
//         <i className="ion-email bigicon"></i><a href={`mailto:${email}`} className="button2">{email}</a>
//       </p>
//       <button className="popup-trigger btn2" onClick={togglePopup}>
//         <span className="img-icon"><img src="img/locator1.png" width="29" height="28" alt="locator" /></span> Locate on Map
//       </button>
//       <div id={popupId} className={`popup ${isOpen ? 'show' : ''}`}>
//         <div className="popup-text">
//           <iframe src={mapSrc} title={`Map of ${name}`} frameBorder="0" allowFullScreen></iframe>
//         </div>
//         <span className="popup-btn-close" onClick={togglePopup}>&times;</span>
//       </div>
//     </div>
//   );
// };
const Branch = ({ name, address, phone, email, mapSrc, popupId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div
      className="col-lg-4 col-md-6 box wow bounceInUp"
      data-wow-duration="1.4s"
    >
      <p className="description left">
        <span className="text2sm">Branch</span>
        <strong>{name}</strong>
        <br />
        <i className="ion-ios-location bigicon"></i>
        {address}
        <br />
        <i className="ion-iphone bigicon"></i>
        <strong>{phone}</strong>
        <br />
        <i className="ion-email bigicon"></i>
        <a href={`mailto:${email}`} className="button2">
          {email}
        </a>
      </p>
      <button className="popup-trigger btn2" onClick={togglePopup}>
        <span className="img-icon">
          <img src="img/locator1.png" width="29" height="28" alt="locator" />
        </span>{" "}
        Locate on Map
      </button>
      <div id={popupId} className={`popup ${isOpen ? "show" : ""}`}>
        <div className="popup-text">
          <iframe
            src={mapSrc}
            title={`Map of ${name}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <span className="popup-btn-close" onClick={togglePopup}>
            &times;
          </span>
        </div>
      </div>
    </div>
  );
};
const BranchDetails = ({ branches }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <section id="networkpg">
      {" "}
      {/* Add this section */}
      <div className="container">
        <header className="section-headerin heading ">
          <h3>Network</h3>
          <h2>Home | Network</h2>
        </header>
      </div>
      <section id="servicesin">
        <div className="container">
          <div className="row about-cols">
            <div className="col-md-12 wow fadeInUp">
              <div className="about-col">
                <p>
                  KFL has a <strong>large network of branches</strong> spread
                  across Five states. A growing NBFC from past 4 decades and KFL
                  stands with <strong>trust, safety, and service</strong>.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 wow fadeInUp">
            <div className="about-col">
              <div className="border1"></div>
              <br />
            </div>
            <div className="tabset">
              {branches.map((branch, index) => (
                <Tab
                  key={index}
                  id={`tab${index + 1}`}
                  label={branch.tabLabel}
                  onChange={() => handleTabChange(index)}
                  checked={activeTab === index}
                />
              ))}
              <div className="tab-panels">
                {branches.map((branch, index) => (
                  <section
                    key={index}
                    id={`ap${index + 1}`}
                    className="tab-panel"
                    style={{ display: activeTab === index ? "block" : "none" }}
                  >
                    <div className="padding2">
                      <div className="row">
                        {branch.branches.map((subBranch, subIndex) => (
                          <Branch
                            key={subIndex}
                            {...subBranch}
                            popupId={`popup${index + 1}-${subIndex + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

const branchesData = [
  {
    tabLabel: "Andhra Pradesh",
    branches: [
      {
        name: "Anakapalli",
        address:
          "Beside State Bank of India, Railway Station Road, Anakapalli-531001, Andhra Pradesh",
        phone: "9703108111",
        email: "bmakp@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.285446563905!2d82.99892891444372!3d17.683970687901503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a397129abaa803b%3A0x58d28ce0e1192c28!2sPudimadaka+Rd%2C+New+Colony%2C+Anakapalle%2C+Andhra+Pradesh+531001%2C+India!5e0!3m2!1sen!2suk!4v1530891005987",
      },
      {
        name: "Gajuwaka",
        address:
          "D No-26-17-17,Chinnagantyada, Near Rk Hospital,Gajuwaka-530026, Visakhapatnam-530026 Andhrapradesh",
        phone: "9989621144",
        email: "bmvgk@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.308484584082!2d83.19486751444379!3d17.682881537902205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39685227617bab%3A0x161f266126a17f64!2sR+K+Hospital!5e0!3m2!1sen!2suk!4v1530893069371",
      },
      {
        name: "Narasaraopet",
        address:
          "Opp Municipal Complex, Near Angel Talkies, Narasaraopet-522601,Andhrapradesh",
        phone: "9247427421",
        email: "bmnrt@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.7395773059816!2d80.04250557515682!3d16.233822635010522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a81199fe4ee3d%3A0x3ffc6e9d5274fcf2!2sAngel%20Talkies!5e0!3m2!1sen!2sin!4v1701857411332!5m2!1sen!2sin",
      },
      {
        name: "Narisipatnam",
        address:
          "Near RCM School,Peddabodepalli, Narisipatnam-531116 Andhrapradesh",
        phone: "9959802666",
        email: "bmnsp@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30415.139571161493!2d82.60198401801652!3d17.655252324292697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a399373bea9bbaf%3A0x54be07095abd30c3!2sRCM%20Elementary%20School%2C%20Peda%20boddepalli!5e0!3m2!1sen!2sin!4v1701857479104!5m2!1sen!2sin",
      },
      {
        name: "Rajam",
        address:
          "C/o Sunkara Satyanarayana, Hero Showroom Opp Road, Srikakulam Road, Rajam-532127 Andhrapradesh",
        phone: "9652610033",
        email: "bmsrj@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1701857628140!5m2!1sen!2sin!6m8!1m7!1slF7vxW3vII10PGjLUDUW8w!2m2!1d18.44856516036496!2d83.66595611777583!3f132.59812004923455!4f-3.1128984354662492!5f0.7820865974627469",
      },

      {
        name: "Ranasthalam",
        address:
          "First Floor, Friends Complex, Ramatirdalu Road, Ranasthalam-532407 Andhrapradesh",
        phone: "9100077113",
        email: "bmrns@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7580.514725801687!2d83.69327995585627!3d18.19809329661016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c0ec709c17c6d%3A0x6190b8e27e94a667!2sRanastalam%2C%20Andhra%20Pradesh%20532407!5e0!3m2!1sen!2sin!4v1701857719084!5m2!1sen!2sin",
      },
      {
        name: "Srikakulam",
        address:
          "2nd Floor, Prakruti Avenue, Near Bhyravanipeta Junction, Kims Road, Srikakulam-532401 Andhrapradesh",
        phone: "8886989666",
        email: "bmskm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3787.951173006989!2d83.87408677519467!3d18.303840975758593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c14ea1d58cdef%3A0xdd080eebee438647!2sPrakruti%20Avenues%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1701857802761!5m2!1sen!2sin",
      },
      {
        name: "Vijayanagaram",
        address:
          " 8-18-18, Indira Nagar,  Behind Suzuki Showroom,Vijayanagaram-535002 Andhrapradesh",
        phone: "9949112777",
        email: "bmvzm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.2701994602303!2d83.3925915793457!3d18.10530940000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be56b8ade2845%3A0xbb087a6f4cab4ee1!2sSuzki%20Showroom%20%26%20Service!5e0!3m2!1sen!2sin!4v1701857962868!5m2!1sen!2sin",
      },
      {
        name: "Vishakatpatnam",
        address:
          "Dno. 45-40-41, 4th Floor, Upstairs of IndusInd Bank Ltd, Opp. More Super Market, Beside HDFC Bank, Akkayapalem Main Road,Vishapatnam-530016, Andhrapradesh",
        phone: "9985556644",
        email: "bmvsp@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.136716204302!2d83.29504869678956!3d17.738196200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39434e10f89c7b%3A0x6133ac6aeec538fb!2sIndusInd%20Bank!5e0!3m2!1sen!2sin!4v1701858069861!5m2!1sen!2sin",
      },
      {
        name: "Gudivada",
        address:
          "D.No.16/329, Satyanarayanapuram, Beside Navatha Transport,Gudivada -521301 Andhrapradesh",
        phone: "8374447738",
        email: "bmgdv@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.8866901713477!2d80.99401607516022!3d16.430580129662957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a361d705e6f64f1%3A0xf7fd483768e993cc!2sNavata%20Road%20Transport!5e0!3m2!1sen!2sin!4v1701858162108!5m2!1sen!2sin",
      },
      {
        name: "Guntur",
        address:
          "4/1, Opp Reliance Trends, Arundalpet Main Road, Guntur-522601 Andhrapradesh",
        phone: "9703882626",
        email: "bmgnt@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.3927104996123!2d80.43797687515804!3d16.30286643314085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a754455dbffc5%3A0x5168790493d042bb!2sTRENDS!5e0!3m2!1sen!2sin!4v1701858244208!5m2!1sen!2sin",
      },
      {
        name: "Kurnool",
        address:
          "Shop No. 216, 2nd Floor, Sai Vasanth Complex, Birla Compound, Kurnool-518001 Andhrapradesh",
        phone: "7093743888",
        email: "bmknl@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.9444127992333!2d78.03616782514978!3d15.806884796407711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5dd39e460be23%3A0x291e0aebc4814461!2sSai%20Vasanth%20Complex!5e0!3m2!1sen!2sin!4v1701858311013!5m2!1sen!2sin",
      },
      {
        name: "Mangalagiri",
        address:
          "Opp. Municipal Office, Near Galigopuram, Mangalagiri-522503 Andhrapradesh",
        phone: "7093512555",
        email: "bmmag@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61229.32655581683!2d80.49170874871913!3d16.433310347351078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f1384e2ccc41%3A0xedb08ef558b9912f!2sMangalagiri%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1701858388733!5m2!1sen!2sin",
      },
      {
        name: "Markapuram",
        address:
          "#4/495, Naidu Bazar, Car Street, Markapuram-523316 Andhrapradesh",
        phone: "9652670033",
        email: "bmmkp@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30722.52824133701!2d79.24812130233497!3d15.734412273700919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb53167fbb2a1db%3A0xe2dd1e4d45f3320!2sDGR%20USED%20CAR%20DEALER!5e0!3m2!1sen!2sin!4v1701858489581!5m2!1sen!2sin",
      },
      {
        name: "Nellore ",
        address:
          "1st Floor, Sapthagiri Colony, Opp GVRR Junior College, Mini Bypass Road, Nellore-524004 Andhrapradesh",
        phone: "9014354798",
        email: "bmmkp@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.3238025294722!2d79.96045447512807!3d14.408488231751202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf2fc8623382b%3A0xc8790120305d5575!2sGVRR%20COLLEGE!5e0!3m2!1sen!2sin!4v1701858574349!5m2!1sen!2sin",
      },
      {
        name: "Ongole",
        address: "Opp RTC Bus stand, Dibbala Road,Ongole-523002 Andhrapradesh",
        phone: "9885444619",
        email: "bmong@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7689.237182172879!2d80.03874719104016!3d15.504934686408886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01a80a8ca2b7%3A0x846c332e20e204bb!2sAPSRTC%20Depot%20Manager%20Office!5e0!3m2!1sen!2sin!4v1701858679541!5m2!1sen!2sin",
      },
      {
        name: "Piduguralla",
        address:
          "Opp Apsrtc Bus Stand, Beside Scholars School, Piduguralla-522413 Andhrapradesh",
        phone: "9121011494",
        email: "bmpdr@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.909962884434!2d79.87334647516104!3d16.48009612830773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a356f804a870e3f%3A0x68b1248147c3ba8e!2sScholars%20international%20School!5e0!3m2!1sen!2sin!4v1701858797235!5m2!1sen!2sin",
      },
      {
        name: "Vijayawada",
        address:
          "D No.40-7-31, Jammi Chettu Centre, Moghalarajpuram,Vijayawada-520010 Andhrapradesh",
        phone: "9885444616",
        email: "bmvja@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3910699785088!2d80.63937228043972!3d16.506343086968435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fab1e43c11fd%3A0x165b88ffa22e61a0!2sd%2C%20Jammi%20Chettu%20Center%2C%2040-7-31%2C%20Jammi%20Chettu%20St%2C%20Mogalrajapuram%2C%20Shanti%20Nagar%2C%20Labbipet%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520010!5e0!3m2!1sen!2sin!4v1701858919110!5m2!1sen!2sin",
      },
      {
        name: "Kandukur",
        address:
          " D.No: 20-3-15, 1st Floor, KVB Upstairs, Main OV road Kandukur-523105 Andhrapradesh",
        phone: "9573735737",
        email: "kandukur.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.880376649178!2d79.9075241802711!3d15.219711423849722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b1281d6e663fb%3A0xabecb3297cbf4995!2sOV%20Rd%2C%20Kandukur%2C%20Andhra%20Pradesh%20523105!5e0!3m2!1sen!2sin!4v1701859006326!5m2!1sen!2sin",
      },
      {
        name: "Ananthapur",
        address:
          "  #6-375, 2nd floor, Jojode Ganga Plaza, Azad Nagar, Bellary Road, Opp TVS Showroom, Anantapur-515004",
        phone: "9963517999",
        email: "ananthapur.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.5219490160844!2d77.58800722513219!3d14.683049925052677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ac807dc48dd%3A0xaf42dc2f72805841!2sJojode%20Ganga%20Plaza!5e0!3m2!1sen!2sin!4v1701859085566!5m2!1sen!2sin",
      },
      {
        name: "Bhimavaram",
        address:
          " D No: 27-1-1, 2nd floor,  Health Temple Complex, Opp. Malbar Gold & Diamonds, Juvvalapalem Road, Bhimavaram-2",
        phone: "9959832888",
        email: "bhimavaram.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.1579369218304!2d81.51552646776368!3d16.544678627900282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2aca0cd6b1f%3A0x8d54032cbcff7c73!2sMalabar%20Gold%20and%20Diamonds%20-%20Bhimavaram!5e0!3m2!1sen!2sin!4v1701859228406!5m2!1sen!2sin",
      },
      {
        name: "Eluru",
        address:
          "  2nd Floor, Bharath Dental Hospital Building, Near Grand Aarya Hotel, N.R. Pet, Eluru-534006, Andhrapradesh",
        phone: "9652321177",
        email: "eluru.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.3435186059965!2d81.09079237516508!3d16.70970312197394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3614b7484db351%3A0xa8e681d652eb2b97!2sBharath%20Dental%20Care!5e0!3m2!1sen!2sin!4v1701859330622!5m2!1sen!2sin",
      },
      {
        name: "Jangareddygudem",
        address:
          " 17-17-591, Near Chanakya Tiffin center, Arya Vysya Kalyanamadapam Street, Aswaraopet Road, Jangareddygudem-534447",
        phone: "9100077108",
        email: "jangareddygudem.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.9824728221324!2d81.28703668052555!3d17.122354268431295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36f63447bbeb7b%3A0xd274272b3555885b!2sAswaraopeta%20-%20Jangareddygudem%20Rd%20%26%20Arya%20Vysya%20Kalyana%20Mandapam%20Rd%2C%20Jangareddigudem%2C%20Andhra%20Pradesh%20534447!5e0!3m2!1sen!2sin!4v1701859454430!5m2!1sen!2sin",
      },
      {
        name: "Kadapa",
        address:
          " D No: 42-408/17, 1st Floor, Nallarathimidde Complex, Bhagyanagar Colony, Apsara to RTC Bus Stand Road,  Kadapa-516002",
        phone: "9885323666",
        email: "kadapa.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963855.4113486896!2d77.2964939552897!3d15.979377887909498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3720c585d556b%3A0x1bd4666ed926070d!2sNew%20APSRTC%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1701859561535!5m2!1sen!2sin",
      },
      {
        name: "Narsapuram",
        address:
          "D No:6-3-39, Beside Court, Jagilanka Vari Street, Narsapuram-534275, Andhrapradesh",
        phone: "9100077165",
        email: "narsapuram.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.7570993481922!2d81.69525758043032!3d16.437158189015026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d9dce8356617%3A0xc0dfa3344130b3f2!2sJagilanka%20Vari%20St%2C%20Roypeta%2C%20Narsapur%2C%20Andhra%20Pradesh%20534275!5e0!3m2!1sen!2sin!4v1701859666374!5m2!1sen!2sin",
      },
      {
        name: "Tadepalligudem",
        address:
          "Beside IDBI Bank, Opp. Kamala Hospital, Main Road, Tadepalligudem-534101  Andhrapradesh",
        phone: "9100077143",
        email: "tadepalligudem.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.217566530714!2d81.52356737516695!3d16.81555941902647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b4b09816f5c1%3A0xb54db710829f7c19!2sKAMALA%20HOSPITALS!5e0!3m2!1sen!2sin!4v1701859789831!5m2!1sen!2sin",
      },
      {
        name: "Tenali",
        address:
          "11-1-36, Near Chaitanya Model School, Tilak Road, Chenchupet, Tenali, Andhrapradesh",
        phone: "9948451563",
        email: "tenali.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15322.573506279308!2d80.61778228715819!3d16.238763600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a0603ffeb0a7b%3A0x55121bfcc7fae60f!2sSri%20Chaitanya%20school!5e0!3m2!1sen!2sin!4v1701859975103!5m2!1sen!2sin",
      },
      {
        name: "Amalapuram",
        address:
          "D NO. 3-1-166, Health Temple Complex, Peraya Sastri Street, Amalapuram-533201,  Andhrapradesh",
        phone: "7093843888",
        email: "amalapuram.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61184.825949710255!2d81.93461180372726!3d16.57390907841627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37ef83f9204c7d%3A0x5f9453f5c41b161e!2sAmalapuram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1701860083247!5m2!1sen!2sin",
      },
      {
        name: "Kakinada",
        address:
          "D.No. 7-2, 2nd Floor, Acampeta Junction,Towards Pitapuram Road, Kakinada-533005, Andhrapradesh",
        phone: "9949862244",
        email: "bm.kakinada@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.0183063561603!2d82.2438729751706!3d17.022772113206685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3829c3f720923f%3A0x45a39e7b10cad31c!2sachampet%20junction!5e0!3m2!1sen!2sin!4v1701860178320!5m2!1sen!2sin",
      },
      {
        name: "Rajahmundary",
        address:
          "D No. 14-137/1, 1st Floor, Annamayya Street, Near RTC Complex, Beside Reliance Petrol Bunk,  Rajahmundry-533101, Andhrapradesh",
        phone: "9885511722",
        email: "rajahmundry.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.500501760616!2d81.7853437805081!3d16.99910277218547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a391e7bc6e95%3A0x9a2ccc390822174d!2sRTC%20Complex%2C%20Ayyappa%20Nagar%2C%20Rehmath%20Nagar%20Colony%2C%20Rajamahendravaram%2C%20Andhra%20Pradesh%20533101!5e0!3m2!1sen!2sin!4v1701860291540!5m2!1sen!2sin",
      },
      {
        name: "Tirupathi",
        address:
          "D No:22-11-46/1, Poolavanigunta, Opp: Royal Enfield Showroom, Renigunta Road, Tirupathi-517501",
        phone: "8977531070",
        email: "tirupathi.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.4854574356596!2d79.44642992511712!3d13.628207700142918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4bba859651eb%3A0x7f8a3683f6dc690b!2sRoyal%20Enfield%20Showroom%20-%20Sri%20Sai%20Motors!5e0!3m2!1sen!2sin!4v1701860424864!5m2!1sen!2sin",
      },
      {
        name: "Chittoor",
        address:
          "D No.10-281, 2nd Floor,  Opp PVC Hospital, Court Down,  Gandhi Rooad, Chittor–517001",
        phone: "7032767444",
        email: "chittoor.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62146.26273388023!2d79.02837229618704!3d13.216436515748272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad5c1a6cca26a1%3A0xaaadf018b7f72797!2sChittoor%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1701860534008!5m2!1sen!2sin",
      },
      {
        name: "Madanapalle",
        address:
          "D.No.3-148-8, 2nd Floor,  GS Towers, Beside Sangam Function Hall Kadiri Road, Madanapalle-517325",
        phone: "7032769444",
        email: "madanapalli.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.54111412368!2d78.49694567511625!3d13.563718301620261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb26672e866272d%3A0xeeb266d751c84a41!2sSangam%20Function%20Hall!5e0!3m2!1sen!2sin!4v1701860619432!5m2!1sen!2sin",
      },
      {
        name: "Adoni",
        address:
          "D No 1-541-1165,  Near Adithya Nursing Home,  Aditya College Road, Yemmiganur Road, Adoni-518302",
        phone: "9515661197",
        email: "bmadoni@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.2647879909928!2d77.2830102751469!3d15.630882051023649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb64dd86cdf8177%3A0x2073701112870308!2sAditya%20Nursing%20and%20vaccination%20center!5e0!3m2!1sen!2sin!4v1701860729193!5m2!1sen!2sin",
      },
      {
        name: "Proddutur",
        address:
          "D No 4-616, Room No. 3  Opp Bhavana Junior college,  Super Bazar Road",
        phone: "8977531070",
        email: "proddutur.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.2689048461966!2d78.54560927513324!3d14.753874373305699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb478a3919fc4a3%3A0xa46ce8a03c2253c1!2sBhavana%20Junior%20College!5e0!3m2!1sen!2sin!4v1701942295553!5m2!1sen!2sin",
      },
      {
        name: "Amalapuram",
        address:
          " D No 3-1-166,  Health Temple Complex,  Peraya Sastri Street,  Amalapuram-533201",
        phone: "7093843888",
        email: "amalapuram.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61184.82263214733!2d81.97135344611954!3d16.573919516961165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37ef83f9204c7d%3A0x5f9453f5c41b161e!2sAmalapuram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1701861082395!5m2!1sen!2sin",
      },
      {
        name: "Hindupur",
        address:
          " Flat : 202A,  Back side of Govt AC Gowdown,  Rahamatpur, Near Railway station,  Hindupur, Ananthapur Dt",
        phone: "9494904906",
        email: "hindupur.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15497.520448373743!2d77.48531169973182!3d13.81619917228654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1a30b8ede1647%3A0x9ac3c9d1335858cb!2sRahamathpur%2C%20Hindupuram%2C%20Andhra%20Pradesh%20515201!5e0!3m2!1sen!2sin!4v1701941769586!5m2!1sen!2sin",
      },
      {
        name: "Kovvur",
        address:
          " Dno: 11-4-38/3,  Opp. Suruchi Mess,  Near Andhra Bank, Main Road,  Kovvur, Andhrapradesh",
        phone: "9100077119",
        email: "kovvur.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.143871671174!2d81.7302868751705!3d17.016611613380547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a5d28fd311ed%3A0xff4b70c57ee8172c!2sAndhra%20Bank!5e0!3m2!1sen!2sin!4v1701861296921!5m2!1sen!2sin",
      },
      {
        name: "Nuzvid",
        address:
          " D No.8-90,   Opp: Car Stand,  Near Venkateswara Kovela Road,   Nuzvid-521201",
        phone: "9160988796",
        email: "bmhjv@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30558.618063259557!2d80.80557882646808!3d16.785267724820002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3675cbf6a62db3%3A0x342925c018a01e74!2sNuzividu%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1701861390212!5m2!1sen!2sin",
      },
    ],
  },
  {
    tabLabel: "Telangana",
    branches: [
      {
        name: "Habsiguda",
        address:
          "Plot No. 2, 1st Floor,  Opp. Legend Apartment,Street No. 8, Jsn Colony, Habsiguda,  Hyderabad, 500007, Telangana",
        phone: "9848824077",
        email: "bm.hsb@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.594258635652!2d78.53333954383316!3d17.4046565603967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb993e25bb769b%3A0xf2c64ceffa2eac27!2sLegend%20Raaga!5e0!3m2!1sen!2sin!4v1701861548770!5m2!1sen!2sin",
      },
      {
        name: "Kukatpally",
        address:
          "D No 16-2-227/32/15, Sardar Patel Nagar, Near Nizampet X Road, Beside Jntu Metro Station,Kukatpally,Hyderabad- 500072",
        phone: "9885285478",
        email: "bmhyd@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2231705548134!2d78.38610367517929!3d17.496856999642286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f416898061%3A0x93327dd95edfda17!2sd%2C%2016%2C%20Sardar%20Patel%20Nagar%20Rd%2C%20Sardar%20Patel%20Nagar%2C%20Dharma%20Reddy%20Colony%20Phase%20II%2C%20Kukatpally%20Housing%20Board%20Colony%2C%20Kukatpally%2C%20Hyderabad%2C%20Telangana%20500085!5e0!3m2!1sen!2sin!4v1701861663002!5m2!1sen!2sin",
      },
      {
        name: "L B Nagar",
        address:
          "H.No.:5-5-116, Ace Krishna Arcade, 1st Floor, 103, Opp. Panama Godowns, Ganesh Nagar, Vanasthalipuram, Hyderabad- 500070",
        phone: "9347587666",
        email: "bmhlb@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.5393212413924!2d78.56645107517635!3d17.337762554232857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1ffcb8634dd%3A0xc7a149fcab367b47!2sPanama%20Godowns!5e0!3m2!1sen!2sin!4v1701861738106!5m2!1sen!2sin",
      },
      {
        name: "Mahabubnagar",
        address:
          "#5-83/2A, Sara Complex, Beside Maheswari Talkies, Upstairs Kbs Bank, Yenugonda, Mahabubnagar-509002, Telangana",
        phone: "9963872266",
        email: "bmmbn@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30563.64321992077!2d78.01800473939548!3d16.754003579299923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca2f58346d5b6f%3A0xca7309c0bcc0b104!2sKBS%20Bank%20Mahabubnagar%20Branch!5e0!3m2!1sen!2sin!4v1701861834290!5m2!1sen!2sin",
      },
      {
        name: "Miryalaguda",
        address:
          "#18-1966-6, Hanumanpet Bypass, Beside Indian Café, Sagar Road, Miryalaguda-508207, Telangana",
        phone: "8179001333",
        email: "bmmlg@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.265771708427!2d79.55183907516782!3d16.86274241770713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a352fe7e20514df%3A0x81598bfdad24b3c9!2sINDIAN%20CAFE!5e0!3m2!1sen!2sin!4v1701861933610!5m2!1sen!2sin",
      },
      {
        name: "SangaReddy",
        address:
          "102, 1st Floor, Aksharadham Complex, Pothireddypalli X Road, Sangareddy-502295, Telangana",
        phone: "9100077156",
        email: "bmsag@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15213.15167304929!2d78.06162673811525!3d17.58905765065496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbfa27331f90ff%3A0x3c80f2cde0083593!2sPothreddipalle%2C%20Telangana!5e0!3m2!1sen!2sin!4v1701862024583!5m2!1sen!2sin",
      },
      {
        name: "Suryapet",
        address:
          "NH-65, Beside Hitech Bus Stand, Hyderabad Road, Suryapet-508213  Telangana",
        phone: "9505052444",
        email: "bmspt@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.113376928821!2d78.42980848057306!3d17.45428675820778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc93f1cfc08a637%3A0xc525bbc8b8070180!2sNH%2065%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1701862208250!5m2!1sen!2sin",
      },
      {
        name: "Kamareddy",
        address:
          "H.No: 5-5-302, Ward No: 5, Near Priya Theatre, Kamareddy Telangana",
        phone: "9440780719",
        email: "kamareddy.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3787.427893246054!2d78.32771838070272!3d18.32775333052385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc49a1ec2e6ba9%3A0xb255f73f90788d54!2sStreet%20No.%205%2C%20Ashok%20Nagar%2C%20Kamareddy%2C%20Telangana%20503111!5e0!3m2!1sen!2sin!4v1701862302138!5m2!1sen!2sin",
      },
      {
        name: "Khammam",
        address:
          "1-5-7/3/A, Flat No: 301, Near Jabbisetti Hospital, Yk.Arcade,Wyra Road,  Khammam, Telangana ",
        phone: "9908316677",
        email: "bmkmm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.3894948762477!2d80.14684487517471!3d17.248381306794773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3459d1ea7b4601%3A0xeb271c01bcbdaa30!2sJABISETTY%20HOSPITAL!5e0!3m2!1sen!2sin!4v1701862377987!5m2!1sen!2sin",
      },
      {
        name: "Kompally",
        address:
          "H.No:2-190/2/1, Muzamil Arcade, Beside Pai Electronics, 1st Floor, Suchitra X Roads, Hyderabad-500055 ",
        phone: "9533467378",
        email: "bm.kompally@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.015132500333!2d78.47382028058064!3d17.506791056575683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9aa65044af83%3A0x6d95b01159266b89!2sMuzamil%20Arcade%2C%20Medchal%20Rd%2C%20Green%20Park%2C%20Jeedimetla%2C%20Hyderabad%2C%20Telangana%20500055!5e0!3m2!1sen!2sin!4v1701862496795!5m2!1sen!2sin",
      },
      {
        name: "Warangal",
        address:
          "D No.2-5-100/9/2, 3Rd Floor, SV Arcade, Opp: Hotel Harita Kakatiya, Nakkalakutta, Hanumakonda, Warangal-506001 ",
        phone: "9963273344",
        email: "warangal.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.56922699148!2d79.55275897518875!3d17.998767784905105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f9bf9d1ff8d%3A0x2320884bb217cc0c!2sHaritha%20Kakatiya%20Hotel!5e0!3m2!1sen!2sin!4v1701862574843!5m2!1sen!2sin",
      },
      {
        name: "Mancherial",
        address:
          "1st floor, Srinivasa Complex,Opp. MIMS Degree College, Bellampally Chowrasta, Mancherial-504208, Telangana ",
        phone: "7674985888",
        email: "mancherial.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120725.87842124366!2d79.39428642088687!3d18.98957138803304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a32ca73f9fe3205%3A0xb36470765633ed6c!2sMIMS%20Degree%20College!5e0!3m2!1sen!2sin!4v1701862656675!5m2!1sen!2sin",
      },
    ],
  },
  {
    tabLabel: "Karnataka",
    branches: [
      {
        name: "Bagalkot",
        address:
          "1st Floor, Navabi Building, Plot No.4B, Sector No.05, Near Rto Office, Navanagar, Bagalkot - 587102 Karnataka",
        phone: "9606455207",
        email: "bm.bagalkot@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.0035166099874!2d75.63058838039416!3d16.168768996886126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7791b88ddef1f%3A0x192c61e8e1834efb!2sNavanagar%20Rd%2C%20Bagalkote%2C%20Karnataka%20587102!5e0!3m2!1sen!2sin!4v1701866727457!5m2!1sen!2sin",
      },
      {
        name: "Haveri",
        address:
          "Ashish Tower, 2nd Floor, Behind Federol Bank, Vidya Nagar West, Old P.B. Road, Haveri-581110 Karnataka ",
        phone: "9606455272",
        email: "haveri.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.461632884965!2d75.39085637513388!3d14.799327372180372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb96993ed3e8795%3A0x1305cae598142dcf!2sVidya%20Nagar%20west!5e0!3m2!1sen!2sin!4v1701866841402!5m2!1sen!2sin",
      },
      {
        name: "Hubli",
        address:
          " Shop No 27, D Block, 3rd Floor, Shinde Complex Neeligin Road, Hubli - 580029, Karnataka",
        phone: "9108982909",
        email: "hubli.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.4329260212544!2d75.1342890751425!3d15.353022558212905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d7a76cc8becb%3A0x1b75cf223cd5556f!2sShinde%20complex!5e0!3m2!1sen!2sin!4v1701866944770!5m2!1sen!2sin",
      },
      {
        name: "Koppal",
        address:
          " 1st Floor,Bank of Baroda, Near Ishwar Park, Hospet Road, Koppal 583231, Karnataka ",
        phone: "9986663469",
        email: "koppal.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246236.15748816248!2d75.86994263281245!3d15.352640999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb834c9375404ab%3A0x983e8d7a7ab92307!2sBank%20Of%20Baroda!5e0!3m2!1sen!2sin!4v1701924778669!5m2!1sen!2sin",
      },
      {
        name: "Belgaum",
        address:
          "824/1, Govind Complex, 1st Floor, Opp.S.C Motors, Maruti Nagar, Airport Road,  Belgaum 590016, Karnataka ",
        phone: "9606455261",
        email: "bm.belgaum@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.973364095608!2d74.5307991803529!3d15.857997205864924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66c33abf4621%3A0x3cd610e13037a66e!2sAirport%20Rd%2C%20Maruti%20Nagar%2C%20Gandhi%20Nagar%2C%20Belagavi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1701924896270!5m2!1sen!2sin",
      },
      {
        name: "Banaswadi",
        address:
          "#357, 4th Cross,  3rd Main,Ombr Layout,  Near Shivaparvathi Kalyana Mantapa,  Banaswadi,Bengaluru–560043",
        phone: "9740447072",
        email: "banaswadi.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.427649109114!2d77.64866227510898!3d13.008416714070034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16c3aaaaaaab%3A0x5c973dda43b29d69!2sShiva%20Parvathi%20Kalyana%20Mantapa!5e0!3m2!1sen!2sin!4v1701925022845!5m2!1sen!2sin",
      },
      {
        name: "Bangalore",
        address:
          "D.No:5, 5th A Cross,  24th Main JP Nagar, 2nd Phase,  Near Rv Dental College, Bengaluru – 560078, Karnataka",
        phone: "9966637753",
        email: "bangalore.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.923240762561!2d77.58357817510772!3d12.912654916167801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150d23b51ad5%3A0x1ccad6c989a93f1b!2sd%2C%205%2C%205th%20A%20Cross%20Rd%2C%20R.K%20Colony%2C%20Manjunath%20Colony%2C%202nd%20Phase%2C%20J.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560040!5e0!3m2!1sen!2sin!4v1701925107265!5m2!1sen!2sin",
      },
      {
        name: "Davanagere",
        address:
          "D.No 99/22, Arya Edigara Sanga, Near Vinoba Nagar, PB Road, Davanagere-577004, Karnataka",
        phone: "7338372876",
        email: "davanagere.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.302581160709!2d75.91306858017906!3d14.467306744258497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba25a031dfc8c7%3A0xf8486ad3641fba5f!2sPB%20Rd%2C%20Devarabelakere%2C%20Davanagere%2C%20Karnataka%20577004!5e0!3m2!1sen!2sin!4v1701925254100!5m2!1sen!2sin",
      },
      {
        name: "Mysore",
        address:
          "# 423, 1St Floor,  Chamaraja Double Road, Near Ramaswamyu Circle, K R Mohalla,  Mysore-570024, Karnataka",
        phone: "9606455205",
        email: "mysore.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2073824610557!2d76.64445017994139!3d12.301816598174454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf700fc67109b5%3A0x6380df365d154ee0!2sChamaraja%20Double%20Road%2C%20KR%20Mohalla%2C%20Mysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1701925370193!5m2!1sen!2sin",
      },
      {
        name: "Rajaji Nagar",
        address:
          "No. 152/11, 2nd Block, 36th Cross, Opp. Union Bank, Rajajinagar, Bengaluru – 560010, Karnataka ",
        phone: "7349799417",
        email: "rajajinagar.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6901692646766!2d77.55232087510873!3d12.991657914438173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8c9bb938cd%3A0x8fe869af0183fc91!2sUnion%20Bank%20of%20India!5e0!3m2!1sen!2sin!4v1701925497623!5m2!1sen!2sin",
      },
      {
        name: "Shivamoga",
        address:
          "No.369, 3rd Cross, 1st Floor, Kotte Complex Opp. Gururaja Garment, Jayanagar Shivamoga-577201, Karnataka  ",
        phone: "8050461561",
        email: "bm.shimoga@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15489.657899015114!2d75.56421944975811!3d13.933909360031828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba92ac6c54065%3A0x3e23ca34ee482235!2sSree%20Gururaja%20Garments!5e0!3m2!1sen!2sin!4v1701925663066!5m2!1sen!2sin",
      },
      {
        name: "Tumkur",
        address:
          "Chamundeshwari Complex, Barline Road, K R Extension,  Near Chammundeswari Temple, Tumkur-572102, Karnataka ",
        phone: "9844071080",
        email: "tumkur.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248509.10896025904!2d76.6277176975923!3d13.290762428463358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02dab9eeb4215%3A0x7ca32a927c5e3348!2sChamundeshwari%20Temple!5e0!3m2!1sen!2sin!4v1701925768766!5m2!1sen!2sin",
      },
      {
        name: "Nanjanguda",
        address:
          "# 3444/3302, Ward No 23, 12Th Cross, Sri Krishna Complex,  Opp Vaidya Clinic, Nanjangud Town-571301",
        phone: "9611192022",
        email: "nanjangud.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.882529218418!2d76.67757807509808!3d12.120189232972507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf69f2a689d34b%3A0x107d68a344464c2c!2sSri%20Krishna%20complex!5e0!3m2!1sen!2sin!4v1701925891343!5m2!1sen!2sin",
      },
      {
        name: "Mangalore",
        address:
          "2nd Floor, Essel Willcom, BendoorWell, Mangalore-575004, Karnataka ",
        phone: "9901612936",
        email: "mangalore.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.57905892486!2d74.85451277510718!3d12.870442417088015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a33f1986e65%3A0xa6c0149dddbcdcb9!2sEssel%20Willcon!5e0!3m2!1sen!2sin!4v1701926050606!5m2!1sen!2sin",
      },
      {
        name: "Channapatna",
        address:
          "#2228, 2nd Floor, Chowdeshwari Complex, Beside Reliance Petrol Bunk,  B.M.Road, Channapatna-562160 ",
        phone: "9148915137",
        email: "channapatna.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.9209427680244!2d77.19500907997713!3d12.653188189915385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae53038fed33f5%3A0xa29d0dec57fdf2b2!2sChowdeshwari%20complex!5e0!3m2!1sen!2sin!4v1701926141139!5m2!1sen!2sin",
      },
      {
        name: "Gulbarga",
        address:
          "Plot No:5,2nd Floor, Kawale Complex, Godutainagar Main Gate, New Jewargi Road,  Gulbarga -585102",
        phone: "9606064145",
        email: "gulbarga.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.0767395676667!2d76.81042428055255!3d17.31184616261503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8bf5081903793%3A0xc94d16a2f44b8f4a!2sNew%20Jewargi%20Rd%2C%20Kalaburagi%2C%20Karnataka%20585102!5e0!3m2!1sen!2sin!4v1701926218312!5m2!1sen!2sin",
      },
      {
        name: "Sindhanur",
        address:
          "D No: 6-1-1419/1, 1st Floor, Sai Vihari Dabha Gangavati Road, Sindhanur-584129,  Karnataka",
        phone: "7337692082",
        email: "sindhanur.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.3168947693125!2d76.70699338033002!3d15.681323310904506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7938fc3a2857b%3A0xf9aff0ac4d1771e5!2sGangavathi%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1701926377786!5m2!1sen!2sin",
      },
      {
        name: "Shahapur",
        address:
          "52/1, 1st Floor, Near Hiremath Petrol Bunk, Bali Complex, BB Road,  Shahapur-585223",
        phone: "9741614890",
        email: "shahpur.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.5048403191267!2d76.84108907427681!3d16.70164392219943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc85d6a1e580911%3A0x835bd985fcb7b93b!2sHiremath%20Petrol%20Bunk!5e0!3m2!1sen!2sin!4v1701927599334!5m2!1sen!2sin",
      },
      {
        name: "Bidar",
        address:
          "D No: 69-9-3, Seenu Complex, 1st Floor, Above Axis Bank, Gumpa Road, Bidar-585401,  Karnataka",
        phone: "9902715243",
        email: "bidar.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15186.305080903114!2d77.5039070769301!3d17.905256288606815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec79b7cf8ac6d%3A0x556ce838da232fc!2sAxis%20Bank%20Branch!5e0!3m2!1sen!2sin!4v1701927779462!5m2!1sen!2sin",
      },
      {
        name: "Bijapur",
        address:
          "#31, Near New DCC Bank,  KC Nagar, Solapur Road, Bijapur-586103,  Karnataka",
        phone: "8904048702",
        email: "bijapur.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.478949218267!2d75.7092449736664!3d16.852185790022414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6ff61bd308ec5%3A0x98cc57fdd428d877!2sThe%20Vijaypur%20District%20Central%20Co-operative%20Bank%20Ltd!5e0!3m2!1sen!2sin!4v1701927895960!5m2!1sen!2sin",
      },
      {
        name: "Lingasugur",
        address:
          "D No: 2-11-856, Bearing Municipal Khata, Near Petrol Pump, Raichur Road, Lingasugur-584122,  Karnataka",
        phone: "9591054602",
        email: "lingasugur.bm@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d490530.71334699995!2d75.99381424999997!3d16.154959000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8010bf5ac10f7%3A0xaaa6dd445d0b8a8!2sSohan%20kumar%20Fuels%20Indian%20Oil%20Petrol%20Pump!5e0!3m2!1sen!2sin!4v1701928058671!5m2!1sen!2sin",
      },
    ],
  },
  {
    tabLabel: "Gujarath",
    branches: [
      {
        name: "Ahmedabad",
        address:
          "Premises No.411/A, Sakar - 9, 4th Floor, Beside old RBL Bank, Near City Gold, Ashram Road,  Navarangpura, Ahmedabad -380008",
        phone: "8690008103",
        email: "bmahmedabad@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.7974538382155!2d72.56499277269816!3d23.03120796998639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8458f2319291%3A0xb95e5e60a9d45690!2sSakar-9%2C%20Beside%20old%20Reserve%20Bank%20of%20India%2C%20Ashram%20Rd%2C%20near%20City%20Gold%2C%20Muslim%20Society%2C%20Navrangpura%2C%20Ahmedabad%2C%20Gujarat%20380009!5e0!3m2!1sen!2sin!4v1701929153486!5m2!1sen!2sin",
      },
      {
        name: "Anand",
        address:
          "211/212, Neelkanth Square, Anand Sojithra Road, Opp Jilla Seva Sadan, Anand-388001, Gujarath",
        phone: "9979536360",
        email: "bmgan@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.908248132768!2d72.96387067443256!3d22.54510953397899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4db9f4235751%3A0x46c186495d54f79!2sJilla%20Seva%20Sadan%20-%20Anand!5e0!3m2!1sen!2sin!4v1701929312519!5m2!1sen!2sin",
      },
      {
        name: "Dabhoi",
        address:
          "Shop No 21/22, 1st Floor, Ambica Complex, Vega Chowkdi, Dabhoi-391110, Gujarath",
        phone: "6354912705",
        email: "bmdabhoi@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.5151011671096!2d73.38577947442023!3d22.144456348527886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fdf692f4fa6b9%3A0xa3c29237fa3d5463!2sAmbica%20complex!5e0!3m2!1sen!2sin!4v1701929637632!5m2!1sen!2sin",
      },
      {
        name: "Himmath Nagar",
        address:
          "4, Maple Crystal Complex,  Nr.Sahakari Jin Cross Road, N.H.-8, Himmatnagar-383001",
        phone: "9712970325",
        email: "bmghn@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6543334377943!2d72.96979627446552!3d23.58085509526581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db8bcd197d661%3A0xe72d8e2deae42685!2sMaple!5e0!3m2!1sen!2sin!4v1701929735268!5m2!1sen!2sin",
      },
      {
        name: "Nadiad",
        address:
          "228, Platinum Plaza, 2nd Floor, Near CRSons Petrol Bunk, Above ICICI Bank, Near Station Road, Nadiad-387001",
        phone: "9712970325",
        email: "bmnadiad@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58906.8514006405!2d72.8327892608087!3d22.6657832368872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5b34345beda5%3A0x505c8be76925c7a3!2sICICI%20BANK%20ATM!5e0!3m2!1sen!2sin!4v1701929842218!5m2!1sen!2sin",
      },
      {
        name: "Rajkot",
        address:
          "206, Gayathri Commercial Complex, Dr Yagnik Road, Near Jaganath Police Stn, Rajkot-360001, Gujarat",
        phone: "6354912731",
        email: "bmgrk@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.620566593207!2d70.78932837442471!3d22.292358543184893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca19b9f6b875%3A0x329bc96253cb135f!2sJagnath%20Police%20Station!5e0!3m2!1sen!2sin!4v1701929946871!5m2!1sen!2sin",
      },
      {
        name: "Surat",
        address:
          "104-Sns Axis Business Space, 1st Floor,Above Hdfc Bank, Near Mahavir Hospital, Opp Jivanbharti School, Nanpura,Surat-395001",
        phone: "6354912736",
        email: "bmgsh@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1923888196293!2d72.81133757439166!3d21.18451498241234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e705192d03f%3A0xe4fc1330863e2f25!2sMahavir%20Hospital!5e0!3m2!1sen!2sin!4v1701930048138!5m2!1sen!2sin",
      },
      {
        name: "Vadodara",
        address:
          "GJ House, 3rd Floor, Opp Express Hotel, RC Dutt Road, Alkapuri, Vadodara-390007",
        phone: "6354912702",
        email: "bmvadodara@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1845.5733895016815!2d73.16709206347652!3d22.310288000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b1c6c045d5%3A0xc23204ff5f4e4b53!2sHotel%20Express%20Towers!5e0!3m2!1sen!2sin!4v1701930140961!5m2!1sen!2sin",
      },
      {
        name: "Vapi",
        address: "Shop 111, Center Point, Above IDBI Bank, N.H.-8, Vapi-396191",
        phone: "6354912740",
        email: "bmvapi@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.347674481953!2d72.92006607436849!3d20.36855001012836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce481de1becd%3A0x3d673a6ddfaeccd7!2sIDBI%20Bank!5e0!3m2!1sen!2sin!4v1701930245642!5m2!1sen!2sin",
      },
      {
        name: "Bharuch",
        address:
          "214-217,Aditya Complex, Near Kasak Circle, Bharuch,Bharuch-392001",
        phone: "6354912704",
        email: "bmbharuch@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3706.9660634085026!2d73.00015117440692!3d21.704042464244807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be020b7b45cb967%3A0xdaff8a8c937f1d87!2sAditya%20Complex!5e0!3m2!1sen!2sin!4v1701930349588!5m2!1sen!2sin",
      },
      {
        name: "Godhra",
        address:
          "1st Floor, Above HDFC Ltd,  Dahod, Godhra,  Panchmanahal Dt.389350",
        phone: "6354912730",
        email: "bmgodhra@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.743726178037!2d73.6376273744397!3d22.774890025527455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e7bf9d44118c7%3A0xb3b7cdce9b9b5dd3!2sHDFC%20Bank%20Home%20Loans%20-%20GODHARA!5e0!3m2!1sen!2sin!4v1701930459117!5m2!1sen!2sin",
      },
      {
        name: "Halol",
        address:
          "2Nd Floor, Opp Telephone Exchange, Above Maa Motors, Kalol Road, Halol-389350",
        phone: "6454912709",
        email: "bmghl@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.8936111962175!2d73.4598916726175!3d22.62044768583651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3960820b6df330f3%3A0xbf32b352e1383658!2sKalol%20Rd%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1701930549476!5m2!1sen!2sin",
      },
      {
        name: "Mehsana",
        address:
          "1 To 5, Shiv Arcade, Near Palavasana Circle, Highway, Mehsana-384003",
        phone: "6354912712",
        email: "bmmehsana@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.265652364992!2d72.36376397446477!3d23.558900696102878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c4106d7632343%3A0xc054bf8960f79ea5!2sPALAVASANA%20Primary%20School!5e0!3m2!1sen!2sin!4v1701930638354!5m2!1sen!2sin",
      },
      {
        name: "Palanpur",
        address:
          "2nd Floor, Behind Union Bank, Near Gayathri mandir, Abroad Highway, Palanpur-385001",
        phone: "6354912716",
        email: "bmpalanpur@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.745615356666!2d72.43851277448536!3d24.18065267212434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ce9692c5dc123%3A0xcaaf773c3910c8a5!2sGAYATRI%20MANDIR!5e0!3m2!1sen!2sin!4v1701930845473!5m2!1sen!2sin",
      },
      {
        name: "Dediapada",
        address:
          "1311,1St Floor, Near Chikada Chokadi, Sagbara Road, At Post & Ta Dediapada, Dist:Narmada, Gujarat-393040",
        phone: "6354912735",
        email: "bmdediapada@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29671.836698177587!2d73.54818640623002!3d21.625719073665092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdffb12cc1d6ecb%3A0xfe261afe9030cc44!2sDediapada%2C%20Gujarat%20393040!5e0!3m2!1sen!2sin!4v1701930982568!5m2!1sen!2sin",
      },
      {
        name: "Morbi",
        address:
          "City Point Shopping Center, Shop No 5-6, Second Floor, Mahendra Nagar Chokdi, Halvad Morbi Road,  Morbi - 363642",
        phone: "6354912720",
        email: "bmmorbi@kanakadurgafinance.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7354.0388375494285!2d70.85334633907345!3d22.838771054952293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d5060f0216d%3A0xe6cb7f658c7e2eeb!2sHimalay%20Soda%20%26%20Softy%20-%20Mahendranagar%20-%20Morbi!5e0!3m2!1sen!2sin!4v1701931117343!5m2!1sen!2sin",
      },
    ],
  },
  {
    tabLabel: "GoldLoan Branches",
    branches: [
      {
        name: "Dwaraka Nagar",
        address:
          "D No. 48-8-23/1, Lalitha Plaza, 1st Floor, Behind Boy London Shop, Dwarakanagar, Vishakapatnam-530016",
        phone: "8008251166",
        email: "bmvdn@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1705488600187!5m2!1sen!2sin!6m8!1m7!1s5jUqlmE0a74fizHxkt8r4g!2m2!1d17.72790268536278!2d83.30684911223369!3f145.98909586792323!4f5.582156281404494!5f0.7820865974627469",
      },
      {
        name: "Gopala Patnam",
        address:
          "D No.58-1-330, 1St Floor,   Opp, Bhashayam Public School,  Gopala Patnam Main Road, Butchirajpalem, Nad Kotha Road",
        phone: "8008251188",
        email: "bmvgp@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.018183456244!2d83.2310186440969!3d17.74378237739498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3967e06fcf56c7%3A0x57b9fa61b877e3ca!2sUsha%20Matchings!5e0!3m2!1sen!2sin!4v1705488911497!5m2!1sen!2sin",
      },
      {
        name: "Eluru Road",
        address:
          "D No.29-37-158, Sri Krishna Nilayam, 1st floor, Bank of Baroda Eluru Road, Governorpet, Vijayawada-520002",
        phone: "9000927979",
        email: "bmvap@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.243728164736!2d80.62714707516167!3d16.5137886273834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35effe3503dca3%3A0xc16899854a3b81ef!2sBank%20Of%20Baroda!5e0!3m2!1sen!2sin!4v1701933773157!5m2!1sen!2sin",
      },
      {
        name: "One Town",
        address:
          "D.No.11-1-25,  B R P Road, Near Bodemma Hotel, One Town, Vijayawada-520001",
        phone: "9000367979",
        email: "bmvot@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15300.28397063639!2d80.61690200040866!3d16.52251321936839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e55b9cae807d%3A0xfad1a67c7119f12c!2sBodemma%20Hotel!5e0!3m2!1sen!2sin!4v1705489563828!5m2!1sen!2sin",
      },
      {
        name: "Guntur",
        address:
          "D.No.6-9-18/A, 1st floor, Beside IndusInd Bank, 9/1,  Arundalpet, Guntur-522004",
        phone: "8977636789",
        email: "bmgap@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d957.3422473558564!2d80.43780346957473!3d16.304079886198537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDE4JzE0LjciTiA4MMKwMjYnMTguNCJF!5e0!3m2!1sen!2sin!4v1701934115068!5m2!1sen!2sin",
      },
      {
        name: "Ongole",
        address:
          "D.No.37-1-174, 1st Floor, Opp. Chunduri Petrol Bunk, Big C Upstairs, Kurnool Road,  V S S Towers, Ongole",
        phone: "8008259977",
        email: "bmokr@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245856.2996705591!2d79.83761688923516!3d15.671342942090785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01a9dbc2d243%3A0x6ef53bf9c83dbb67!2sChunduru%20Petrol%20bunk!5e0!3m2!1sen!2sin!4v1705580453486!5m2!1sen!2sin",
      },
      {
        name: "Ananthapuram",
        address:
          "D.No.10-314, Above Reliance Digital, 2nd Floor, Subhash Road, Ananthapuram-515001",
        phone: "9963532888",
        email: "bmanp@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.5246588382015!2d80.04603184030377!3d15.50997992411725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b01320fb118c3%3A0x60be4f6c73571173!2sBig%20C%20Mobiles%20Ongole%203%20-%20Best%20Mobile%20Phone%20Store!5e0!3m2!1sen!2sin!4v1705492602768!5m2!1sen!2sin",
      },
      {
        name: "Amalapuram",
        address:
          "D.No.2-1-81, 1St Floor, Hanuman Complex, Knf Main Road, Beside Khazana Jewellery, Amalapuram – 533201",
        phone: "7075067772",
        email: "bmamg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/map  s/embed?pb=!1m18!1m12!1m3!1d3823.9504640920018!2d82.00413381717597!3d16.57900092475116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37e5f6969ed9db%3A0x8b9688b3e50268b4!2sKhazana%20Jewellery%20Private%20Limited!5e0!3m2!1sen!2sin!4v1701934743431!5m2!1sen!2sin",
      },
      {
        name: "Tirupathi",
        address:
          "D No. 8-119, Plot No.21,  1st Floor, Rtc Road, Royal Nagar, Andhrapradesh Co-Operative Bank, Near By Railway Gate,Tirupathi",
        phone: "7075067770",
        email: "bmtir@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15509.151928891997!2d79.40656999628392!3d13.640238121346066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b645052e2cd%3A0x2c9a10f259d8d372!2sCANARA%20BANK%20-%20TIRUPATHI!5e0!3m2!1sen!2sin!4v1701934846077!5m2!1sen!2sin",
      },
      {
        name: "Tirupathi",
        address:
          "D No. 8-119, Plot No.21,  1st Floor, Rtc Road, Royal Nagar, Andhrapradesh Co-Operative Bank, Near By Railway Gate,Tirupathi",
        phone: "7075067770",
        email: "bmtir@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15509.151928891997!2d79.40656999628392!3d13.640238121346066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4b645052e2cd%3A0x2c9a10f259d8d372!2sCANARA%20BANK%20-%20TIRUPATHI!5e0!3m2!1sen!2sin!4v1701934846077!5m2!1sen!2sin",
      },
      {
        name: "Eluru",
        address:
          "D.No.23B-4-11, 1st Floor,   Subammadevi High School Road, Opp. ZED Labs, R.R.Pet, Eluru - 534002",
        phone: "7093672444",
        email: "bmegl@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.2651404438407!2d81.0996703751651!3d16.713617321865293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3614c945ceb6db%3A0x655c9ff95c1000!2sZed%20Labs%20Speciality%20Diagnostic%20Center!5e0!3m2!1sen!2sin!4v1701934994940!5m2!1sen!2sin",
      },
      {
        name: "Moghalrajpuram",
        address:
          "D.No.40-7-31, Jammichettu Center,  Moghalrajpuram, Vijayawada - 520010",
        phone: "7995213335",
        email: "bmvmp@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3823269032964!2d80.6398328804398!3d16.506784986955502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fab1f1ba6dff%3A0xc886f387254b246!2sJammichettu%20Center%2C%20Jami%20Chettu%20Centre%2C%20Christurajupuram%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520010!5e0!3m2!1sen!2sin!4v1701935085788!5m2!1sen!2sin",
      },
      {
        name: "Jangareddygudem",
        address:
          "D No -3-205, 1st Floor  Eluru Road   Opp. Lakshmi Theater   Jangareddygudem 534447",
        phone: "7995193335",
        email: "bmjrd@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1548043263992!2d80.6435681804414!3d16.518280586614708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e54b05e5cf4f%3A0xaeafbc4e496ae135!2sEluru%20Rd%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1701944788251!5m2!1sen!2sin",
      },
      {
        name: "Tanuku",
        address:
          "1st Floor on prestiage show room,  Venkanna plaza,  Kappala Venkanna center - 534211",
        phone: "7995197775",
        email: "bmanp@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.517298291396!2d81.68292387516583!3d16.7509198208284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b72c3f3a10a9%3A0x456c80d44ac454f9!2sPrestige%20Xclusive%20-%20Tanuku!5e0!3m2!1sen!2sin!4v1701946547055!5m2!1sen!2sin",
      },
      {
        name: "Tadepalligudem",
        address:
          "3-2-5/2(B), 1st Floor,  Dr. Venkataratnam Hospital Road,  Opp. Kamala Hospital,  Subbaraopet-534101",
        phone: "7075097772",
        email: "bmanp@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.70108988098823!2d81.52611073978147!3d16.81556579455847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b4b09816f5c1%3A0xb54db710829f7c19!2sKAMALA%20HOSPITALS!5e0!3m2!1sen!2sin!4v1705555621341!5m2!1sen!2sin",
      },
      {
        name: "Chinthalapudi",
        address:
          "16-225 , First Floor , Near Old Busstop , GV Mall Super market , Main Road , Chinthalapudi – 534460",
        phone: "8712602455",
        email: "bmcpg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.76397337270646!2d80.98387868239021!3d17.06718384555269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a367daaca17639f%3A0xa3c43026b210eb48!2sG%20V%20MART%20SUPERMARKET!5e0!3m2!1sen!2sin!4v1705575725897!5m2!1sen!2sin",
      },
      {
        name: "KANIGIRI",
        address: "s. v. Gopal Reddy complex, YSR Road, Kanigiri - 523230",
        phone: "7702546569",
        email: "bmkgg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.487468077494!2d79.5017400802944!3d15.404219518714093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b2ee527d51e13%3A0xc80fab365b2d2562!2sYSR%20Rd%2C%20Kothapeta%2C%20Kanigiri%2C%20Andhra%20Pradesh%20523230!5e0!3m2!1sen!2sin!4v1705576643570!5m2!1sen!2sin",
      },
      {
        name: "Ajit Singh Nagar",
        address:
          "D.NO:43-144-5,FIRST FLOOR, OPP: PRASANTHI HOSPITAL,PIPULAROAD,  AJITSINGH NAGAR-520015",
        phone: "9121591614",
        email: "bmvsn@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30599.21326322541!2d80.5856551743164!3d16.5310617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e5c2fa218413%3A0x3531fee5627d71d0!2sPrashanthi%20Multi%20Speciality%20Hospital!5e0!3m2!1sen!2sin!4v1705556893520!5m2!1sen!2sin",
      },
      {
        name: "Dharmajigudem",
        address:
          "1-74,Ground Floor , Opp Aksharanandana School , Main Road , Dharmajigudem-534462",
        phone: "89776 04549",
        email: "bmdmg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15270.441530440707!2d80.98092168652319!3d16.89515741075673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a366ff0e6985ac3%3A0x6ea8ea9e0e7f881d!2sDharmaji%20Gudem%2C%20Andhra%20Pradesh%20534462!5e0!3m2!1sen!2sin!4v1705576067939!5m2!1sen!2sin",
      },
      {
        name: "Srikakulam",
        address:
          "#11-2-13 , 1 St Floor ,Near By BSNL Office   Womens College Road ,  Opposite Suryamahal , Srikakulam – 532001",
        phone: "89779 11633",
        email: "bmskg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.1497431713365!2d83.8959500967895!3d18.294758999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c156ae20e609d%3A0x11c17160d6e42c68!2sBSNL%20OFFICE%20(SANCHAR%20BHAVAN)%20SRIKAKULAM%20DISTRICT!5e0!3m2!1sen!2sin!4v1705554027879!5m2!1sen!2sin",
      },
      {
        name: "Visakhapatnam, Gajuwaka",
        address:
          "#12-60-44, SeethaRamnagar, B.C.Road   Opp Sankar Foundation Eye Hospital,  New Gajuwaka, Visakhapatnam-530026",
        phone: "7993155551",
        email: "bmvga@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.16788971686356!2d83.21577785646731!3d17.68124409200769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a396906e4936681%3A0x967f97bc6da9d5f7!2sSankar%20Foundation%20Eye%20Hospital!5e0!3m2!1sen!2sin!4v1705557929658!5m2!1sen!2sin",
      },
      {
        name: "MARKAPURAM",
        address:
          "#6/97&amp;98, Ward No -6 ,  Naidu Street , NTR Statue near Dornal busstop , Markapuram - 523316 ",
        phone: "8121008344",
        email: "bmmrg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30721.747068611967!2d79.27150958011318!3d15.73958240585367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb531c8be3e2481%3A0x4b5b5ba7ee58bf0c!2sDornala%20Bus%20stand!5e0!3m2!1sen!2sin!4v1705558573315!5m2!1sen!2sin",
      },
      {
        name: "KAVALI",
        address:
          "D.no:2-14-26, Near Chatrapati Sivaji Statue, Devi Theater Kavali -524201",
        phone: "9573111796",
        email: "bmkvg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.400480146575!2d79.993114071338!3d14.91476510199733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7bf176002cd5%3A0xd27529535f2cd933!2sChatrapathi%20Sivaji%20Statue!5e0!3m2!1sen!2sin!4v1705558749549!5m2!1sen!2sin",
      },
      {
        name: "NELLORE",
        address:
          "#25/2/702 , Chaitanyapuri , Opp M.V.S Kalyanamandapam Vedhayapalem Center , NELLORE - 524004",
        phone: "7075466674",
        email: "bmnvg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.2049768250035!2d79.95872396830141!3d14.41534422135198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3c343c52c19%3A0x6ace7e87ac5406ec!2sChaitanyapuri%20vedayapalem!5e0!3m2!1sen!2sin!4v1705559449852!5m2!1sen!2sin",
      },
      {
        name: "CHILAKALURIPAT",
        address:
          "Block No -21 , #21-241,1 st floor, Rural Police station road, Near by Vinayakaswami temple, Chilakaluripeta – 522616",
        phone: "9100202258",
        email: "bmckg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.2049768250035!2d79.95872396830141!3d14.41534422135198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf3c343c52c19%3A0x6ace7e87ac5406ec!2sChaitanyapuri%20vedayapalem!5e0!3m2!1sen!2sin!4v1705559449852!5m2!1sen!2sin",
      },
      {
        name: "ADDANKI",
        address:
          "#29-377 , Ward No-11, First Floor , Bangla Road , Addanki - 523201 ",
        phone: "89779 04549",
        email: "bmadk@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.910841619499!2d79.97157082514984!3d15.808654546361005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4af112a3ed321f%3A0x312dc092d1efae39!2sBungalow%20Road!5e0!3m2!1sen!2sin!4v1705559721514!5m2!1sen!2sin",
      },
      {
        name: "REPALLE",
        address:
          "# 11-16-115 ,. 1st Floor, Praveen Plaza ,Opp Taluka Office , Repalle - 522265",
        phone: "7995399946",
        email: "bmrpg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.8619907900325!2d80.82643569678955!3d16.020698200000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a49f597b785add1%3A0xe4bd3e2593cd5d39!2sTaluka%20Office!5e0!3m2!1sen!2sin!4v1705559885600!5m2!1sen!2sin",
      },
      {
        name: "GUNTUR -NALLACHERUVU",
        address:
          "#24-14-31 ,3 rd Line , Opp Mahaveer college,Main Road, Nallacheruvu ,Guntur -522003",
        phone: "70754 88826",
        email: "bmgng@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.709995949901!2d80.44118708009667!3d16.286627220820442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7553e76f82fd%3A0xec3e8af1417908bd!2sMAHAVIR%20MEMORIAL%20JR.COLLEGE%20GUNTUR!5e0!3m2!1sen!2sin!4v1705560028227!5m2!1sen!2sin",
      },
      {
        name: "NANDYAL",
        address:
          "DNO 25/162 FIRST FLOOR	 UPSTAIRS AGRA SWEETS SHOP NEAR CHANDANA BROTHERS NEAR CHANDANA BROTHERS- 518501",
        phone: "99666 23034",
        email: "bmndg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.709995949901!2d80.44118708009667!3d16.286627220820442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7553e76f82fd%3A0xec3e8af1417908bd!2sMAHAVIR%20MEMORIAL%20JR.COLLEGE%20GUNTUR!5e0!3m2!1sen!2sin!4v1705560028227!5m2!1sen!2sin",
      },
      {
        name: "MADHANAPALLI",
        address:
          " #11-243-A , DRC Complex ,	 First Floor , RR Street , Madhanapalli – 517325",
        phone: "89770 11599",
        email: "bmmpg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.7305361655444!2d78.49982488007359!3d13.552114767921466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb265d91ff34353%3A0xa7d114a2beb76705!2sReading%20Room%20St%2C%20Basinikonda%2C%20Madanapalle%2C%20Andhra%20Pradesh%20517325!5e0!3m2!1sen!2sin!4v1705560417490!5m2!1sen!2sin",
      },
      {
        name: "KURNOOL",
        address:
          "  U Con shoppe Complex, Shop No 2,3,4, OPP New RTC Bus Stop , Ballari Road , Kurnool , AP- 518004",
        phone: "70758 11193",
        email: "bmkgl@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30709.824577604293!2d78.01638803892764!3d15.818286097711487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e756297f0d3d%3A0xea7bb8d55a2d28d2!2sAndhra%20Pradesh%20State%20Road%20Transport%20Corporation%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1705560932053!5m2!1sen!2sin",
      },
      {
        name: "KUPPAM",
        address:
          "Dr No.14-564/4,1st floor, Near Gagamma Temple, Nethaji Kuppam-517425",
        phone: "76749 69298",
        email: "bmkpg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.418990191711!2d78.34363087489177!3d12.751279759011032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badb9c9a2df32b9%3A0xc1711dd72a291d57!2sSri%20Tirupati%20Gangamma%20Temple!5e0!3m2!1sen!2sin!4v1705561081777!5m2!1sen!2sin",
      },
      {
        name: "KALYANADURGAM",
        address: "# 8/10 , 1st Floor, Valmiki Circle, Kalyanadurgam – 515761",
        phone: "7416222933",
        email: "bmkyg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.9170310447394!2d77.10869567513018!3d14.546737078393063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb0d6cfad0f6e0f%3A0xe610d6481ceae856!2sValmiki%20Circle%2C%20Kalyandurg%2C%20Andhra%20Pradesh%20515761!5e0!3m2!1sen!2sin!4v1705561219637!5m2!1sen!2sin",
      },
      {
        name: "KADAPA",
        address:
          "# 42/408-17,1st floor, Nallarathimidde, Baghya Nagar Colony-516001",
        phone: "8977011755",
        email: "bmkap@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.2456105856254!2d78.82981008017934!3d14.47058114417154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb37208e328829f%3A0x6fe32b7383a25597!2sBhagya%20Nagar%20Colony%2C%20Kadapa%2C%20Andhra%20Pradesh%20516002!5e0!3m2!1sen!2sin!4v1705561348319!5m2!1sen!2sin",
      },
      {
        name: "KADIRI",
        address:
          "# 8-135, Vali Sab Road Opposite Arabic Restaurant Kadiri – 515591",
        phone: "9100988993",
        email: "bmkrg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.4432900234465!2d78.16203927090122!3d14.11000845672904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3cf730e9985a5%3A0x1c90a9cca76f8646!2sArabeiq%20Restaurant!5e0!3m2!1sen!2sin!4v1705561549296!5m2!1sen!2sin",
      },
      {
        name: "GUNTAKAL",
        address: "18/21 ,1st floor, Near RTC Bus stand, Guntakal - 515801",
        phone: "87126 94114",
        email: "bmgtg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7702.115200951083!2d77.37182564186341!3d15.155181047332992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6d9bc3c66ef7d%3A0xa2e417c49122b5c0!2sAPSRTC%20BUS%20STAND%20%2C%20GUNTAKAL!5e0!3m2!1sen!2sin!4v1705561860192!5m2!1sen!2sin",
      },
      {
        name: "HINDHUPUR",
        address:
          "#18-2-57,1 st Floor,Chalapathi Enclave, Near Parigi Bus stop,HINDHUPUR–515201",
        phone: "7075811168",
        email: "bmhpg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.0945664417545!2d77.49202277512!3d13.833359745399902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1a3a3337c8e31%3A0xf06fcd810b329240!2sAPSRTC%20BUS%20STAND%20%2C%20HINDUPUR!5e0!3m2!1sen!2sin!4v1705561997328!5m2!1sen!2sin",
      },
      {
        name: "GOOTY",
        address:
          "D.no: 8/406, ,Near Honda showroom, Ananthapur Road, Gooty -515401",
        phone: "7075111952",
        email: "bmgyg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123374.7076477369!2d77.1154593972656!3d14.91146540000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb695cc228fec03%3A0x3f6d265b72c399bf!2sDhanvi%20Honda!5e0!3m2!1sen!2sin!4v1705562210977!5m2!1sen!2sin",
      },
      {
        name: "DHONE",
        address:
          "#18-2-57,1 st Floor,Chalapathi Enclave, Near Parigi Bus stop,HINDHUPUR–515201",
        phone: "79953 99942",
        email: "bmdhg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.60950151746!2d77.87442362359772!3d15.39762069180906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb68103acc06e2f%3A0x5cad3dea4ebc76bb!2sHDFC%20Bank!5e0!3m2!1sen!2sin!4v1705562416396!5m2!1sen!2sin",
      },
      {
        name: "TADIPATRI",
        address: "# 15/391 ,First floor , Near Ashok piller Tadipatri – 515411",
        phone: "8712 655 665",
        email: "bmtug@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.4903529033536!2d78.00258142513557!3d14.90974986943302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb41d549cfa9485%3A0x6c3205356a2c791c!2sAshok%20pillar!5e0!3m2!1sen!2sin!4v1705562566656!5m2!1sen!2sin",
      },
      {
        name: "RAYACHOTI",
        address:
          "D.no: 39/107-187, Groundfloor, Main Road, Opp. Sai Baba Temple, Annamayya,Rayachoti -516269 ",
        phone: "9515999062",
        email: " bmrcg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1976196.6128574489!2d75.15298395624997!3d14.669613200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ae96b2afafb%3A0xbdc81a7bf3c6af4d!2sSai%20Baba%20Temple!5e0!3m2!1sen!2sin!4v1705562711488!5m2!1sen!2sin",
      },
      {
        name: "RAYADURGAM",
        address:
          "#9-2-30,Lakshmi Bazar , Anantapur Main Road , Near By APGB Bank ,Rayadurgam – 515865",
        phone: "9866721133",
        email: "bmrdg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.5054637018366!2d77.57737317513217!3d14.683983875029714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14ab9e51feda3%3A0x8aa028c18b2115af!2sAndhra%20Pragathi%20Grameena%20Bank!5e0!3m2!1sen!2sin!4v1705562867177!5m2!1sen!2sin",
      },
      {
        name: "PUNGANUR",
        address:
          "# 01 , Raju road Complex, Ground floor,Opp IOB Bank, Near RTC Bus stand Road,Punganur - 517247 ",
        phone: "89770 14549",
        email: " bmpug@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.710072568846!2d78.56768777511358!3d13.368295306056938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb27eac38e63e63%3A0x286fc3a6eb94098a!2sIndian%20Overseas%20Bank!5e0!3m2!1sen!2sin!4v1705562993676!5m2!1sen!2sin",
      },
      {
        name: "PALAMANER",
        address:
          "#27-148&amp;149 , 1St Floor , Bazaar Street , New Pet , Opposite ramurthy sweet shop , Palamaner , Chittor– 517408",
        phone: "7075733351",
        email: "bmpng@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.3532891660443!2d78.74179367511148!3d13.203122259759931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad7eaa86bfb845%3A0x98e9e9165e15b7dd!2sRammurthy%20Sweet%20Stall!5e0!3m2!1sen!2sin!4v1705563135048!5m2!1sen!2sin",
      },
      {
        name: "DHARMAVARAM",
        address:
          "DR NO 22-503 , Sub Jail Opposite , Yadhava Street Main Road, DHARMAVARAM - 515671",
        phone: "70755 57854",
        email: " bmdvm@kanakadurgagoldloans.com ",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.3588270577307!2d77.7073602751281!3d14.40646678180014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14372a4584f3d%3A0x45f75678a134f32d!2sYadava%20St%2C%20Parthasaradhi%20Nagar%2C%20Dharmavaram%2C%20Andhra%20Pradesh%20515671!5e0!3m2!1sen!2sin!4v1705563402208!5m2!1sen!2sin",
      },
      {
        name: "BANGARPALYAM",
        address: "#1-123, 1st floor, Chandra complex , Bangarupalyam - 517416",
        phone: "87126 94112",
        email: "bmbpg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7768.9391645337655!2d78.90803574175118!3d13.195808544144061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad6412f3bb1395%3A0x3194852131bdcc8a!2sBangarupalem%2C%20Andhra%20Pradesh%20517416!5e0!3m2!1sen!2sin!4v1705563571348!5m2!1sen!2sin",
      },
      {
        name: "ADONI",
        address:
          "# 15/478 ,City Press Compound , GH Road , OPP Indian Bank ADONI – 518301",
        phone: "7995399957",
        email: "bmadg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7684.838948949094!2d77.27044198812195!3d15.62263548248631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb64dc3cac784c3%3A0x737655284822ba28!2sIndian%20Bank!5e0!3m2!1sen!2sin!4v1705563730435!5m2!1sen!2sin",
      },
      {
        name: "Tuni",
        address:
          "D.no:6-7-21/8, first floor, Sai Complex, Opp Viveka Junior College, Balaji Road,Tuni -533401",
        phone: "9121068612",
        email: "bmtni@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.126849348078!2d82.54440667517669!3d17.357628103661742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39c7eea2b2a009%3A0xb437e71411cfcdd0!2sViveka%20Junior%20College!5e0!3m2!1sen!2sin!4v1705563876015!5m2!1sen!2sin",
      },
      {
        name: "Vizianagaram",
        address:
          "# 18-2-1 , 1 St Floor ,PVS Prime , AG Road , 3 Lanthars Center , Vizianagaram – 535003",
        phone: "7075711190",
        email: "bmvzg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.092951437578!2d83.41045282519094!3d18.113498281482034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be5f48adf92c7%3A0x336729dec3bc3fc8!2sPVS%20Prime!5e0!3m2!1sen!2sin!4v1705573020244!5m2!1sen!2sin",
      },
      {
        name: "Narsipatnam",
        address:
          "#15-179 , Opp Heritage Super Market, Anakapalli Road , Narsipatnam – 531116",
        phone: "7995399974",
        email: "bmnpg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243290.21562541655!2d82.6427884610082!3d17.678099511798933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a399310c52c1a35%3A0xa18d78000c351bfd!2sHeritage%20super%20market!5e0!3m2!1sen!2sin!4v1705578593969!5m2!1sen!2sin",
      },
      {
        name: "Visakapatnam , Arilova",
        address:
          "#13-791/4 , BC Colony, Balaji Nagar Near Durgamma Temple , Arilova , Visakapatnam– 530040",
        phone: "7995399973",
        email: "bmvag@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60787.83444658001!2d83.22396715183775!3d17.780430525682927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3942cb54eb7bf9%3A0x28c5b0e551d42e46!2sDurgamma%20Temple!5e0!3m2!1sen!2sin!4v1705578800455!5m2!1sen!2sin",
      },
      {
        name: "YEMMIGANUR",
        address:
          "# 3510-1-6 , First floor Adoni bypass road Thippanna goud complex Yemmiganur-518360",
        phone: "87126 02453",
        email: "bmygg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61437.27244480124!2d77.40502587535019!3d15.76015490405245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb640b7e5b33137%3A0x5be3c77457872586!2sYemmiganur%2C%20Andhra%20Pradesh%20518360!5e0!3m2!1sen!2sin!4v1705578982816!5m2!1sen!2sin",
      },
      {
        name: "VENKATAGIRI KOTA",
        address:
          "#1-238/1,R.K.Complex, Opp:C.V.R.M Degree college, Long Bazzar, Venkatagiri kota- 517424",
        phone: "87126 02453",
        email: "bmvkg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.516136511737!2d78.48459007510891!3d13.002770214193973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad99f0b2a70e73%3A0x8bafdc2a3b485331!2sCVRM%20Degree%20College!5e0!3m2!1sen!2sin!4v1705579109056!5m2!1sen!2sin",
      },
      {
        name: "URAVAKONDA",
        address:
          "D.no: 10-99, APSRTC, Main Road, Near HDFC Bank, Ananthapuram,Uravakonda -515812",
        phone: "9573999826",
        email: "bmukg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246720.59707379315!2d76.95095589453125!3d14.936573600000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb6d93b8cce6629%3A0x63570cb896bb6774!2sAPSRTC%20BUS%20STAND%20%2C%20URAVAKONDA!5e0!3m2!1sen!2sin!4v1705579268895!5m2!1sen!2sin",
      },
      {
        name: "PILERU",
        address:
          "Block No.2 #543-2, first floor, Tirupathi Road, Pileru-517214",
        phone: "7702826569",
        email: "bmplg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.2620314653673!2d78.51852517511651!3d13.580796501229669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2e4410c31c761%3A0xb148f06a5d2833c6!2sTirupati%20Rd!5e0!3m2!1sen!2sin!4v1705579449561!5m2!1sen!2sin",
      },
      {
        name: "KOYALAGUDEM",
        address:
          "#10-140 , 1 St Floor , Kannapuram Road Beside Vasavi kanyakaParameswari temple KOYALAGUDEM – 534312",
        phone: "70757 33385",
        email: "bmkgm@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61005.971666537785!2d81.31928194868425!3d17.127682007377118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a36ff4ab76cfd45%3A0xbb0639c7750f2b48!2sSri%20Vasavi%20Kanyaka%20Parameshwari%20Temple!5e0!3m2!1sen!2sin!4v1705579552327!5m2!1sen!2sin",
      },
      {
        name: "DHEVARAPALLI",
        address:
          "DR NO 11/6 , 1 St Floor , Opposite Busstop , DHEVARAPALLI – 534313",
        phone: "70758 33351",
        email: "bmdvp@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15259.101075808017!2d81.5423780871582!3d17.034689899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37ab9d09487f67%3A0x4662b350e716bdf8!2sDevarapalli%20Bus%20Stop!5e0!3m2!1sen!2sin!4v1705579710983!5m2!1sen!2sin",
      },
      {
        name: "NIDADHAVOLU",
        address:
          "DR NO :10-11-5/2 , 1 st Floor, Ganesh Chowk Center , Near Ravindra bharathi school -534301",
        phone: "70754 66682",
        email: "bmndd@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3817.34657633159!2d81.66932452516865!3d16.908188016433037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b014e9cc5e77%3A0x8d71052a01bc54b3!2sRavindra%20Bharathi%20Schools!5e0!3m2!1sen!2sin!4v1705579859119!5m2!1sen!2sin",
      },
      {
        name: "MALKIPURAM",
        address:
          "#3-346 , 1 st Floor , Padmaja Theatre Road , Opp AFDT Collage Ground, Malkipuram - 533253",
        phone: "9100077125",
        email: "bmmkg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.198808126443!2d81.80410517516!3d16.41472643009602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37df4d72e751bb%3A0x931afabe217ffb56!2sPadmaja%20Theatre%20A%2FC!5e0!3m2!1sen!2sin!4v1705580014250!5m2!1sen!2sin",
      },
      {
        name: "Ravulapalem",
        address:
          "# 8-2207 , 1 ST floor , Dwaraka Complex ,Opp Bus Stop , Beside Victory Garden Resturent , Ravulapalem – 533238",
        phone: "7075711150",
        email: "bmrvg@kanakadurgagoldloans.com",
        mapSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.301163094786!2d81.83869767495611!3d16.761685661586387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37bf8d8350ee13%3A0xe1b2672c0914c15d!2sVictory%20Garden%20Restaurant!5e0!3m2!1sen!2sin!4v1705580149951!5m2!1sen!2sin",
      },
    ],
  },
];

const App = () => (
  <div>
    <BranchDetails branches={branchesData} />
  </div>
);

export default App;
