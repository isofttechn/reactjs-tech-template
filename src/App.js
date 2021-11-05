import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import Header from './components/Nav/Header';
import Footer from './components/Nav/Footer';
import RegisterComplete from './pages/auth/RegisterComplete';
import ForgotPassword from './pages/auth/ForgotPassword';
import GetAQuote from './pages/contact/Contact';
import WebApplication from './pages/Services/Webs/WebApplication';
import MobileAppsDev from './pages/Services/MobileApps/MobileAppDev';
import Serivices from './pages/Services/Services';
import ApiIntegrationServices from './pages/Services/ApInt/ApiIntegrationServices';
import CustomSoftwareDev from './pages/Services/CustomSoftwareDev/CustomSoftwareDev';
import SoftwareTestingServices from './pages/Services/SoftwareTesting/SoftwareTestingServices';
import NetworkSolution from './pages/Services/NetworkSolution/NetworkSolution';
import BiometricAccessControl from './pages/Services/BiometricAccessControl/BiometricAccessControl';
import GreenEnergySolution from './pages/Services/GreenEnergy/GreenEnergySolution';
import EcommerceServices from './pages/Services/Ecommerce/EcommerceServices';
import HowItWorks from './pages/HowItWork/HowItWorks';

//ADMIN => USERS
import History from './pages/users/History'
import AdminDashboard from './pages/admin/AdminDashboard'
import UserRoute from './components/routes/UserRoute';

import AboutUs from './pages/About/About';

import Error from './pages/Error';


import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import {currentUser} from "./functions/auth";

import jQuery from 'jquery';
window.jQuery = jQuery;



const App = () =>{

const dispatch = useDispatch()

//Check Firebase Auth State
  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(async (user) =>{
      if(user){
        const idTokenResult = await user.getIdTokenResult();
        console.log("User", user)

          //Using Axios
          currentUser(idTokenResult.token)
          .then((res) => {
          dispatch({
              type: 'LOGGED_IN_USER',
              payload: {
              name: res.data.name,
              email: res.data.email,
              token: idTokenResult.token,
              role: res.data.role,
              _id: res.data._id,
              }
          });
          })
          .catch(err => console.log(err));

      }
    });
    //Clean Up
    return () => unsubscribe();

  }, [])

  return(
  <>
    <Header/>
    <ToastContainer/>
  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register/complete" component={RegisterComplete} />
      <Route exact path="/forgot/password" component={ForgotPassword} />
      <Route exact path="/get-quote" component={GetAQuote}/>
      <Route exact path="/services" component={Serivices}/>
      <Route exact path="/webpps" component={WebApplication}/>
      <Route exact path="/mobileappdev" component={MobileAppsDev}/>
      <Route exact path="/api-integration-development" component={ApiIntegrationServices}/>
      <Route exact path="/custom-software-development" component={CustomSoftwareDev}/>
      <Route exact path="/software-testing" component={SoftwareTestingServices}/>
      <Route exact path="/network-solution" component={NetworkSolution}/>
      <Route exact path="/biometric-access-control" component={BiometricAccessControl}/>
      <Route exact path="/biometric-access-control" component={BiometricAccessControl}/>
      <Route exact path="/services/green-energy-solution" component={GreenEnergySolution}/>
      <Route exact path="/services/ecommerce-development" component={EcommerceServices}/>
      <Route exact path="/how-it-works" component={HowItWorks}/>
      <Route exact path="/about-us" component={AboutUs}/>

    {/* ADMIN => USERS */}
    <Route exact path="/user/history" component={History}/>
    <UserRoute exact path="/skyadmin/dashboard" component={AdminDashboard}/>
    

      <Route component={Error} />

    </Switch>
    <Footer/>
 </>
  )
}
export default App;
