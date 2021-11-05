import React, { useState } from "react";
import {LoadingOutlined } from '@ant-design/icons';
import {toast } from 'react-toastify';


const Contact = () =>{
      //Create state for email
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    // const [services, setServices] = useState('')
    const [webServices, setWebServices] = useState('')
    const [mobileServices, setMobileServices] = useState('')
    const [networkSolution, setNetworkSolution] = useState('')
    const [securitySurveillanceCamera, setSecuritySurveillanceCamera] = useState('')
    const [electronicsDevices, setElectronicsDevices] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
        setLoading(true)
    setStatus("Sending...");

    const { name, email, phone, services, webServices, mobileServices, networkSolution, securitySurveillanceCamera, electronicsDevices, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      services: services.value,
      webServices: webServices.value,
      mobileServices: mobileServices.value,
      networkSolution: networkSolution.value,
      securitySurveillanceCamera: securitySurveillanceCamera.value,
      electronicsDevices: electronicsDevices.value,
      message: message.value,
    };

    let response = await fetch("https://skylightnet.org/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    toast(result.status);
    setLoading(false)
    
  };

   return(  
<div>
  {/*Breadcrumb Area*/}
  <section className="breadcrumb-area banner-6 section-nx">
    <div className="text-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 v-center">
            <div className="bread-inner">

              <div className="bread-title wow fadeInUp" data-wow-delay=".5s">
                <h2>Request A Quote</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Breadcrumb Area*/}
  {/*Start Enquire Form*/}
  <section className="contact-page pad-tb section-nx">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 v-center">
          <div className="common-heading text-l">
                        <span> <h2 className="mt0 mb0">Get A Quick Estimate</h2></span>
            <p className="mb60 mt20">We will catch you as early as we receive the message</p>

            {loading ? (<LoadingOutlined style={{fontSize: '35px', color: '#08c'}}/>) 
                    : (<h4 align="center"></h4>)}
          </div>
          <div className="form-block">
            <form onSubmit={handleSubmit} data-toggle="validator">
              <div className="messages" />
              <div className="fieldsets row">
                <div className="col-md-6 form-group">
                  <input id="name" type="text"
                   name="name" 
                   placeholder="Enter your name *" 
                   required="required" 
                   data-error="Name is required." 
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   />
                  <div className="help-block with-errors" /></div>
                <div className="col-md-6 form-group">
                  <input id="email" 
                  type="email" 
                  name="email" 
                  placeholder="Enter your email *" 
                  required="required" 
                  data-error="Valid email is required." 
                  value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="help-block with-errors" /></div>
              </div>
              <div className="fieldsets row">
                <div className="col-md-6 form-group">
                  <input 
                  id="phone" 
                  type="text" 
                  name="phone" 
                  placeholder="Enter your Phone No *" 
                  required="required" 
                  data-error="Phone No is required." 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <div className="help-block with-errors" /></div>
                <div className="col-md-6 form-group">
                  <select id="name" name="need" required="required" data-error="Specify your need.">
                    <option value>Select Service</option>
                    <option 
                    value={webServices} 
                    id="webServices"
                    onChange={(e) => setWebServices(e.target.value)}
                    >Web Services
                    </option>
                    <option 
                    value={mobileServices} 
                    id="mobileServices"
                    onChange={(e) => setMobileServices(e.target.value)}
                    >Mobile App Services
                    </option>
                    <option 
                    value={networkSolution} 
                    id="networkSolution"
                    onChange={(e) => setNetworkSolution(e.target.value)}
                    >Network Solution
                    </option>
                    <option 
                    value={securitySurveillanceCamera} 
                    id="securitySurveillanceCamera"
                    onChange={(e) => setSecuritySurveillanceCamera(e.target.value)}
                    >Security Surveillance Camera</option>
                    <option 
                    value={electronicsDevices} 
                    id="electronicsDevices"
                    onChange={(e) => setElectronicsDevices(e.target.value)}
                    >Electronics Devices Order</option>
                  </select>
                  <div className="help-block with-errors" /></div>
              </div>
              <div className="fieldsets form-group"> 
              <textarea id="message" 
              name="message" 
              placeholder="Message for me *" 
              rows={4} 
              required="required" 
              data-error="Please, leave us a message." 
              value={message}
              defaultValue={""} 
              onChange={(e) => setMessage(e.target.value)}
              />
                <div className="help-block with-errors" />
              </div>
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck" name="example1" defaultChecked="checked" />
                <label className="custom-control-label" htmlFor="customCheck">I agree to the <a href="javascript:void(0)">Terms &amp; Conditions</a> of Business Name.</label>
              </div>
              <div className="fieldsets mt20">
                <button 
                type="submit" 
                className="lnk btn-main bg-btn"
                onSubmit={handleSubmit}
                >Submit{status}<span className="circle dkpr" /></button>
              </div>
              <p className="trm"><i className="fas fa-lock" />We hate spam, and we respect your privacy.</p>
            </form>
          </div>
        </div>
        <div className="col-lg-5 v-center">
          <div className="contact-details">
            <div className="contact-card wow fadeIn" data-wow-delay=".2s">
              <div className="info-card v-center">
                <span><i className="fas fa-phone-alt" /> Phone:</span>
                <div className="info-body">
                  <p>Assistance hours: Monday – Friday, 9 am to 5 pm</p>
                  <a href="tel:+2347085504774">+2347085504774</a>
                </div>
              </div>
            </div>
            <div className="email-card mt30 wow fadeIn" data-wow-delay=".5s">
              <div className="info-card v-center">
                <span><i className="fas fa-envelope" /> Email:</span>
                <div className="info-body">
                  <p>Our support team will get back to in 24-h during standard business hours.</p>
                  <a href="mailto:support@skylightnet.com">support@skylightnet.com</a>
                </div>
              </div>
            </div>
            <div className="skype-card mt30 wow fadeIn" data-wow-delay=".9s">
              <div className="info-card v-center">
                <span><i className="fab fa-skype" /> Skype:</span>
                <div className="info-body">
                  <p>We Are Online: Monday – Friday, 9 am to 5 pm</p>
                  <a href="skype:skylightnet?call">skylightnet</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Enquire Form*/}
  {/*Start Location*/}

  {/*End Location*/}
</div>


    )
}

export default Contact;