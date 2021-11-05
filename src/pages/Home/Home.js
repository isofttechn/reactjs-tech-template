import React from 'react'
import {Link} from 'react-router-dom';
import IndustryCom from './IndustryCom';
import AllSliders from './Slider/AllSSliders';
// import owlCarousel from 'react-owl-carousel';

const Home = () => {
    return (
        <div>
        {/*Start Preloader */} 
        {/* <div className="onloadpage" id="page_loader">
            <div className="pre-content">
            <div className=""><img src="/asset/images/spinner2.gif" alt="Logo" className="img-fluid" /></div>
            <div className="pre-text-"><span>Sky Light Universal Network.</span></div>
            </div>
        </div> */}
        {/*End Preloader */} 

      
      
  {/*Start Hero*/}
<section className="hero-card-web mobile-app-">
  <div className="hero-main-rp container-fluid">
    <div className="row">
      <div className="col-lg-5 v-center">
        <div className="hero-heading-sec2 niwax" data-rellax-speed="3">
          <h1 className="wow fadeIn" data-wow-delay="0.2s">
          "Connecting you to a brighter world"
            </h1>
          <p className="wow fadeIn" data-wow-delay="0.4s">
         We help companies expand their technological capabilities. We have helped organizations ranging from listed startups to Fortune 500 companies and WHO's non-governmental organizations.

          </p>
          <div className="content-sec  d-flex mt60 v-center text-w wow fadeIn" data-wow-delay="0.6s">
            <div className="mr25">
              <Link to="/get-quote" className="btn-main bg-btn4 lnk">LET'S GET STARTED!<i className="fas fa-chevron-right fa-icon" /><span className="circle" />
              </Link></div>
           
          </div>
          
        </div>
      </div>
      <div className="col-lg-7 v-center">
        <div className="app-hero-bnr wow fadeIn" data-wow-delay="0.4s"> <img src="/asset/images/hero/mobile_hero_banner_img.png" alt="niwax mobile app development company" className="img-fluid" /> </div>
      </div>
    </div>
  </div>
</section>

  {/*End Hero*/}

    
        
      {/*Start Slider*/}
  <section className="service pad-tb">
    <div className="container">
      <AllSliders/>
    </div>
  </section>
  {/*End Slider*/}
     

  {/*Start About*/}
  <section className="about-sec-rpb pad-tb">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-10">
          <div className="common-heading">
            {/* <span>We Are Creative Agency</span> */}
           
            <h1 className="mb30"><span className="text-second"> Big ideas,</span> creative people, new technologies</h1>
            <p> We take an <span className="text-radius text-light text-animation bg-b">
            all-inclusive</span> 
            approach to developing classic varieties of IT program and products, 
            managing, scheduling, estimating, budget control, value-engineering, electronic devices supply, 
            sub-contractor bid solicitation, on-site supervision, quality control, financial technology services, 
            cost control, safety monitoring, communications services, total project management and a commitment to
             delivering expert approach and exceptional value.
             </p>
            <h3 className="mt30 mb30">Mobile and web Application with a focus on business growth.</h3>
            <p> We develop mobile and web app which enables customers and employees to engage with 
              brand and meet their demands faster. Our extended teams will build highly performant 
              and scalable mobile or web apps using latest programming languages and frameworks.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End About*/}

  
  {/*Start work-category*/}

        <IndustryCom/>


      {/* Services */}
  <section className="service-block pad-tb ">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="common-heading ptag">
         
          <h2>Our Services</h2>
          <p className="mb30"> Our value isn’t limited to building software but, is equally distributed across all ITs and electronics services. 
          We pride ourselves in delivering on-demand software, sales and supply of electronics devices.</p>
        </div>
      </div>
    </div>


    <div className="row justify-content-center">
      <div className="col-lg-4 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><i class="fas fa-mobile-alt fa-3x img-fluid" style={{color: '#f92c8b', }}></i></div>
          <div className="s-block-content">
            <h4>Mobile Application Development Services</h4>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><i class="fas fa-globe fa-3x img-fluid" style={{color: '#f92c8b', }}></i></div>
          <div className="s-block-content">
            <h4>Web Application Development Services</h4>
          </div>
        </div>
      </div>
      
      <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><i class="fab fa-adn fa-3x img-fluid" style={{color: '#f92c8b', }}></i></div>
          <div className="s-block-content">
            <h4>Software Development &amp; Testing Services</h4>
          </div>
        </div>
      </div>


      <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><i class="fas fa-solar-panel fa-3x img-fluid" style={{color: '#f92c8b', }}></i></div>
          <div className="s-block-content">
            <h4>Solar Supply, Installation &amp; Maintenance </h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><i class="fas fa-camera fa-3x img-fluid" style={{color: '#f92c8b', }}></i></div>
          <div className="s-block-content">
            <h4>Surveillance Camera, Installation  &amp; Maintenance</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.7s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><i class="fas fa-procedures fa-3x img-fluid" style={{color: '#f92c8b', }}></i></div>
          <div className="s-block-content">
            <h4>Electronics Sales &amp; supply(Large Quality)</h4>
          </div>
        </div>
      </div>


      <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><i class="fas fa-headset fa-3x img-fluid" style={{color: '#f92c8b', }}></i></div>
          <div className="s-block-content">
            <h4>IT Support Service </h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><i class="fas fa-door-open fa-3x img-fluid" style={{color: '#f92c8b', }}></i></div>
          <div className="s-block-content">
            <h4>Biometric &amp; Access control System</h4>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.7s">
        <div className="s-block wide-sblock">
          <div className="s-card-icon"><i class="fab fa-connectdevelop fa-3x img-fluid" style={{color: '#f92c8b', }}></i></div>
          <div className="s-block-content">
            <h4>Automation &amp; IOT</h4>
          </div>
        </div>
      </div>


    </div>


    <div className="-cta-btn mt70">
      <div className="free-cta-title v-center wow zoomInDown" data-wow-delay="1.8s">
        <p>Ready to kick Start <span>New Project?</span> </p>
        <Link to="/services" className="btn-main bg-btn2 lnk">Find Out More
        <i className="fas fa-chevron-right fa-icon" />
        <span className="circle" />
        </Link>
      </div>
    </div>
  </div>
</section>
      {/* End Services */}


  {/*why choose*/}
  <section className="why-choos-lg pad-tb deep-dark">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="common-heading text-l">
            <span>Why Choose Us</span>
            <h2 className="mb20">Why We Are Among Leading Software Development and IT Companies</h2>
            <p>Your business depends on software and IT systems. We believe that we are the only software and network service,
               computer support and electronic equipment provider that can bring these benefits to your business in the entire West Africa region.</p>
            <div className="itm-media-object mt40 tilt-3d">
              <div className="media">
                <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}><img src="/asset/images/icons/computers.svg" alt="icon" className="layer" /></div>
                <div className="media-body">
                  <h4>Streamlined Project Management</h4>
                  <p>Our business analysis team will do all the work of gathering crucial project 
                    information from key stakeholders to deliver technical requirements that developers understand.
