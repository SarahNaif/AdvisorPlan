
/* ========= Import Statments  ==========*/
import API_URL from './apiConfig'
import { React, useState, useEffect } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import { Button } from 'react-bootstrap';

//component & pages 
import Home from "./Pages/Home";
import SignUp from "./components/Register/SignUp";
import Message from "./components/Register/Message";
import Login from "./components/Register/Login";
import Reset from "./components/Register/Reset";
import ResetEmail from "./components/Register/ResetEmail";
import Profile from "./Pages/Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Package from "./components/PackagePage/Package";
import PackageDetails from "./components/PackagePage/PackageDetails";
import ChangePassword from './components/Profile/ChangePassword';
import MyCards from './components/payment/MyCard';
import Appointments from "./Pages/Appointments";
import ConsultationForm from "./components/Forms/ConsultationForm";
import FeasibilityStudyForm from "./components/Forms/FeasibilityStudyForm";
import Thankyou from './Pages/Thankyou';
import UserPackageDetails from './components/Profile/UserPackageDetails';


/*  ================================= */

function App() {

  //use State for authentication
  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });


  //use State for exchange information
  const [loginLoading, setLoginloading] = useState(false)
  const [packageLoading, setPackageloading] = useState(false)
  const [packages, setPackage] = useState([])
  const [currentUserSerInfo, setUserInfo] = useState({ _id: "" });

  const userInfo = JSON.parse(localStorage.getItem("userInfo"))

  //------------------------------------- all packages ------------------------------------- 

  useEffect(() => {
    axios.get(`${API_URL}/api/package/all`)
      .then((req) => {
        // console.log("packages :", req.data.packages)
        setPackage(req.data.packages)
        // title ,NumOfMeeting ,price ,decription ,services
      })
      setPackageloading(true)
  }, [])


  //-------------------- authentication user ----------------------- 
  const userLogin = () => {
    if (localStorage.jwtToken) { //if you found jwtToken in localStorage do that 
      //just for write clear code
      const jwtToken = localStorage.jwtToken;
      setUserInfo(JSON.parse(localStorage.userInfo))
      setAuth({ currentUser: JSON.parse(localStorage.userInfo), isLoggedIn: true });
      console.log("The current User is in local storge in if : ", auth.currentUser);
    } else { //else you not found jwtToken in localStorage setAuth() as 
      setAuth({ currentUser: null, isLoggedIn: false });
    }
    console.log("The current User is in local storge out if  : ", auth.currentUser);
    setLoginloading(true)
  };

  useEffect(userLogin, []);


  // isLoggedIn : check user validation
  // loginCallback : 
  // currentUser : info of current user 
  // setUserInfo : when login take user info 

  return (
    <>
      { (loginLoading && packageLoading) &&
        <>
          {/* NavBar */}

          < Router >
            <NavBar
              isLoggedIn={auth.isLoggedIn}
              loginCallback={userLogin}
              currentUser={currentUserSerInfo}
            />
            {/*  */}
            <Route exact path="/services">
           
            </Route>
            <Route exact path="/resetPassword">
              <ResetEmail />
            </Route>

            <Route exact path="/Message">
              <Message />
            </Route>

            <Route exact path="/resetPassword/redirect/:userId/:userToken">
              <Reset />
            </Route>

            <Route exact path="/login">
              <Login
                setUserInfo={setUserInfo}
                loginCallback={userLogin}
              />
            </Route>

            <Route exact path="/signup">
              <SignUp
                setUserInfo={setUserInfo}
                loginCallback={userLogin}
              />
            </Route>

            <Route exact path="/">
              <Home
                isLoggedIn={auth.isLoggedIn}
                loginCallback={userLogin}
              />
            </Route>

            <Route exact path="/services/:NumOfMeeting/consultation/new">
              <ConsultationForm />
            </Route>

            <Route exact path="/services/:NumOfMeeting/FeasibilityStudy/new">
              <FeasibilityStudyForm />
            </Route>

            <Route exact path="/Profile">
              <Profile 
              userInfo={userInfo} 
              packages={packages}
              />
            </Route>

            <Route exact path="/changepassword">
              <ChangePassword />
            </Route>

            <Route exact path="/Packages">
              <Package packages={packages} />
            </Route>

            <Route exact path="/Packages/:id">
              <PackageDetails 
              packages={packages}
              isLoggedIn={auth.isLoggedIn}
               />
            </Route>

            <Route exact path="/packages/:id/pay">
              <MyCards />
            </Route>

            <Route exact path="/Thankyou">
              <Thankyou />
            </Route>
            <Route exact path="/UserPackageDetails">
              <UserPackageDetails />
            </Route>

            <Footer />
          </Router>

          {/* Footer */}
        </>
      }
    </>

  );
}

export default App;
