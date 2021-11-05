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



const CustomSoftDev = () =>{
  return (
        <div>
          
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      centeredSlides = {true}
      // navigation
      autoplay = {true}
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
         scrollbar : {draggable: true }
         
        },
        480: {
          width: 480,
          slidesPerView: 1,
          spaceBetween: 40,
         scrollbar : {draggable: true }

        },
        640: {
          width: 640,
          slidesPerView: 1,
          spaceBetween: 50,
         scrollbar : {draggable: true }
        },
      }}
    >
    
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
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/tailored.svg" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <p>
        From an in-depth analysis of your business to developing custom software and from user training to maintaining applications, we advise on what technologies to invest in, what technical architecture to choose, as well as consult on how to achieve the required level of data protection.

        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/dataprotection.svg" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
        Understanding your business goals

        </span>
        <p>
        Let’s discuss your short and long-term vision in-depth. When we know your goals and understand existing software, we are able to ensure the success of the project.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/businessgoal.svg" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
        Well-architectured solution for scale
        </span>
        <p>
        We take a pragmatic approach to software architecture and design. Choosing important areas worth investing upfront, and prioritize others afterward. We also provide data protection consultation.

        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/architectured.svg" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
        Goal driven user experience (UX) design
        </span>
        <p>
        Good software design helps drive user satisfaction. We perform UX research to align overall experience with your goals and users’ needs and let you make well-informed decisions.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/uxdesign.svg" alt="image" className="img-fluid" /></div>
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

export default CustomSoftDev;
