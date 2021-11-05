import React from 'react';
import {Link} from 'react-router-dom';
import './Slider.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const AllSliders = () =>{
  return (
        <div>
          
    <Swiper
    autoplay = {true}
      spaceBetween={50}
      slidesPerView={2}
      centeredSlides = {true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
      breakpoints = {{
        320: {
          width: 320,
          slidesPerView: 1,
          spaceBetween: 40,
          centeredSlides: true,
         scrollbar : {draggable: true },
        onSlideChange: () => console.log('slide change'),
        onSwiper: (swiper) => console.log(swiper)
        
         
        },
        480: {
          width: 480,
          slidesPerView: 1,
          spaceBetween: 40,
         scrollbar : {draggable: true },
        onSlideChange: () => console.log('slide change'),
        onSwiper: (swiper) => console.log(swiper)

        },
        640: {
          width: 640,
          slidesPerView: 1,
          spaceBetween: 50,
         scrollbar : {draggable: true },
        onSlideChange: () => console.log('slide change'),
        onSwiper: (swiper) => console.log(swiper)
        },
      }}
    >

<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
        Access Control Systems from the Access Control Experts at Skylight
        </span>
        <p>
        If you need biometric access control systems at your commercial or government  facility, contact the experienced access control professionals at Skylight Secure today. We offer modern solutions to modern security threats along with ongoing maintenance plans to virtually eliminate downtime. 
        </p>
      </div>

    </div>
    <div className="col-lg-6 lead-intro-">
        <a href="/biometric-access-control"><img src="/asset/images/sliders/retentionrates.svg" alt="image" className="img-fluid" /></a> 

       <br/><br/>
        <a href="/biometric-access-control">Learn More <i class="fas fa-chevron-right fa-icon">
            </i>
        </a>
         <br/><br/>
    </div>
  </div>
</div>
</SwiperSlide>
    
 
<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
        Structured architectural patterns for developing systems that scale
        </span>
        <p>
        We help build large scale web applications adhering to Google’s definition of “progressiveness”, making them fast even on 2G networks, offline-available and easily installable across devices.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/str.svg" alt="image" className="img-fluid" />
       <br/><br/>
        <a href="/webpps">Learn More <i class="fas fa-chevron-right fa-icon">
            </i>
        </a>
      <br/><br/>
    </div>
  </div>
</div>
</SwiperSlide>


 <SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
        Unlock new business opportunities with mobile apps
        </span>
        <p>
        We help companies identify and unlock opportunities in mobility. Apps we develop bring the power of enterprise solutions to your workforce while delivering consumer-grade user experience.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/powerenterprise.svg" alt="image" className="img-fluid" />
       <br/><br/>
        <a href="/mobileappdev">Learn More <i class="fas fa-chevron-right fa-icon">
            </i>
        </a>
      <br/><br/>
    </div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
        Standardized API development
        </span>
        <p>
        We expertise in a large variety of APIs using SOAP, REST and XML-RPC as well as JSON and other protocols. We also help develop APIs for mobile, desktop browser apps, databases, and intranet systems.

        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/varietyapi.svg" alt="image" className="img-fluid" />
      <br/><br/>
        <a href="/api-integration-development">Learn More <i class="fas fa-chevron-right fa-icon">
            </i>
        </a>
      <br/><br/>
    </div>
  </div>
</div>
</SwiperSlide>


  <SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
        Custom software for your evolving business needs
        </span>
        <p>
        Skylight provides custom software development services for the unique needs and challenges of your business. We build intuitive, secure custom applications to enhance user experience.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/tailored.svg" alt="image" className="img-fluid" />
      <br/><br/>
        <a href="/custom-software-development">Learn More <i class="fas fa-chevron-right fa-icon">
            </i>
        </a>
      <br/><br/>
    </div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">

          <span>
              Network Security
          </span>
        <p>
       We provide Network Security solution to protects your data against the world’s most sophisticated and damaging attacks. You enjoy increased productivity, cost- efficiency and proactive monitoring by our expert security technicians, we provide you with a range of security solutions:

        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/dataprotection.svg" alt="image" className="img-fluid" />
       <br/><br/>
        <a href="/network-solution">Learn More <i class="fas fa-chevron-right fa-icon">
            </i>
        </a>
      <br/><br/>
    </div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
            Automated tested builds for quicker deliveries
        </span>
        <p>
            Armed with DevOps tools, our team automates the majority of critical and time-consuming operations. We jointly architecture CI and CD flows with emphasis on improving both unit and regression test coverage.

        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/automatedbuild.svg" alt="image" className="img-fluid" />
       <br/><br/>
        <a href="/software-testing">Learn More <i class="fas fa-chevron-right fa-icon">
            </i>
        </a>
      <br/><br/>
    </div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
       
      <div className="-cta-btn mt70">
        <div className="free-cta-title v-center wow zoomInDown" data-wow-delay="1.8s">
          <Link to="/get-quote" className="btn-main bg-btn2 lnk">Inquire Now
          <i className="fas fa-chevron-right fa-icon" />
          <span className="circle" />
          </Link>
        </div>
      </div> 

      </div>
    </div>
  </div>
</div>
</SwiperSlide>


    </Swiper>
    </div>
  );
   
}

export default AllSliders;
