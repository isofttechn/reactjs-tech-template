import React from 'react';
import {Link} from 'react-router-dom';
import ApiDev from '../../Home/Slider/ApiDev';


const ApiIntegrationServices = () =>{
    return(
  <div>

        {/*Breadcrumb Area*/}
  <section className="breadcrumb-areav2" data-background="/asset/images/banner/8.jpg">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="bread-titlev2">
            <h1 style=
            {{fontSize: '40PX',
             fontFamily:'CircularStd',
             fontWeight:'700',
             boxSizing:'border-box'
             }} className="wow fadeInUp" data-wow-delay=".2s">
                API <span>integration services</span>
                 to get systems and apps to work together
            </h1>
            <p style={{fontSize:'21px'}} className="mt20 wow fadeInUp" data-wow-delay=".4s">
            Cut down development time and costs by integrating third-party API platforms &amp; systems
            </p>
            <a href="#" className="btn-main bg-btn2 lnk mt20 wow zoomInDown" data-wow-delay=".6s">Get Quote <i className="fas fa-chevron-right fa-icon" /><span className="circle" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Hero*/}



  {/*Start About*/}
  {/* <section className="service pad-tb bg-gradient5">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="image-block wow fadeIn">
            <img src="/asset/images/service/service-img-3.png" alt="image" className="img-fluid no-shadow" />
          </div>
        </div>
        <div className="col-lg-8 block-1">
          <div className="common-heading text-l pl25">
            
            <h2> Web application development service</h2>
            <p>
            Our web application development service includes everything from a simple CMS enabled website to developing 
            powerful progressive web apps, custom business applications, e-commerce portals, and saas applications.
            </p>
          </div>
        </div>
      </div>
    </div> */}

    {/*Start Tech*/}
    {/* <div className="techonology-used-">
    <div className="container">
      <ul className="h-scroll tech-icons">
        <li><a href="#"><img src="/asset/images/icons/stack-icon1.png" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/stack-icon2.png" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/stack-icon3.png" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/stack-icon4.png" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/stack-icon5.png" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/stack-icon6.png" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/stack-icon7.png" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/stack-icon8.png" alt="icon" /></a></li>
      </ul>
    </div>
  </div>
  </section> */}
  {/*End About*/}
 

      {/*Start Slider*/}
  <section className="service pad-tb">
    <div className="container">
      <ApiDev/>
    </div>
  </section>
  {/*End Slider*/}


   {/*Start Why Choose*/}
   <section className="service-block pad-tb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="common-heading ptag">
            <h2>Custom API Offerings</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/apis/integration-service.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>API Integration Services</h4>
              <p>
              Integrate existing business systems or third-party APIs to harness data and feature sharing in your applications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/apis/scustom-api-dev-services.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              Custom API Development Services
              </h4>
              <p>
                  Custom APIs securely extend the functionality of your application with new and existing third-party systems and devices.
            </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/icon-progressive-web.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                  API as a Service
            </h4>
              <p>
              Build an API first business by building APIs as a Service (APIaaS) targetting common web protocols including HTTP/HTTPS, XML, JSON, REST, SOAP.
            </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/icon-backend-node-js.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              Automated API Testing Services
            </h4>
            <p>
              We use Unit testing, Functional testing, and Load testing to check the performance of individual APIs, end to end functionality, and performance of API layers.
            </p>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/apis/scloud-app.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              Cloud Integration Services
            </h4>
              <p>
              Connect applications and data across multiple clouds by building API layers for business services using Mulesoft, Azure, Dell Boomi, etc.
            </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.7s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/scustomweb-app-enterprises.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              Microservices Consulting Services
            </h4>
              <p>
              Break monolithic applications into a suite of microservices so that each service is configured to run as a unique process and can be changed independently.
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-cta-btn mt70">
        <div className="free-cta-title v-center wow zoomInDown" data-wow-delay="1.8s">
          <p>Let's Start a <span>New Project</span> Together</p>
          <Link to="/get-quote" className="btn-main bg-btn2 lnk">Inquire Now
          <i className="fas fa-chevron-right fa-icon" />
          <span className="circle" />
          </Link>
        </div>
      </div> 
    </div>
  </section>
  {/*End Why Choose*/}
{/*Start Why Choose*/}
<section className="service-block pad-tb ">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="common-heading ptag">
        
          <h2>
          How we develop
          web apps using Agile

          </h2>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-3 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><img src="/asset/images/icons/teama.svg" alt="service" className="img-fluid" /></div>
          <div className="s-block-content">
            <h4>Sprint planning</h4>
            <p>
            Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><img src="/asset/images/icons/link.svg" alt="service" className="img-fluid" /></div>
          <div className="s-block-content">
            <h4>Tech architecture</h4>
            <p>
            We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><img src="/asset/images/icons/tech.svg" alt="service" className="img-fluid" /></div>
          <div className="s-block-content">
            <h4>
            Stand-ups 
            </h4>
            <p>
            Stand ups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><img src="/asset/images/icons/hi.svg" alt="service" className="img-fluid" /></div>
          <div className="s-block-content">
            <h4>
            Code reviews
            </h4>
            <p>
            Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="-cta-btn mt70">
      <div className="free-cta-title v-center wow zoomInDown" data-wow-delay="1.8s">
        <p>Let's Start a <span>New Project</span> Together</p>
        <Link to="/get-quote" className="btn-main bg-btn2 lnk">Inquire Now
        <i className="fas fa-chevron-right fa-icon" />
        <span className="circle" />
        </Link>
      </div>
    </div> */}

  </div>
</section>
{/*End Why Choose*/}