</p>
                </div>
              </div>

              <div className="media mt40">
                <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}><img src="/asset/images/icons/worker.svg" alt="icon" className="layer" /></div>
                <div className="media-body">
                  <h4>A Dedicated Team of Experts</h4>
                  <p>Get expert advice right when you need it from any agency in our network,
                     whether it’s a data scientist, architect, Security, or niche technology expert.</p>
                </div>
              </div>

              <div className="media mt40">
                <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}><img src="/asset/images/icons/worker.svg" alt="icon" className="layer" /></div>
                <div className="media-body">
                  <h4>Testing, Support, and Maintenance</h4>
                  <p>End-to-end testing, round-the-clock support for bugs, and on-demand maintenance.</p>
                </div>
              </div>

              <div className="media mt40">
                <div className="img-ab- base" data-tilt data-tilt-max={20} data-tilt-speed={1000}> <img src="/asset/images/icons/deal.svg" alt="icon" className="layer" /></div>
                <div className="media-body">
                  <h4>Completion of Project in Given Time</h4>
                  <p>We measure dedicated team productivity metrics, monitor the quality 
                    of software, manage deliverables, and support startups with an individual program.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div data-tilt data-tilt-max={5} data-tilt-speed={1000} className="single-image wow fadeIn" data-wow-duration="2s"><img src="/asset/images/hero/about-service.png" alt="image" className="img-fluid" /></div>
          <p className="text-center mt30">We know that if the client’s project launches smoothly, they’ll come back for more.
           We're willing to over-invest in guaranteeing results, rather than under-invest to make our financial reports look
            pretty in the short-run.</p>
          <div className="cta-card mt60 text-center">
            <h3 className="mb20">Let's Start a  <span className="text-second text-bold">New Project</span> Together</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet ligula nec leo elementum semper.</p> */}
            <Link to="/get-quote" className="btn-outline lnk mt30">Request A Quote   
             <i className="fas fa-chevron-right fa-icon" />
             <span className="circle" />
             </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End why choose*/}
  
  {/*Start Portfolio*/}

  {/* <section className="portfolio-section pad-tb">
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-lg-8">
          <div className="common-heading">
            <span>Our Work</span>
            <h2 className="mb0">Our Latest Creative Work</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-sm-8 mt60 wow fadeInUp" data-wow-delay="0.2s">
          <div className="isotope_item hover-scale">
            <div className="item-image" data-tilt data-tilt-max={2} data-tilt-speed={1000}>
              <a href="#"><img src="/asset/images/portfolio/image-d.jpg" alt="image" className="img-fluid" /> </a>
            </div>
            <div className="item-info">
              <h4><a href="#">Ecommerce Development</a></h4>
              <p>Web Application</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-4 mt60 wow fadeInUp" data-wow-delay="0.4s">
          <div className="isotope_item hover-scale">
            <div className="item-image" data-tilt data-tilt-max={2} data-tilt-speed={1000}>
              <a href="#"><img src="/asset/images/portfolio/image-1.jpg" alt="image" className="img-fluid" /> </a>
            </div>
            <div className="item-info">
              <h4><a href="#">Creative App</a></h4>
              <p>iOs, Android</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-4 mt60 wow fadeInUp" data-wow-delay="0.6s">
          <div className="isotope_item hover-scale">
            <div className="item-image" data-tilt data-tilt-max={2} data-tilt-speed={1000}>
              <a href="#"><img src="/asset/images/portfolio/image-6.jpg" alt="image" className="img-fluid" /> </a>
            </div>
            <div className="item-info">
              <h4><a href="#">Brochure Design</a></h4>
              <p>Graphic, Print</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-sm-8 mt60 wow fadeInUp" data-wow-delay="0.8s">
          <div className="isotope_item hover-scale">
            <div className="item-image" data-tilt data-tilt-max={2} data-tilt-speed={1000}>
              <a href="#"><img src="/asset/images/portfolio/image-c.jpg" alt="image" className="img-fluid" /> </a>
            </div>
            <div className="item-info">
              <h4><a href="#">Icon Pack</a></h4>
              <p>iOs, Android</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}

  {/*End Portfolio*/}


  {/*Start Testinomial*/}

  {/*End Testinomial*/}

  {/*Start CTA*/}

  <section className="cta-area pad-tb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="common-heading">
            <span>Let's work together</span>
            <h2>We Love to Listen to Your Requirements</h2>
            <Link to="/get-quote" className="btn-outline">
              Estimate Project 
              <i className="fas fa-chevron-right fa-icon" />
              </Link>
            <p className="cta-call">Or call us now <a href="tel:+2347085504774"><i className="fas fa-phone-alt" /> +2347085504774</a></p>
          </div>
        </div>
      </div>
    </div>
    <div className="shape shape-a1"><img src="/asset/images/shape/shape-3.svg" alt="shape" /></div>
    <div className="shape shape-a2"><img src="/asset/images/shape/shape-4.svg" alt="shape" /></div>
    <div className="shape shape-a3"><img src="/asset/images/shape/shape-13.svg" alt="shape" /></div>
    <div className="shape shape-a4"><img src="/asset/images/shape/shape-11.svg" alt="shape" /></div>
  </section>

  {/*End CTA*/}
  {/*Start Location*/}
    
  {/*End Location*/}

</div>

    )
}

export default Home;
