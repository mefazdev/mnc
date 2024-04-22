import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
 
import "swiper/css";
 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function MobPosters({ poster }) {
  return (
    <div className="px-4 mt-7  py-6  bg-black bg-opacity-80">
      <Swiper
        className="mySwiper"
     
        centeredSlidesBounds
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {poster?.map((d, i) => {
          return (
            <SwiperSlide key={i}>
              <div>
                <img src={d.image} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
