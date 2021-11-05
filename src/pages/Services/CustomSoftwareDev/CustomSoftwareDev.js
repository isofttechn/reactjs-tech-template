import React from 'react';
import {Link} from 'react-router-dom';
import CustomSoftDev from '../../Home/Slider/CustomSoftDev';


const CustomSoftwareDev = () =>{
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
                Custom software development services trusted by Fortune 1000 companies
            </h1>
            <p style={{fontSize:'21px'}} className="mt20 wow fadeInUp" data-wow-delay=".4s">
            Reimagine your business into a software-first business with our design and development approach
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
      <CustomSoftDev/>
    </div>
  </section>
  {/*End Slider*/}


   {/*Start Why Choose*/}
   <section className="service-block pad-tb">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="common-heading ptag">
            <h2> Custom Development Offerings</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6 mt30  wow fadeIn" data-wow-delay=".2s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/custom/ServiceEnterpriseAaplication.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>Application Development Services</h4>
              <p>
              Optimal business performance through custom software tailored to complement your goals and needs.

              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".5s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/custom/system-integration.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              System Integration Services
              </h4>
              <p>
              Through our tech partnerships with modern platforms, we provide software customization and integration services.
            </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay=".8s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/web/icon-progressive-web.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              Dashboards, ETL, and BI Services
            </h4>
              <p>
              Get systems “talking to each other” to make business more efficient by putting the right information in the right hands.
             </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.1s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/custom/dashboard.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              Legacy Modernization &amp; Application Migration
            </h4>
            <p>
                We provide cloud migration services, technical architecture reviews, and complete application refinement to bring your IT up to date.
            </p>

            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mt30 wow fadeIn" data-wow-delay="1.4s">
          <div className="s-block wide-sblock">
            <div className="s-card-icon-large"><img src="/asset/images/icons/apis/scloud-app.svg" alt="service" className="img-fluid" /></div>
            <div className="s-block-content">
              <h4>
              Big Data Application Services
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
              Real-time Applications Development Services
            </h4>
              <p>
              Harness the power of technologies like sensor data monitoring, stream processing, etc to get real-time data responses.
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
              What is custom software development? What are custom applications?
              </button>
            </div>
            <div id="collapse-a" className="card-body collapse show" aria-labelledby="faq1" data-parent="#accordion">
            <p>
            Custom software development is the development of software for the specific needs of a business process or group of users. Such applications serve the goals of a business by providing features and workflows generally not found in more traditional and widespread off-the-shelf software.
          </p>
        </div>
          </div>

          <div className="card-1">
            <div className="card-header" id="faq2">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-b" aria-expanded="true" aria-controls="collapse-b">
              How much does custom software development cost?
              </button>
            </div>
            <div id="collapse-b" className="card-body collapse " aria-labelledby="faq2" data-parent="#accordion">
            
            <p>
            In our experience, many custom software projects fall somewhere between the $50,000 and $500,000 mark to design and develop.
            </p>

            <p>
            It’s a broad range, and probably not that useful because the software can mean anything from a calculator on your phone to a full enterprise billing system that supports millions of users. No two custom-built applications are the same.
            </p>
                <p>
                Biggest Factors for Software Development Cost:
                <div className="niwax-list">
              <ul class="list-ul ul-numm ul-liin">
                <li>Size of project and number of features</li>
                <li>Complexity</li>
                <li>Third-party integrations</li>
                <li>Design complexity</li>
                <li>Technology stack</li>
                <li>Developer’s skillset</li>
                <li>Velocity required</li>
                <li>Development Process</li>               
              </ul>
            </div>
            </p>

           
              
            </div>
          </div>
          <div className="card-1">
            <div className="card-header" id="faq3">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-c" aria-expanded="true" aria-controls="collapse-c">
              How do you choose the right tech architecture?
              </button>
            </div>
            <div id="collapse-c" className="card-body collapse " aria-labelledby="faq3" data-parent="#accordion">
              <p>
              That is not an easy answer, and like many other answers related to software development, it depends. We follow the concept of Evolutionary Architectures.
            </p>

            <p>
            We picture your project as a set of different Modules, each module can vary in complexity and requirements. Therefore each module can have a proper architecture that best suits it. Despite that, we have to think about architecture as living beings, so they will adapt and change during the project.
            </p>
               
            <p>
            Choosing a design for the whole system up front usually is not the best idea. We would recommend you to picture your system as this set of modules and start to choose a design that best addresses each module needs, always favoring simplicity.
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
              What technologies will be used to develop custom software?
              </button>
            </div>
            <div id="collapse-d" className="card-body collapse show" aria-labelledby="faq4" data-parent="#accordion2">
              <p>
              We are technology neutral and strongly believe that each technology has its own pros and cons. It depends on the skills of the developers rather than the technology itself.
            </p>

            <p>
            We work on a range of technologies, frameworks, and programming languages for both server side and front-end side. </p>
            <p> Backend - Node.js, .Net Core, asp.Net (C#), PHP, Python, Java, Ruby On Rails, Go</p>
            <p>Frontend - JavaScript, TypeScript, Angular, React, Vue, iOS, Android, Electron, Unity, WPF, React Native, Flutter, Xamarin</p>
            <p>Databases - PostgresQL, SQL Server, MySQL, Oracle, Firebase, Firestore, MongoDB, DynamoDB, Couchbase, Cassandra, Hbase, Redis, ElasticSearch, RethinkDB, Cosmos DB, Neptune, Hadoop, Hortonworks, MAPR, Cloudera, etc.</p>
            <p>CMS - Liferay, Sitecore, Magento, Shopify, Wordpress, Moodle, Umbraco, Canvas, Adapt, Docebo, Litmos, Successfactors, Totara, etc.</p>
            <p>Cloud &amp; Integrations - Salesforce, Sharepoint, Amazon AWS, Microsoft Azure, Google Cloud, Kubernetes, Docker, Mulesoft, Pivotal, Algolia, Apigee, Splunk, Talend, Nexmo, Twilio, Alfresco, Stripe etc.</p>
            <p>Testing - Selenium, Saucelabs, Appium, Mocha, Katalon, SoapUI, Gatling, JMeter, Hoverfly</p>
              
            </div>
          </div>
          <div className="card-1 bg-gradient">
            <div className="card-header" id="faq5">
              <button className="btn btn-link btn-block text-left card-title collapsed" type="button" data-toggle="collapse" data-target="#collapse-e" aria-expanded="true" aria-controls="collapse-e">
              How do you make sure software has great UI and UX?
              </button>
            </div>
            <div id="collapse-e" className="card-body collapse" aria-labelledby="faq5" data-parent="#accordion2">
            <p>
                Our developers are creative technologists who also understand design. This unique combination of skills ensures that our designs will fit within the framework of your systems and give your customers a better experience.
            </p>

            <p>
            Building software with great UX requires changing the Agile process to fit in UX designers needs:
            </p>

            <p>
            <div className="niwax-list">
                <ul class="list-ul ul-check">
                  <li>Understand technical constraints first to save time</li>
                  <li>Research and test before, during, and after development</li>
                  <li>Have time to design for both microinteractions and the big picture</li>
                  <li>Adapt quickly to new information.</li>
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

export default CustomSoftwareDev;