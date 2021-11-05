import React from 'react';
import {Link} from 'react-router-dom';

function About() {
    return (
        <div>
            
 <div>
  {/*Breadcrumb Area*/}
  <section className="breadcrumb-area banner-1" data-background="/asset/images/banner/9.jpg">
    <div className="text-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 v-center">
            <div className="bread-inner">
             
              <div className="bread-title">
                <h2>About Us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Breadcrumb Area*/}
  {/*Start About*/}
  <section className="about-agency pad-tb block-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 v-center">
          <div className="about-image">
            <img src="/asset/images/about/own-growth.webp" alt="about us" className="img-fluid" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="common-heading text-l ">
           
            <h2>GET TO KNOW US</h2>
            <p>
              We are a technology company whose mission is to help companies expand their technological capabilities. We have helped organizations ranging from listed startups to Fortune 500 companies and WHO's non-governmental organizations.
            </p>
            <p>
              Skylight helps companies become innovation leaders by delivering software teams on demand. Our team can help you determine the correct architecture and processes to follow, and oversee the successful delivery of software projects.  
            </p>
          </div>

          {/* <div className="row in-stats small about-statistics">
            <div className="col-lg-4 col-sm-4">
              <div className="statistics">
                <div className="statnumb counter-number">
                  <span className="counter">450</span>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="statistics">
                <div className="statnumb">
                  <span className="counter">95</span><span>k</span>
                  <p>Hours Worked</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4">
              <div className="statistics mb0">
                <div className="statnumb counter-number">
                  <span className="counter">850</span>
                  <p>Projects Done</p>
                </div>
              </div>
            </div>
          </div> */}


        </div>
      </div>
    </div>
  </section>
  {/*End About*/}
  {/*Start why-choose*/}
  <section className="why-choose pad-tb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="common-heading">
            <h2 className="mb30">Why Choose Us</h2>
          </div>
        </div>
      </div>
      <div className="row upset">
        <div className="col-lg-3 col-sm-6 mt30">
          <div className="s-block up-hor">
            <div className="s-card-icon"><img src="/asset/images/icons/research.svg" alt="service" className="img-fluid" /></div>
            <h4>Reasearch and Analysis</h4>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mt30">
          <div className="s-block up-hor">
            <div className="s-card-icon"><img src="/asset/images/icons/chat.svg" alt="service" className="img-fluid" /></div>
            <h4>Negotiation and power</h4>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mt30">
          <div className="s-block up-hor">
            <div className="s-card-icon"><img src="/asset/images/icons/monitor.svg" alt="service" className="img-fluid" /></div>
            <h4>Creative and innovative solutions</h4>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 mt30">
          <div className="s-block up-hor">
            <div className="s-card-icon"><img src="/asset/images/icons/trasparency.svg" alt="service" className="img-fluid" /></div>
            <h4>Trasparency and ease of work</h4>
            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
          </div>
        </div>
      </div>
    </div>
  </section>

   {/*why choose*/}
  <section className="why-choos-lg pad-tb deep-dark">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="common-heading text-l">
           
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
          <div data-tilt data-tilt-max={5} data-tilt-speed={1000} className="single-image wow fadeIn" data-wow-duration="2s"><img src="/asset/images/about/about-image.png" alt="image" className="img-fluid" /></div>
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
  {/*End why-choose*/}
</div>

        </div>
    )
}

export default About;
