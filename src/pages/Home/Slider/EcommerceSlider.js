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



const EcommerceSlider = () =>{
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
            eCommerce development from scratch
        </span>
        <p>
           Right from suggesting you the right platform and technology stacks to providing highly qualified eCommerce developers, Simform helps you build a robust online store that is flexible, scalable, and easy to manage. Our experts keep in mind important aspects such as design and usability, technology, security, future scalability, and integration options that will help you meet future business needs.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/development-from-scratch.PNG" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
          <span>
              Seamless website launch
          </span>
        <p>
            Launching an eCommerce website can be tricky as it involves many important considerations to ensure that your online store works seamlessly and has no bugs or glitches. At Simform, we make sure that the eCommerce website is aligned with your business goals while providing you with the guidance and support you need.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/eCommerce-website-launch.png" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
            eCommerce site optimization
        </span>
        <p>
           Whether you want to add new features to your eCommerce website, redefine UI/UX or integrate third-party tools to deliver a better customer experience and unlock new business opportunities, Simform can certainly help you. Our experts will first understand business pain points and then provide you the most suitable solution to increase your website performance and generate more sales.

        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/eCommerce-website-optimization.png" alt="image" className="img-fluid" /></div>
  </div>
</div>
</SwiperSlide>


<SwiperSlide>
   <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="common-heading text-l">
        <span>
            eCommerce migration
        </span>
        <p>
            If you are struggling with the current eCommerce platform and looking for eCommerce website migration services, Simform can help you do the job with complete integrity and security. We have adequate expertise to migrate content pages, products database, order history, contacts database, design elements, site configuration and more using sophisticated tools to ensure that your data remains accurate.
        </p>
       
      </div>
    </div>
    <div className="col-lg-6 lead-intro-"><img src="/asset/images/sliders/eCommerce-migration.png" alt="image" className="img-fluid" /></div>
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

export default EcommerceSlider;
