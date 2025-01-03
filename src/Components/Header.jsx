import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import "./styles.css";
import "./Responsive.css";
import { CgMenu, CgProfile } from "react-icons/cg";
import AuthService from "./services/auth-service";
import "./Responsive.css";

function Header({ isLoggedIn, setIsLoggedIn, profileData, userData }) {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const RoleID = AuthService.getRoleId();

  const handleLogout = () => {
    console.log("LOGOUTT");
    setIsLoggedIn(false); // Reset logged in state
    // localStorage.removeItem("isLoggedIn");
    // localStorage.removeItem("profileData");
    localStorage.clear(); // Clear all local storage
    navigate("/"); // Navigate to home page after logout
  };

  // Function to determine profile link based on RoleID
  const getProfileLink = () => {
    switch (RoleID) {
      case "1":
        return <Link to="profile">My Profile</Link>;
      case "2":
        return <Link to="userprofile">My Profile</Link>;
      case "3":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "4":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "5":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "6":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "8":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "9":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "10":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "11":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "12":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "13":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "14":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "15":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "16":
        return <Link to="officeuserprofile">My Profile</Link>;
      case "17":
        return <Link to="officeuserprofile">My Profile</Link>;
      default:
        return null;
    }
  };
  // const toggleNav = () => {
  //   setIsNavOpen(!isNavOpen);
  // };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    document.querySelector("#nav-menu-container").classList.toggle("open");
};
const closeNav = () => {
  setIsNavOpen(false);
  document.querySelector("#nav-menu-container").classList.remove("open");
};



  // const toggleNav = () => {
  //   setIsNavOpen(!isNavOpen);
  //   document.querySelector("#nav-menu-container").classList.toggle("open");
  //   document.querySelectorAll(".menu-has-children").forEach((item) => {
  //     item.classList.toggle("active");
  //   });
  // };

  return (
    <header id="header">
      <div className="container-fluid">
        <div id="logo" className="pull-left">
          <img src="/img/Klogo.png" alt="logo" />
        </div>
        <button
          id="mobile-nav-toggle"
          className={isNavOpen ? "active" : ""}
          onClick={toggleNav}
        >
          <CgMenu />
        </button>
        <nav id="nav-menu-container" className={isNavOpen ? "open" : ""}>
          <ul className="nav-menu">
            <li>
              <Link to="/" onClick={closeNav}>Home</Link>
            </li>
            {/* Other menu items */}
            <li className="menu-has-children">
              <a href="#aboutpg1" >About Us</a>
              <ul>
                <li>
                  <Link to="overview" onClick={closeNav}>Overview</Link>
                </li>
                <li>
                  <Link to="visionmission" onClick={closeNav}>Vision &amp; Mission</Link>
                </li>
                <li>
                  <Link to="boardofdirectors" onClick={closeNav}>Board of Directors</Link>
                </li>
                <li>
                  <Link to="keymanagerialteam" onClick={closeNav}>Key Managerial Team</Link>
                </li>
              </ul>
            </li>
            <li className="menu-has-children">
              <a href="#services">Services</a>
              <ul>
                <li>
                  <Link to="commercialvehicles" onClick={closeNav}>Commercial Vehicles</Link>
                </li>
                <li>
                  <Link to="car" onClick={closeNav}>Car</Link>
                </li>
                <li>
                  <Link to="wheeler3" onClick={closeNav}>3 Wheeler</Link>
                </li>
                <li>
                  <Link to="wheeler2" onClick={closeNav}>2 Wheeler</Link>
                </li>
                <li>
                  <Link to="goldloan" onClick={closeNav}>Gold Loan</Link>
                </li>
              </ul>
            </li>
            <li className="menu-has-children">
              <a href="#investors">Investors</a>
              <ul>
                <li>
                  <Link to="annualreports" onClick={closeNav}>Annual Reports</Link>
                </li>
                <li>
                  <Link to="financialresults" onClick={closeNav}>Financial Results</Link>
                </li>
                <li>
                  <Link to="ourpartners" onClick={closeNav}>Our partners in Progress</Link>
                </li>
                <li>
                  <Link to="policies" onClick={closeNav}>Policies</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="network" onClick={closeNav}>Network</Link>
            </li>
            <li>
              <Link to="careers" onClick={closeNav}>CAREERS</Link>
            </li>
            <li>
              <Link to="contact" onClick={closeNav}>CONTACT US</Link>
            </li>

            {!isLoggedIn ? (
              <li>
                <Link to="/login" onClick={closeNav}>Login</Link>
              </li>
            ) : (
              <li className="menu-has-children">
                <a href="#profile">
                  {/* {profileData.user && (
                    <>
                      <b> */}
                  <CgProfile />
                  {/* </b> */}
                  <span className="profile-name">Hi, {userData}</span>
                  {/* </>
                  )} */}
                </a>
                <ul>
                  <li onClick={closeNav}>{getProfileLink()}</li>
                  
                  <li className="nav-link">
                    {/* <Link onClick={handleLogout} >Logout</Link> */}
                    <Link onClick={() => { handleLogout(); closeNav(); }}>Logout</Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
