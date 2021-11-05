import React from 'react';
import {Link} from 'react-router-dom';
import Carousel from '../../Home/Slider/Carousel';


const WebApplication = () =>{
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
             }} className="wow fadeInUp" data-wow-delay=".2s">Web application development services using industry leading technologies</h1>
            <p style={{fontSize:'21px'}} className="mt20 wow fadeInUp" data-wow-delay=".4s">
            Harness the power of modern web frameworks to build progressive web apps that scale  
            </p>
            <a href="#" className="btn-main bg-btn2 lnk mt20 wow zoomInDown" data-wow-delay=".6s">Get Quote <i className="fas fa-chevron-right fa-icon" /><span className="circle" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Hero*/}



  {/*Start About*/}
  <section className="service pad-tb bg-gradient5">
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
    </div>

    {/*Start Tech*/}
    <div className="techonology-used-">
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
  {/*End Tech*/}
  </section>
  {/*End About*/}
 

      {/*Start Slider*/}
  <section className="service pad-tb">
    <div className="container">
      <Carousel/>
    </div>
  </section>
  {/*End Slider*/}


   {/*Start Why Choose*/}
   <section className="service-block pad-tb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="common-heading ptag">
            <h2>Custom web application development offerings</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/ServiceEnterpriseAaplication.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>SaaS Apps Development Services</h4>
              <p>Our SaaS consultants will help you build multi-tenant, secure, and robust SaaS solutions so that you can serve customers better.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/icon-react-js.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Front end Development Services</h4>
              <p>Build modern single page web applications using the reusable, dynamic, component driven architecture of React.js, Angular.js, Vue.js.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/icon-progressive-web.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Progressive Web Apps Development Services</h4>
              <p>Bring features and performance we expect from native apps to any browser and across platforms without any interruption or loss of speed.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/icon-backend-node-js.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Backend & Node.js Development Services</h4>
              <p>Our software architects design solid backend to accommodate scale, flexibility to integrate, advanced data structures, and cutting edge security.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/icon-ecommerce-web.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>E-commerce Web Apps Development Services</h4>
              <p>Using Wordpress, Shopify, Magento, and custom frameworks, we help you build e-shops and B2B eCommerce portals that boost your growth.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.7s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/scustomweb-app-enterprises.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Custom Web Apps Development for Enterprises</h4>
              <p>Get a performance boost across the organization by building web-based apps like inventory-, transport-, learning, and process management systems.</p>
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
              What types of web apps can you develop?
              </button>
            </div>
            <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">
            <p>
            Web applications are specific software designed in a way that it runs on a web browser with web specific resources. So far we’ve developed different types of web apps which vary from a small static web app to an ERP solution.
            <div className="niwax-list">
              <ul class="list-ul ul-numm ul-liin">
                <li>Static Web Apps</li>
                <li>Dynamic Web App</li>
                <li>Online Store</li>
                <li>Portal Web Apps</li>
                <li>Animated Web App</li>
              </ul>
            </div>

            </p>
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq2">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="true" aria-controls="collapse-b">
              How much does it cost to develop a web app?
              </button>
            </div>
            <div id="collapse-b" className="card-body collapse " aria-labelledby="faq2" data-parent="#accordion">
              <p>
              The cost of Web App development depends on many factors such as :</p>

               <p> Development platform - PWA, SaaS</p>

               <p> App categories - e-Commerce, Gaming, Entertainment, On-Demand Delivery</p>

                <p>
                  App Complexities - number of screens, limited data, need for API connection, admin console, user profiles
                  </p>

                <p>After having established these factors, we create a detailed description that includes user journeys, tech stack, project investment, and timeline. Contact us with your requirement to get the App development cost.
                What is the difference between Web App and SaaS?</p>

                <p>How does Progressive Web App work?</p>

                <p>What are the business benefits of Progressive Web Apps?</p>

              
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq3">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
              What is the difference between Web App and SaaS?
              </button>
            </div>
            <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
              <p>
              Web apps are exclusively designed to be used from a web browser. These are combinations of server-side script (ASP .NET, PHP, etc.) and client-side script (HTML, JavaScript, etc.). The web browser (thin client) fetches the web server components installed at the backend infrastructure of the system for the heavy lifting in providing its core functional web services. Some common examples of web applications are Facebook, Medium, Twitter, Smashing Magazine, Flipkart, etc.
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
              How does Progressive Web App work?
              </button>
            </div>
            <div id="collapse-d" className="card-body collapse show" aria-labelledby="faq4" data-parent="#accordion2">
              <p>
              Progressive web app is a new software development methodology which is used to develop a hybrid of regular web pages and a mobile app. This new custom web application model strives to combine features offered by the web browsers with the benefits of native-like mobile experience. PWAs can be located on the search engines and can be accessed promptly using a browser itself.
              </p>
            <p>The central goal of PWAs is to bridge the gap between native apps and web apps by translocating the benefits of the native apps to the mobile browser.</p>

            <p>PWA are:</p>
            <p>
              <div className="niwax-list">
                <ul class="list-ul ul-check">
                  <li>reliable due to faster loading time and offline availability.</li>
                  <li>faster operation with smooth animations and seamless navigation.</li>
                  <li>engaging since it can be launched from the home screen and receive push notifications.</li>
                </ul>

              </div>
            </p>
              
            </div>
          </div>
          <div className="card-1 bg-gradient">
            <div className="card-header" id="faq5">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-e" aria-expanded="true" aria-controls="collapse-e">
               What are the business benefits of Progressive Web Apps?
              </button>
            </div>
            <div id="collapse-e" className="card-body collapse" aria-labelledby="faq5" data-parent="#accordion2">
              <p>
              The implementation of PWA will be beneficial to any business in the following way:
              </p>
              <p>
                <div className="niwax-list">
                  <ul className="list-ul ul-circle">
                    <li>Cost cutting (one team for one technology instead of different units for browsers and individual native mobile apps.</li>
                    <li>Improved page performance.</li>
                    <li>Better visibility over the internet, mainly search engines.</li>
                    <li>Easier and cost-friendly user acquisition of new users compared to the native mobile application.</li>
                  </ul>

                </div>
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

export default WebApplication;