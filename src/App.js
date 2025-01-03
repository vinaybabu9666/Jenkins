import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Components/main";
import Icons from "./Components/Icons";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import Careers from "./Components/Careers";
import Overview from "./Components/Overview";
import Visionmission from "./Components/Visionmission";
import Boardofdirectors from "./Components/Boardofdirectors";
import Keymanagerialteam from "./Components/Keymanagerialteam";
import Commercialvehicles from "./Components/Commercialvehicles";
import Car from "./Components/Car";
import Wheeler3 from "./Components/Wheeler3";
import Goldloan from "./Components/Goldloan";
import Financialresults from "./Components/Financialresults";
import Wheeler2 from "./Components/Wheeler2";
import Ourpartners from "./Components/Ourpartners";
import Policies from "./Components/Policies";
import Annualreports from "./Components/Annualreports";
import Network from "./Components/Network";
import Login from "./Components/Authentication/Login";
import Logout from "./Components/Authentication/Logout";
import Signin from "./Components/Authentication/Signin";
import Signup from "./Components/Authentication/Signup";
import ForgotPassword from "./Components/Authentication/ForgotPassword";
import JsonData from "./data/data.json";
import Profile from "./Components/Profile";
import PrivateRoute from "./Components/Authentication/PrivateRoute";
import AuthService from "./Components/services/auth-service";
import UserProfile from "./Components/UserProfile";
import OfficeUserProfile from "./Components/OfficeUserProfile";
import Register from "./Components/Authentication/Register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize state from localStorage
    const savedLoginState = localStorage.getItem("isLoggedIn");
    return savedLoginState ? JSON.parse(savedLoginState) : false;
  });
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    setProfileData(JsonData);
    //console.log(JsonData,"jsondata");
  }, []);
  useEffect(() => {
    // Save login state to localStorage whenever it changes
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const userData = AuthService.getUserData();
  console.log("userData", userData);
  return (
    <div>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        profileData={profileData}
        userData={userData}
      />
      <Icons />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="careers" element={<Careers />} />
        <Route path="overview" element={<Overview />} />
        <Route path="visionmission" element={<Visionmission />} />
        <Route path="boardofdirectors" element={<Boardofdirectors />} />
        <Route path="keymanagerialteam" element={<Keymanagerialteam />} />
        <Route path="commercialvehicles" element={<Commercialvehicles />} />
        <Route path="car" element={<Car />} />
        <Route path="wheeler3" element={<Wheeler3 />} />
        <Route path="wheeler2" element={<Wheeler2 />} />
        <Route path="goldloan" element={<Goldloan />} />
        <Route path="financialresults" element={<Financialresults />} />
        <Route path="ourpartners" element={<Ourpartners />} />
        <Route path="policies" element={<Policies />} />
        <Route path="annualreports" element={<Annualreports />} />
        <Route path="/network" element={<Network />} />
        {/* <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} /> */}
        {/* <Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} /> */}
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/logout"
          element={<Logout setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/userprofile"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/officeuserprofile"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <OfficeUserProfile />
            </PrivateRoute>
          }
        />
        {/* <Route path="profile" element={<Profile data={profileData.Profile}/>} /> */}
        {/* // <Profile data={profileData.PolicyComponent}/> */}
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
