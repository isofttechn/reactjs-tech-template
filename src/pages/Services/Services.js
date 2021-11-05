import React from 'react';
import {Link} from 'react-router-dom';
import AllSliders from '../Home/Slider/AllSSliders';


const Services = () =>{
    return(
  <div>

  {/*Breadcrumb Area*/}
  <section className="breadcrumb-areav2" data-background="//asset/images/banner/8.jpg">
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
               What can we do For your business
               </h1>
            <p style={{fontSize:'21px'}} className="mt20 wow fadeInUp" data-wow-delay=".4s">
              We help assemble and manage a team of world-class software developers to bring your vision to life
            </p> 

            <Link to="/get-quote" className="btn-outline lnk mt30">Request A Quote   
             <i className="fas fa-chevron-right fa-icon" />
             <span className="circle" />
             </Link>
           
          </div>
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

 
 {/*Start work-category*/}

  <section className="service-section-prb mt70">
    <div className="container">
    <div className="row">
        <div className="col-lg-4 v-center">
          <div className="common-heading text-l">
            <h2>Helping Companies in All Domains</h2>
            <p>We successfully helped all these Industries on their digital transformation journey </p>
          </div>
        </div>
       <div className="col-lg-8">
          <div className="work-card-set">
            <div className="icon-set wow fadeIn" data-wow-delay=".2s">
              <div className="work-card cd1">
                <div className="icon-bg"><img src="/asset/images/icons/icon-1.png" alt="Industries" /></div>
                <p>Retail Banking </p>
              </div>
            </div>
             <div className="icon-set wow fadeIn" data-wow-delay="1.4s">
              <div className="work-card cd7">
                <div className="icon-bg"><img src="/asset/images/icons/icon-7.png" alt="Industries" /></div>
                <p>Education</p>
              </div>
            </div>
            <div className="icon-set wow fadeIn" data-wow-delay=".4s">
              <div className="work-card cd2">
                <div className="icon-bg"><i class="fab fa-hive fa-4x"></i></div>
                <p>Investment Management</p>
              </div>
            </div>
                        <div className="icon-set wow fadeIn" data-wow-delay=".8s">
              <div className="work-card cd4">
                <div className="icon-bg"><i class="fas fa-building fa-4x"></i></div>
                <p>Government</p>
              </div>
            </div>
            
            {/* <div className="icon-set wow fadeIn" data-wow-delay=".6s">
              <div className="work-card cd3">
                <div className="icon-bg"><i class="fas fa-coins fa-4x"></i></div>
                <p>Financial Services</p>
              </div>
            </div>

            <div className="icon-set wow fadeIn" data-wow-delay="1s">
              <div className="work-card cd5">
                <div className="icon-bg"><img src="/asset/images/icons/icon-5.png" alt="Industries" /></div>
                <p>Banking Service</p>
              </div>
            </div>
            <div className="icon-set wow fadeIn" data-wow-delay="1.2s">
              <div className="work-card cd6">
                <div className="icon-bg"><img src="/asset/images/icons/icon-6.png" alt="Industries" /></div>
                <p>Enterprise Service</p>
              </div>
            </div>

            <div className="icon-set wow fadeIn" data-wow-delay="1.6s">
              <div className="work-card cd8">
                <div className="icon-bg"><i class="fas fa-broadcast-tower fa-4x"></i></div>
                <p>Communication</p>
              </div>
            </div> */}




          </div>
        </div>
      </div>

      <div className="-cta-btn mt70">
        <div className="free-cta-title v-center zoomInDown wow" data-wow-delay="1.4s">
          
          <p>Let's Start a <span>New Project</span> Together</p>
          <Link to="/get-quote" className="btn-main bg-btn2 lnk">LET'S GET YOU STARTED<i className="fas fa-chevron-right fa-icon" />
          <span className="circle" />
          </Link>
        </div>
      </div>
    </div>
  </section>
  
   {/*End  work-category*/}
            
           

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

  </div>
</section>
      {/* End Services */}


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
{/* <section className="work-category pad-tb">
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
</section> */}

{/*End  work-category*/}

</div>

    )
}

export default Services;