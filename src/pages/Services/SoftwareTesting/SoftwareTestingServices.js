import React from 'react';
import {Link} from 'react-router-dom';
import SoftwareTesting from '../../Home/Slider/SoftwareTesting';


const SoftwareTestingServices = () =>{
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
                Software testing that drive product quality &amp; customer satisfaction
            </h1>
            <p style={{fontSize:'21px'}} className="mt20 wow fadeInUp" data-wow-delay=".4s">
            Confidently deliver software faster with a talented team of testers and robust QA processes

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
      <SoftwareTesting/>
    </div>
  </section>
  {/*End Slider*/}


   {/*Start Why Choose*/}
   <section className="service-block pad-tb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="common-heading ptag">
            <h2> Software Testing Services</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/stesting/sautomation-testing.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Automation Testing Services</h4>
              <p>
                Agile automated testing using tools like Jenkins, Selenium, and Appium so that customers can minimize maintenance effort and costs.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/stesting/smobile-app-testing-services.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                Mobile Application Testing Services
              </h4>
              <p>
                Core focus of our Mobile Apps Testing services is to help companies deliver features faster and improve experiences to their mobile users.
            </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/stesting/smanual-testing-services.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
                Manual and Functional Testing Services
            </h4>
              <p>
                Testing applications from the end-users’ perspective significantly improves the software’s experience, usability, and critical defects.
             </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/stesting/ssoftware-security-testing.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              Software Security Testing Services
            </h4>
            <p>
                Identify and resolve security vulnerabilities in your system. We make sure that the system’s data is protected.

            </p>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/stesting/sdev-ops-agile-service.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              DevOps (CI CD) and Agile Services

            </h4>
              <p>
                Use the latest continuous integration and continuous delivery tools to optimize your infrastructure and deploy in a matter of minutes, not hours.
            </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.7s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/stesting/sperformance-testing.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              Performance Testing Services
            </h4>
              <p>
                Achieve optimum stability, responsiveness, and scalability in your applications with our Full-cycle performance testing services.
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
                What types of testing do you perform?
              </button>
            </div>
            <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">
            <p>
                We perform the following types of testing as per project requirements:
                 <div className="niwax-list">
                <ul class="list-ul ul-check">
                  <li>Functional Testing</li>
                  <li>Usability Testing</li>
                  <li>UI Testing</li>
                  <li>Acceptance Testing</li>
                  <li>Cross-Platform Testing</li>
                  <li>Configuration and Compatibility Testing</li>
                  <li>End-to-End Testing</li>
                  <li>Load and Stress Testing</li>
                  <li>Integration Testing</li>
                  <li>Security Testing</li>
                  <li>Data Migration Testing</li>
                  <li>Data Migration Testing</li>

                </ul>

              </div>
            </p>
        </div>
          </div>

          <div className="card-1">
            <div className="card-header" id="faq2">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="true" aria-controls="collapse-b">
                How do you use automation testing?
              </button>
            </div>
            <div id="collapse-b" className="card-body collapse " aria-labelledby="faq2" data-parent="#accordion">
            
            <p>
              We automate tests for repeatability. We automate a test because we need to execute the same tests over and over again. Would you want to automate a test if you were only going to run it once and forget about it? Of course not! The time and effort that you spend on automating the test, you could have executed it manually.
            </p>

            <p>
              Implementing a robust automation testing solution is no mean task and proves challenging for many companies – our dynamic and highly experienced team is amongst the top in automation testing services. With a holistic focus on your business, we strategically design test processes, set up robust automated scripts, create QA automation framework and run Selenium &amp; Mobile Apps automated test scripts for consistent and reliable coverage overall.
            </p>         
              
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq3">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
                How do you do QA using functional testing?
              </button>
            </div>
            <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
              <p>
                Functional testing is a process of verifying that a system performs as expected when its features are exercised by another system or directly by a user. The entire range of the development process comes under the purview of functionality verification.
            </p>

            <p>
              - Unit tests should start at the very beginning to ensure that each block of code performs its intended manipulation of inputs into desired outputs for the next module.
            </p>
               
            <p>
              - Integration tests assure that the unit modules connect each other as expected and convey data and commands throughout the system per the specifications to which it was built.
            </p>

            <p>
              - Sanity testing checks verify that modifications and fixes applied to the code body don’t have unexpected side effects in, apparently, unrelated parts of the system.
            </p>

            <p>
              - Regression tests verify that later feature additions and bug fixes don’t undo previous efforts or interact with them to cause wholly new problems.
            </p>

            <p>
              - Usability acceptance is the actual operation of the system in the context in which it was designed to be used and is the gateway to deployment.
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
              How do you create test plans for Agile development?
              </button>
            </div>
            <div id="collapse-d" className="card-body collapse show" aria-labelledby="faq4" data-parent="#accordion2">
              <p>
                In an agile environment, where we work in short sprints or iterations, each sprint is focused on only a few requirements or user stories, so it is natural that documentation may not be as extensive, in terms of both number and content.
              </p>

            <p>
              We should not have an extensive test plan in agile projects for each sprint due to time constraints, but we do require a high-level agile test plan as a guideline for agile teams. The purpose of the agile test plan document is to list best practices and some form of structure that the teams can follow. Remember, agile does not mean unstructured.
            </p>
           
            </div>
          </div>

          <div className="card-1 bg-gradient">
            <div className="card-header" id="faq5">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-e" aria-expanded="true" aria-controls="collapse-e">
              How do you ensure developer side testing for quality software?
              </button>

            </div>
            <div id="collapse-e" className="card-body collapse" aria-labelledby="faq5" data-parent="#accordion2">
            <p>
                Our developers perform unit testing during writing the code to ensure that code works well.
            </p>

            <span>
             <strong> What is unit testing?</strong>
            </span>

            <p>
              A test verifying methods of a single class. Any dependencies external to the class are ignored or mocked out. Note that some single class tests also qualify as feature tests in a few cases, depending on the scope of the “feature” under test.
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

export default SoftwareTestingServices;