{/*Start work-category*/}
<section className="work-category pad-tb">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="common-heading ptag">
          <span>We Have Worked Across Multiple Industries</span>
          <h2>Industries We Serve</h2>
        </div>
      </div>
    </div>
    <div className="row mt30">
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.3s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/travel-case.svg" alt="img" /> <h6>Software</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.5s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/video-tutorials.svg" alt="img" /> <h6>Education</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.7s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/taxi.svg" alt="img" /> <h6>Transport</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="0.9s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/event.svg" alt="img" /> <h6>Retail</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.1s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/smartphone.svg" alt="img" /> <h6>eCommerce</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.3s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/mobile-app.svg" alt="img" /> <h6>Manufacturing</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.5s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/healthcare.svg" alt="img" /> <h6>Sports</h6> </div></div>
      <div className="col-lg-3 col-sm-6 col-6 wow fadeIn" data-wow-delay="1.7s"> <div className="industry-workfor hoshd"><img src="/asset/images/icons/money-growth.svg" alt="img" /> <h6>Finance</h6> </div></div>
    </div>
  </div>
</section>
{/*End  work-category*/}


 {/*Start Faqs*/}
<section className="pad-tb">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="common-heading">
          <h2 className="mb0">FAQS</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 mt60">
        <div id="accordion" className="accordion">
          <div className="card-1">
            <div className="card-header" id="faq1">
              <button className="btn btn-link btn-block text-left card-title" type="button" data-toggle="collapse" data-target="#collapse-a" aria-expanded="true" aria-controls="collapse-a">
              What are custom APIs? Why do I need them?
              </button>
            </div>
            <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">
            <p>
            Custom APIs allow businesses to manage software-to-software integration between different apps smoothly. For example, the ability to share your favorite Spotify song on Instagram stories is due to the power of custom APIs. It has alleviated the way we assemble our applications. By making use of one another’s functionality, apps have enhanced the way they communicate with each other. In modern app development services, custom APIs play an important role since they allow us to innovate faster.
          </p>

         <p>
          In general, businesses have their own specific requirements. Using the readily available APIs won’t be sufficient to cater to their own unique integration needs. This is where businesses are required to develop custom APIs that fits their requirement and helps in better product development.
        </p>
        </div>
          </div>

          <div className="card-1">
            <div className="card-header" id="faq2">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="true" aria-controls="collapse-b">
              What is a 3rd Party API integration?
              </button>
            </div>
            <div id="collapse-b" className="card-body collapse " aria-labelledby="faq2" data-parent="#accordion">
            
            <p>
            The 3rd party API integration is the integration of APIs developed by a 3rd party (Facebook, Twitter) in one's custom software to gain partial access to services, features or functionalities for better business process.
            </p>

            <p>
            A 3rd party API is an API developed by a 3rd party. By integrating these APIs, 1st parties can gain partial access to the features and functionalities of 3rd party services. Next time when you book an Uber, take a close look at the Maps. These maps are available due to the 3rd party integration of Google Maps API with Uber.
            </p>
              
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq3">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
              What are the types of API?
              </button>
            </div>
            <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
              <p>
              There are 7 types of APIs, however, the most commonly used are web services APIs. These are a piece of a software or system available that provides access to its services through a dedicated URL over the internet. These types of APIs pass the information in a way that is easy for other software to understand or parse. For example, Flicker API http://www.flickr.com/services/api/.
            </p>

            <p>
            Web service APIs uses HTTP or HTTPS for information exchange. Whenever the client software wants to communicate, it sends an HTTP request which is returned with a HTTP response from the API. During these requests, the information is passed in the URL itself. The common types of web services API are
            </p>
           
            <p> - SOAP</p>
            <p>- XML-RPC </p>
            <p>- REST </p>
            <p>- JSON-RPC</p>

            <p>
            However, the widely used web service API is REST. REST APIs are known for providing faster communication due to less usage of internet bandwidth.
            </p>
            
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mt60">
        <div id="accordion2" className="accordion">
          <div className="card-1 bg-gradient">
            <div className="card-header" id="faq4">
              <button className="btn btn-link btn-block text-left card-title" type="button" data-toggle="collapse" data-target="#collapse-d" aria-expanded="true" aria-controls="collapse-d">
              What is your API development process?
              </button>
            </div>
            <div id="collapse-d" className="card-body collapse show" aria-labelledby="faq4" data-parent="#accordion2">
              <p>
              To deliver API development services with the user-centric approach, we have divided the whole process into simple steps:
            </p>

            <p>
            1: Understand the API’s purpose and audience </p>
            <p> 2: Align your Team</p>
            <p>3: Develop your API Incrementally</p>
            <p>4: Define KPIs</p>
            <p>5: Collecting and Acting on Feedback</p>
            <p>6: Marketing the API</p>
              
            </div>
          </div>
          <div className="card-1 bg-gradient">
            <div className="card-header" id="faq5">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-e" aria-expanded="true" aria-controls="collapse-e">
              How do you make working remotely successful?
              </button>
            </div>
            <div id="collapse-e" className="card-body collapse" aria-labelledby="faq5" data-parent="#accordion2">
            <p>Managing a remote team is not easy. There are critical mistakes you can make when trying to leverage the vast amounts of remote talent.</p>

            <p>
            Skylight team integrates into your team, participating in standup and scrum meetings, weekly demos, weekly retrospectives.
            </p>

            <p>
            Daily stand-ups - We do daily stand-ups where everyone gets on a video chat and tells you what they are working on that day and the previous day.
            </p>

            <p>
            Weekly demonstrations - This one is simple: get everybody on a video chat, share screens, have people show their work, and then talk about it.
            </p>

            <p>
            Weekly Retrospectives - A weekly retrospective is where you all collectively review what went well and what could have been improved based on the demo.
            </p>
            
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*End Faqs*/}


</div>

    )
}

export default ApiIntegrationServices;