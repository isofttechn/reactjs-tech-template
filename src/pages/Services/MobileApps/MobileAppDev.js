import React from 'react';
import Card from '../../Home/Slider/Card';
import {Link} from 'react-router-dom';
import Carousel from '../../Home/Slider/Carousel';


const MobileAppsDev = () =>{
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
               Mobile application development using industry leading technologies   
              </h1>
            <p style={{fontSize:'21px'}} className="mt20 wow fadeInUp" data-wow-delay=".4s">
            Harness the power of modern mobile frameworks to build native mobile apps that scale  
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
            <img src="/asset/images/service/service-img-3.webp" alt="image" className="img-fluid no-shadow" />
          </div>
        </div>
        <div className="col-lg-8 block-1">
          <div className="common-heading text-l pl25">
            
            <h2> Mobile app development services to build innovative experiences</h2>
            <p>
            In a mobile-first world, customers and workers want more ways to engage with your brand.
             Build apps to meet their needs, faster
            </p>
          </div>
        </div>
      </div>
    </div>

    {/*Start Tech*/}
    <div className="techonology-used-">
    <div className="container">
      <ul className="h-scroll tech-icons">
        <li><a href="#"><img src="/asset/images/icons/mobile/flutter.svg" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/mobile/ReactNative.svg" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/mobile/Adnroid.svg" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/mobile/TypeScript.svg" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/mobile/iOS.svg" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/mobile/JavaScript.svg" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/mobile/Xamarin.svg" alt="icon" /></a></li>
        <li><a href="#"><img src="/asset/images/icons/mobile/Electron.svg" alt="icon" /></a></li>
      </ul>
    </div>
  </div>
  {/*End Tech*/}
  </section>
  {/*End About*/}
 

      {/*Start Slider*/}
  <section className="service pad-tb">
    <div className="container">
      <Card/>
    </div>
  </section>
  {/*End Slider*/}


   {/*Start Why Choose*/}
   <section className="service-block pad-tb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="common-heading ptag">
            <h2>Mobile app development offering</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/ServiceEnterpriseAaplication.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Native App Development Services</h4>
              <p>
              Native B2B and consumer apps allow you to utilize the inherent power of iOS and Android platforms with secure and performant apps.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/icon-react-js.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Hybrid Cross-platform App Development Services</h4>
              <p>
              Utilize the power of React Native, Flutter, and Xamarin to develop apps for multiple platforms while sharing the same code base.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/icon-progressive-web.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Business Analysis &amp; Consulting Services</h4>
              <p>
              Whether you are looking to develop business apps or apps to service customers, our consultants can help you define the right tech plan.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/icon-backend-node-js.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Business Apps and API Integration Services</h4>
              <p>
              Integrate your mobile app(s) with services you are already using and extend their use cases for your employees and users.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/icon-ecommerce-web.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Enterprise Mobile Apps</h4>
              <p>
              Customized mobile solutions to drive your operations. For example, a CMS to organize and publish content, all in a simple screen.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.7s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/scustomweb-app-enterprises.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              Apps for Internet of Things
              </h4>
              <p>
              Unlock the potential of high functioning mobile apps that interact with hardware/wearables/IoT through Wi-Fi, Bluetooth, NFC, and more.
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
              How do you design mobile apps?
              </button>
            </div>
            <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">
            <p>
            Even the most visually amazing mobile app can and will fail to perform well on the app store if it’s not intuitive and lacks usability.
            </p>
            <p>
            As a user, you would want to open an app and feel like you already intuitively know everything — where to click next, what actions to perform, how to jump to a particular place, etc. The second you get stuck, you give up and go try another app. Sounds familiar?
            </p>

            <p>
            So what do we do to make sure this doesn’t happen to the potential users you just spent so much time researching? We do UX which is included in our mobile app development services.
            </p>

            <p>
            UX is the process of creating products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function — The Interaction Design Foundation.
            </p>
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq2">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="true" aria-controls="collapse-b">
              How do you choose the mobile app architecture?
              </button>
            </div>
            <div id="collapse-b" className="card-body collapse " aria-labelledby="faq2" data-parent="#accordion">
              <p>
              These are the things we keep in mind when choosing mobile app architecture: Portability, Maintainability, Manageability, Reusability, Testability, Security, Performance
              </p>

               <p> Also, while making architectural decisions, we need to keep these in mind as well.</p>

              <p>
                <div className="niwax-list">
                  <ul className="list-ul ul-numm ul-liin">
                    <li>Components of the app should be nicely organized and decoupled.</li>
                    <li>Architecture should speak about the business domain of the project. Is it a food delivery application Or maybe one for financial institutions?</li>
                    <li>Scalability: How easy it is to add more features? Having an elegant solution might save us a lot of time and money in the future.</li>
                    <li>How the architecture fits the requirements of the business domain. 
Is it a heavy data-driven app? Does it have a lot of forms that require user input? What is the complexity of the app that we are going to build? Is it a “5 screens” app or “20 screens” app?</li>
                    <li>Will the team be able to work independently on features, without blocking themselves?</li>
                    <li>What are the key components that we want to test?</li>
                    <li>What is the deadline and budget for the project? What is the trade-off that we must do in terms of quality — time of delivery?</li>
                    <li>Consider all network scenarios. How much does mobile app development cost?</li>
                  </ul>
                </div>
            </p>

              
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq3">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
              How much does mobile app development cost?
              </button>
            </div>
            <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
              <p>
              The cost of Mobile App development depends on many factors such as:
            </p>

            <div className="niwax-list">
              <ul className="list-ul ul-circle">
                <li>Development platform - native, hybrid, cross-platform</li>
                <li>App categories - e-commerce, Gaming, Entertainment, On-Demand Delivery</li>
                <li>App Complexities - number of screens, limited data, need for API connection, admin console, user profiles</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mt60">
        <div id="accordion2" className="accordion">
          <div className="card-1 bg-gradient">
            <div className="card-header" id="faq4">
              <button className="btn btn-link btn-block text-left card-title" type="button" data-toggle="collapse" data-target="#collapse-d" aria-expanded="true" aria-controls="collapse-d">
              How long does it take to build a mobile application?
              </button>
            </div>
            <div id="collapse-d" className="card-body collapse show" aria-labelledby="faq4" data-parent="#accordion2">
            <p>
              The exact time to build a mobile application depends on its features, the screen sizes, and the frameworks used. There is a huge process involved in developing mobile apps. But it normally takes 2 months to around 4–5 months depending on developers, functionalities of the app, platform, and much more.
            </p>
                          
            </div>
          </div>
          <div className="card-1 bg-gradient">
            <div className="card-header" id="faq5">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-e" aria-expanded="true" aria-controls="collapse-e">
              Do you provide maintenance and support after developing a Mobile App?
              </button>
            </div>
            <div id="collapse-e" className="card-body collapse" aria-labelledby="faq5" data-parent="#accordion2">
              <p>
              Yes, we provide free support and maintenance during development. Once the project is completed and delivered to you, we provide paid support at very nominal rates. Also, we help you to launch your mobile app on the App Store or Google Play without any extra cost.
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

export default MobileAppsDev;