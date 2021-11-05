import React from 'react';
import {Link} from 'react-router-dom';


const Footer = () =>{
    return (
        <div>
  <footer>
    <div className="footer-row1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="email-subs">
              <h3>Get New Insights Weekly</h3>
              {/* <p>News letter dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Enter your email</p> */}
            </div>
          </div>
          <div className="col-lg-6 v-center">
            <div className="email-subs-form">
              <form>
                <input type="email" placeholder="Email Your Address" name="emails" />
                <button type="submit" name="submit" className="lnk btn-main bg-btn">Subscribe <i className="fas fa-chevron-right fa-icon" /><span className="circle" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-row2">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-sm-6  ftr-brand-pp">
            <a className="navbar-brand mt30 mb25" href="#"> <img src="/asset/images/white-logo.png" alt="SKYLIGHT" width={100} /></a>
            <p>
            Our mission is to help companies success and expand their technological capabilities. 
            We help companies become innovative leaders by providing on-demand products as needed.


            </p>
            <a href="#" className="btn-main bg-btn3 lnk mt20">Let's Get You Started <i className="fas fa-chevron-right fa-icon" /><span className="circle" /></a>
          </div>
          <div className="col-lg-3 col-sm-6">
            <h5>Contact Us</h5>
            <ul className="footer-address-list ftr-details">
              <li>
                <span><i className="fas fa-envelope" /></span>
                <p>Email <span> <a href="mailto:info@skylightnet.com">info@skylightnet.com</a></span></p>
              </li>
              <li>
                <span><i className="fas fa-phone-alt" /></span>
                <p>Phone <span> <a href="tel:2347085504774">+2347085504774</a></span></p>
              </li>
              <li>
                <span><i className="fas fa-map-marker-alt" /></span>
                <p>Address <span> 10 janre ,Ebuegbune street, Ajao estate. Isolo Lagos</span></p>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-sm-6">
            <h5>Company</h5>
            <ul className="footer-address-list link-hover">
              <li><Link to="/about-us">About Us</Link></li>
              <li><a href="javascript:void(0)">Customer's FAQ</a></li>
              <li><a href="javascript:void(0)">Refund Policy</a></li>
              <li><a href="javascript:void(0)">Privacy Policy</a></li>
              <li><a href="javascript:void(0)">Terms and Conditions</a></li>
              <li><a href="javascript:void(0)">License &amp; Copyright</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-sm-6 footer-blog-">
            <h5>Products</h5>
            <div className="single-blog-">
              <div className="post-thumb"><a href="#"><img src="/asset/images/products/ip.jpg" alt="CCTV Camera" /></a></div>
              <div className="content">
                <h4 className="title"><a href="#">Lechange Cue indoor security camera</a></h4>
              </div>
            </div>
            <div className="single-blog-">
              <div className="post-thumb"><a href="#"><img src="/asset/images/products/cctv.jpg" alt="blog" /></a></div>
              <div className="content">
                <h4 className="title"><a href="#">Amaryllo iCam HD Wifi Robot Camera</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* BRAND */}
    
    <div className="footer-row3">
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-social-media-icons">
                <a href="javascript:void(0)" target="blank"><i className="fab fa-facebook" /></a>
                <a href="javascript:void(0)" target="blank"><i className="fab fa-twitter" /></a>
                <a href="javascript:void(0)" target="blank"><i className="fab fa-instagram" /></a>
                <a href="javascript:void(0)" target="blank"><i className="fab fa-linkedin" /></a>
                <a href="javascript:void(0)" target="blank"><i className="fab fa-youtube" /></a>
              </div>
              <div className="footer-">
                <p>Copyright © 2020 skylightnet. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/*End Footer*/}
  {/*scroll to top*/}
  <a id="scrollUp" href="#top" />
</div>

    )
}


export default Footer;