import React, { useState} from 'react';
import { AppstoreOutlined, LogoutOutlined, SettingOutlined, UserAddOutlined, UserOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import firebase from 'firebase';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import HireDeveloper from '../../pages/contact/HireDeveloper';


// const { SubMenu, Item } = Menu;

const Header = () =>{
    const [current, setCurrent] = useState('home')
    let dispatch = useDispatch()
    let{ user} = useSelector((state) =>({ ...state }))
    let history = useHistory();

    const handleClick = (e) =>{
        setCurrent(e.key)
        // console.log(e)
    }

    const logout = () =>{
      firebase.auth().signOut()
      dispatch({
        type: 'LOGOUT',
        payload: null
      });
      history.push('/login')
    }

    return (
      <div>
       <header className="nav-bg-b main-header navfix fixed-top menu-white header-pr">
  <div className="container-fluid m-pad">
    <div className="menu-header">
      <div className="dsk-logo"><Link className="nav-brand" to="/">
          <img src="/asset/images/sklogo.png" alt="Skylight" className="mega-white-logo" />
          <img src="/asset/images/sklogo.png" alt="Skylight" className="mega-darks-logo" />
        </Link></div>
      <div className="custom-nav" role="navigation">
        <ul className="nav-list">
        <li className="sbmenu rpdropdown"><Link to="/about-us" className="menu-links">About Us</Link></li>

         <li className="sbmenu"><Link to="/services" className="menu-links">Services</Link>
            <div className="nx-dropdown">
              <div className="sub-menu-section">
                <div className="container">
                  <div className="sub-menu-center-block">
                    <div className="sub-menu-column">
                      <ul>
                      <li><Link to="/webpps">Web Services Solution</Link></li>
                        <li><Link to="/mobileappdev">Mobile Application Solution</Link></li>
                        <li><Link to="/api-integration-development">API Integration Services</Link></li>
                        <li><Link to="/custom-software-development">Custom software development services</Link></li>
                      </ul>
                    </div>
                    <div className="sub-menu-column">
                     <ul>
                      <li><Link to="/network-solution">Network Solution</Link></li>
                      <li><a target="_blank" href="https://executivemalls.com/">Security Surveillance Camera</a></li>
                      <li><Link to="/biometric-access-control">Biometric Access Control</Link> </li>
                      <li><a target="_blank" href="https://executivemalls.com/">Access Control Systems</a> </li>
                    </ul>
                    </div>

                    <div className="sub-menu-column">
                    <ul>
                      <li><Link to="/services/green-energy-solution">Green Energy Solution</Link> </li>
                      <li><a target="_blank" href="https://executivemalls.com/">Solar Installation &amp; Supply </a> </li>
                      <li><a target="_blank" href="https://executivemalls.com/">Electronics &amp; Computer Supply</a> </li>
                      <li><a target="_blank" href="https://executivemalls.com/">Sound System Supply</a> </li>
                    </ul>
                     
                    </div>
               
                    <div className="sub-menu-column">
                    <ul>
                        <li><Link to="/software-testing">Software testing services</Link> </li>
                        <li><Link to="/services/ecommerce-development">Ecommerce Development Services</Link> </li>
                        <li><a href="#">Process Improvement</a> </li>

                      </ul>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </li>


          <li className="sbmenu"><a href="#" className="menu-links">Hire</a>
            <div className="nx-dropdown">
              <div className="sub-menu-section">
                <div className="container">
                  <div className="sub-menu-center-block">
                    <div className="sub-menu-column">
                      <ul>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Hire Angular Developer</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Hire React Native Developer</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Hire Flutter Developer</a></li>
                      </ul>
                    </div>
                    <div className="sub-menu-column">
                      <ul>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Hire Nodejs Developer</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Hire Mobile App Developer</a> </li>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Hire PHP Developer</a> </li>
                        
                      </ul>
                    </div>
                    <div className="sub-menu-column">
                      <ul>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Hire Reactjs Developer</a> </li>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Dedicated Software Development Team</a> </li>
                       
                      </ul>
                    </div>
                    <div className="sub-menu-column">
                    <ul>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Hire Dedicated Developer</a> </li>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Hire Python Developer</a> </li>
                      </ul>
                     
                    </div>
               
                    <div className="sub-menu-column">
                    <ul>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Hire Ruby on Rails Developer</a> </li>
                        <li><a href="#" data-toggle="modal" data-target="#modalform-full">Hire ASP.NET Developer</a> </li>
                      </ul>
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </li>

  <li className="sbmenu rpdropdown"><Link to="/how-it-works" className="menu-links">How it Works</Link></li>
  {/* <li className="sbmenu rpdropdown"><a href="#" className="menu-links">Case Study</a></li> */}
{user &&
(<li className="sbmenu rpdropdown" key="SubMenu" icon={<SettingOutlined />}><a href="#" className="menu-links">Account</a>
  <div className="nx-dropdown menu-dorpdown">
    <div className="sub-menu-section"><div className="sub-menu-center-block">
        <div className="sub-menu-column smfull">
          <ul>
            <li><a href="#">{user.email && user.email.split('@')[0]}</a> </li>
            <li><a href="#">Profile</a> </li>
            <li><Link to="/skyadmin/dashboard">Dashboard</Link> </li>
            <li><a href="#" icon={<LogoutOutlined/>} onClick={logout}>Logout</a> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</li>
)}


          <li><a href="#" className="menu-links right-bddr">&nbsp;</a>
            {/*menu right border*/}
          </li><li className="contact-show"><a href="#" className="btn-round- trngl btn-br bg-btn"><i className="fas fa-phone-alt" /></a>
            <div className="contact-inquiry">
              <div className="contact-info-">
                <div className="contct-heading">Skylightnet Contacts</div>
                <div className="inquiry-card-nn hrbg">
                  <div className="title-inq-c">FOR NG LOCATION</div>
                  <ul><li className="mb0"><img src="/asset/images/flags/ng.png" alt="us office" className="flags-size" /> <a href="tel:2347085504774">+2347085504774</a></li></ul>
                </div>
                <div className="inquiry-card-nn">
                  <div className="title-inq-c">FOR GH LOCATION</div>
                  <ul><li><a href="tel:2347085504774"><img src="/asset/images/flags/gh.png" alt="us office" className="flags-size" /> +2347085504774</a></li>
                    <li><i className="fab fa-skype" /><a href="skype:isofttechn?call">skype</a></li>
                    <li><i className="fas fa-envelope" /><a href="mailto:info@skylightnet.com">info@skylightnet.com</a></li></ul>
                </div>
              </div>
            </div>
          </li>
          <li><Link to="/get-quote" className="btn-br bg-btn3 btshad-b2 lnk">Request A Quote <span className="circle" /></Link> </li>
        </ul>
      </div>
      
      <div className="mobile-menu2">
        <ul className="mob-nav2">
          <li><a href="#" className="btn-round- trngl btn-br bg-btn btshad-b1" data-toggle="modal" data-target="#menu-popup"><i className="fas fa-envelope-open-text" /></a></li>
          <li className="navm-"> <a className="toggle" href="#"><span /></a></li>
        </ul>
      </div>
    </div>

    {/*Mobile Menu*/}
    <nav id="main-nav">
      <ul className="first-nav">
      <li><a href="#">About Us</a></li>

        <li><a href="#">Services</a>
          <ul>
            <li><a href="#">AI/ML Development</a></li>
            <li><a href="#">Software Testing Service</a></li>
            <li><a href="#">Application Development Service</a></li>
            <li><a href="#">Mobile App Development Service</a></li>
            <li><a href="#">Web development</a></li>
            <li><a href="#">Software Product Development Service</a></li>
            <li><a href="#">  </a>API Integration Service</li>
            <li><a href="#">Ecommerce Development Service</a></li>
            <li><a href="#">Custom Software Services</a> </li>
            <li><a href="#">Enterprise Development Service</a></li>
            
          </ul>
        </li>
        
        <li><a href="#">Hire</a>
          <ul>
            <li><a href="#">Hire Angular Developer</a></li>
            <li><a href="#">Hire Nodejs Developer</a></li>
            <li><a href="#">Hire Reactjs</a></li>
            <li><a href="#">Hire Dedicated Developer</a></li>
            <li><a href="#">Hire Ruby on Rails Developer</a></li>
            <li><a href="#">Hire React Native Developer</a></li>
            <li><a href="#"></a>Hire Flutter Developer</li>
            <li><a href="#">Hire Custom Mobile Developer</a></li>
            <li><a href="#">Hire Python Developer</a> </li>
            <li><a href="#">Hire ASP.NET Developer</a></li>
            <li><a href="#">Hire PHP/Laravel Developer</a></li>

            
          </ul>
        </li>

        <li><a href="#">Case Study</a></li>
        <li><a href="#">How it Works</a></li>

      </ul>
      <ul className="bottom-nav">
        <li className="prb">
          <a href="tel:+2347085504774">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
              <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
		c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
		c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
		C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z" />
            </svg>
          </a>
        </li>
        <li className="prb">
          <a href="mailto:info@skylightnet.com">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
          </a>
        </li>
        <li className="prb">
          <a href="skype:isofttechn?call">
            <svg enableBackground="new 0 0 24 24" height={18} viewBox="0 0 24 24" width={18} xmlns="http://www.w3.org/2000/svg"><path d="m23.309 14.547c1.738-7.81-5.104-14.905-13.139-13.543-4.362-2.707-10.17.352-10.17 5.542 0 1.207.333 2.337.912 3.311-1.615 7.828 5.283 14.821 13.311 13.366 5.675 3.001 11.946-2.984 9.086-8.676zm-7.638 4.71c-2.108.867-5.577.872-7.676-.227-2.993-1.596-3.525-5.189-.943-5.189 1.946 0 1.33 2.269 3.295 3.194.902.417 2.841.46 3.968-.3 1.113-.745 1.011-1.917.406-2.477-1.603-1.48-6.19-.892-8.287-3.483-.911-1.124-1.083-3.107.037-4.545 1.952-2.512 7.68-2.665 10.143-.768 2.274 1.76 1.66 4.096-.175 4.096-2.207 0-1.047-2.888-4.61-2.888-2.583 0-3.599 1.837-1.78 2.731 2.466 1.225 8.75.816 8.75 5.603-.005 1.992-1.226 3.477-3.128 4.253z" /></svg>
          </a>
        </li>
      </ul>
    </nav>
    
  </div>
</header>

{/*Mobile contact*/}
<div className="popup-modal1">
  <div className="modal" id="menu-popup">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <div className="common-heading">
            <h4 className="mt0 mb0">Write a Message</h4>
          </div>
          <button type="button" className="closes" data-dismiss="modal">×</button></div>
        {/* Modal body */}
        <div className="modal-body">
          <div className="form-block fdgn2 mt10 mb10">
            <form action="#" method="post" name="feedback-form">
              <div className="fieldsets row">
                <div className="col-md-12"><input type="text" placeholder="Full Name" name="name" /></div>
                <div className="col-md-12"><input type="email" placeholder="Email Address" name="email" /></div>
                <div className="col-md-12"><input type="number" placeholder="Contact Number" name="phone" /></div>
                <div className="col-md-12"><input type="text" placeholder="Subject" name="subject" /></div>
                <div className="col-md-12"><textarea placeholder="Message" name="message" defaultValue={""} /></div>
              </div>
              <div className="fieldsets mt20 pb20">
                <button type="submit" name="submit" className="lnk btn-main bg-btn" data-dismiss="modal">Submit <i className="fas fa-chevron-right fa-icon" /><span className="circle" /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/*Mobile contact*/}

<div className="col-lg-6">
  {/*start Modal button */}
  {/* <a href="#" className="btn-main bg-btn2 lnk" data-toggle="modal" data-target="#modalform-full">Launch modal<i className="fas fa-chevron-right fa-icon" /><span className="circle" /></a> */}
  {/*end Modal button */}
  {/*start Modal html */}
    <HireDeveloper />
  {/*end Modal html  */}
</div>

</div>
    )

}



export default Header;
