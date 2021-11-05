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



const GreenEner = () =>{
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
           Home Energy Assessment
        </span>
        <p>
            When our experts make a FREE ENERGY ASSESSMENT on your home, we’ll calculate your HER Index rating. This helps determine how energy efficient your home is.
            If you’re solid, we’ll let you know. If we find gaping opportunities, we’ll calculate how much savings you can expect by installing our green energy solutions.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/green-home-inspect-22.png" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
          <span>
              POWER YOUR HOME WITH SUSTAINABLE AND CLEAN ENERGY
          </span>
        <p>
            Investing in a solar energy system on your home roofing is a good way to save money, protect yourself from future energy rate increases, and help the environment by going green. 
            We offers you affordable on-grid solar energy system packages for residential use. 
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/green-home-inspect-lessprice.png" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
           Commercial Energy Assessment
        </span>
        <p>
            Take advantage of your roof space by installing the right solar energy system to reduce your electricity costs, maximize return on investment, and help save the environment.
          We offers a wide range of packages for small businesses, commercial companies, educational institutions, government offices, agricultural farms, manufacturing sites and real estate developers.

        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/Commercial-energy-2.png" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
          ENERGY MONITORING DEVICES, THE ENERGY DETECTIVE (TED)
        </span>
        <p>
          Comprehensive &amp; Interactive Data Logging Software TED Footprints software presents a comprehensive, user-friendly dashboard of your electricity usage in real time. View your current rate structure, projected bill, voltage, daily usage, highs and lows, and much more instantly!

        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/energy-monitor.png" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


{/* <SwiperSlide>
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
</SwiperSlide> */}


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

export default GreenEner;
