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



const Card = () =>{
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
        Unlock new business opportunities with mobile apps
        </span>
        <p>
        We help companies identify and unlock opportunities in mobility. Apps we develop bring the power of enterprise solutions to your workforce while delivering consumer-grade user experience.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/powerenterprise.svg" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <p>
        We have been helping companies in Manufacturing, Banking, Telecom, Retail, and other industries build enterprise mobile apps. Our apps have helped automate 90% of operations for a transportation company, cut down the maintenance cost for a food company by 40%

        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/helpedautomate.svg" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
        Strategy and consulting to set the right goals
        </span>
        <p>
        We collaborate with you to understand your business needs, identify processes that can be streamlined, define the user experience, and build a tech delivery roadmap that aligns with your goals.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/deliveryroadmap.svg" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
        Bringing the Lean approach to apps
        </span>
        <p>
        Our Product team takes your ideas and turns them into high output apps with high ROI and retention rates. We use user research, user testing, and design thinking to bring consumerization to your IT.

        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/retentionrates.svg" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
        Incorporate security best practices
        </span>
        <p>
        Mobile app testing best practices reduce the security risks, tests potential vulnerabilities and incorporates data encryption. With all the steps we take, you can be confident that mobile apps will always be secure.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/secuirityrisks.svg" alt="image" className="img-fluid" /></div>
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

export default Card;
