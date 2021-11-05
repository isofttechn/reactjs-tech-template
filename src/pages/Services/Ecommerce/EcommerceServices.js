import React from 'react';
import {Link} from 'react-router-dom';
import EcommerceSlider from '../../Home/Slider/EcommerceSlider';

const EcommerceServices = () =>{
    return(
  <div>

        {/*Breadcrumb Area*/}
  <section className="breadcrumb-areav2" data-background="/asset/images/banner/custom-software-banner@2x.webp">
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
                eCommerce Development Services for Web, Mobile, and AR/VR
            </h1>
            <p style={{fontSize:'21px'}} className="mt20 wow fadeInUp" data-wow-delay=".4s">
                Deliver exceptional retail experiences on digital platforms to drive measurable business results.
            </p>
            <Link to="/get-quote" className="btn-main bg-btn2 lnk mt20 wow zoomInDown" data-wow-delay=".6s">
                Get Quote 
                <i className="fas fa-chevron-right fa-icon" />
                <span className="circle" />
          </Link>
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
      <EcommerceSlider/>
    </div>
  </section>
  {/*End Slider*/}


   {/*Start Why Choose*/}
   <section className="service-block pad-tb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="common-heading ptag">
            <h2>
                Provide a customer-centric experience through Shopify and Magento
            </h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/ecom/Business-Analysis.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                  eCommerce Strategy and Consulting
            </h4>
              <p>
                Increase revenue and stay competitive with strategic planning along with expert advice on eCommerce platforms like Magento and Shopify.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/ecom/ux-driven-enginnering.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                Custom eCommerce Storefront Design
              </h4>
              <p>
                Drive more conversions and establish a unique brand voice with conversion-focused, visually stunning templates.
            </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/ecom/shopping_cart_icon.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                Custom Shopping Cart Development
            </h4>
              <p>
                Reduce cart abandonment and deliver a great user experience with features like quick checkout and custom discounts.
            </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/ecom/tech-architech.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                CMS Development
            </h4>
            <p>
            We provide CMS (Content Management System) development and integration services to build a fully-functional eCommerce website.
            </p>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/ecom/sprint-planning.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                3rd Party Integration
            </h4>
              <p>
                Get real-time updates on customers’ orders, delivery and other important information by integrating any CRM, CMS, and ERP using APIs.

            </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.7s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/ecom/ERP_integration_icon.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                Dedicated ERP System
            </h4>
              <p>
                Improve coordination between departments with a centralized ERP to have a real-time view of the current business situation.
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
{/* <section className="pad-tb">
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
                What Is Access Control?
              </button>
            </div>
            <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">
            <p>
               Access control can be applied to both physical security solutions as well as logical ones. The access control system permits only authorized personnel to enter the building or system. The system does this with a password protection system or for a physical system, a key card or fob is utilized. These fobs can be controlled remotely to be activated or deactivated.
  
            </p>
        </div>
          </div>

          <div className="card-1">
            <div className="card-header" id="faq2">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="true" aria-controls="collapse-b">
                Why Would I Utilize Access Control?
              </button>
            </div>
            <div id="collapse-b" className="card-body collapse " aria-labelledby="faq2" data-parent="#accordion">
            
            <p>
              Access control provides a range of solutions to businesses that need to control who accesses their systems. They provide added security from physical keys, although you will still be able to utilize physical keys should you need to do so. Electronic keys are virtually impossible to replicate and you won’t have to worry about losing your keys as every key is programmed with a unique code that can be replicated by the provider if lost or stolen. Your old key will then be deactivated and rendered useless.

            </p>

            <p>
                Another benefit of access control systems is that you’ll be able to set days and times that each user is able to access the building and even customize locations that your employees can access. Access control makes security easy and customizable for everyone that needs to be on site.
            </p>

            <p>
                You’ll also be able to record who accessed your building and when. All of this data is recorded and you’ll be able to access it at any time. This data is particularly useful for times when security breaches, theft, or other suspicious activity occurs.
            </p>         
              
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq3">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
                How Are Access Control Systems Installed?
              </button>
            </div>
            <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
              <p>
                Access control systems begin with a consultation with us at Surveillance Secure. Hardware will be needed for physical access systems, including card or fob readers, door switches, and a control panel. The control panel is integral to the system and controls all the different access points of the building. Access control systems are versatile and can grow with your business, so if you need a bigger system, simply integrate a new control panel.

            </p>

            <p>
                The server of the system will have all the users in a database, which allows for customization of access times and locations. When the card is introduced to the reader, a frequency is read by the controller and the user is verified through the database. If verified, the door will unlock. If not, the controller registers the breach and the proper monitors will be notified.
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
                Do Access Control Systems Work When the Power Is Out?

              </button>
            </div>
            <div id="collapse-d" className="card-body collapse show" aria-labelledby="faq4" data-parent="#accordion2">
              <p>
                Yes, as systems have battery backup plans for emergencies to keep the access control system functioning. If the power is out for longer than the battery backup can accommodate, this is a situation in which you would need to utilize physical keys.
              </p>
           
            </div>
          </div>

          <div className="card-1 bg-gradient">
            <div className="card-header" id="faq5">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-e" aria-expanded="true" aria-controls="collapse-e">
                Does the System Just Work on Doors?
              </button>

            </div>
            <div id="collapse-e" className="card-body collapse" aria-labelledby="faq5" data-parent="#accordion2">
            <p>
                No, access control systems are extremely versatile and can work on a variety of entries and exits such as elevators, gates, parking restrictions, vehicles, and garage doors.
            </p>
                       
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
{/*End Faqs*/}
</div>

    )
}

export default EcommerceServices;