import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
 
import 'swiper/swiper-bundle.css';
import 'swiper/css/autoplay';
export default function App() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    autoplay={{ delay:3000 }}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
    <SwiperSlide>
      <img src="Images/img1.jpg" alt=""  style={{width:"100%",height:"80vh",marginTop:"55px"}}/>
    </SwiperSlide>
    <SwiperSlide>
    <img src="Images/img2.jpg" alt="" style={{width:"100%", height:"80vh",marginTop:"55px"}}/>
    </SwiperSlide>
    <SwiperSlide>  <img src="Images/img3.jpg" alt="" style={{width:"100%",height:"80vh",marginTop:"55px"}}/></SwiperSlide>
    <SwiperSlide>  <img src="Images/img4.jpg" alt="" style={{width:"100%",height:"80vh",marginTop:"55px"}}/></SwiperSlide>
  </Swiper>
  );
};
