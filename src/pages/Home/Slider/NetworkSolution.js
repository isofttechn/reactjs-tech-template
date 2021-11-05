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



const Netsolved = () =>{
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
        Internet for Business
        </span>
        <p>
            We provide Internet Access service which supports applications that require access to and from the Internet in real-time; enabling employees and external stakeholders to share information via reliable, fast and secure access to the global internet.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/networl1.webp" alt="image" className="img-fluid" /></div>
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
        Home Network Connect

        </span>
        <p>
            Our home services designed to meet the needs of users that require superior internet experience at their homes. The service runs off our Fibre-Optic connection to your house using state-of-the art technology with enhanced dynamic configurations for improving security and flexibility, making it possible to enjoy faster surfing experience anywhere.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/home.png" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
            Hotel Network Connect
        </span>
        <p>
            Our Hotel Connect Service provides you with the scalable bandwidth to cater for your clients’ needs. You get a 75% increase in your allocated bandwidth from 7.00pm to 7.00am, at no extra cost, giving you the opportunity to provide the best in class service for your clients.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/hotel.webp" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
          Networking and communication devices 
        </span>
        <p>
          We work hard to increase our client's productivity and revenues by addressing the gaps in their current communication infrastructure and company procedures.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/network.png" alt="image" className="img-fluid" /></div>
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

export default Netsolved;
