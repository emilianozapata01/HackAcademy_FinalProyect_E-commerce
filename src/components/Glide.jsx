import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";

function Glide({ products }) {
  return (
    <div className=" ">
      <h1 className="text-center">Bestseller</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        slidesPerView={2.3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
      >
        {products
          .filter((product) => product.bestSeller === true)
          .map((product) => (
            <SwiperSlide>
              <div key={product._id}>
                <img className="custom-image" src={product.image} alt="" />
                <div key={product._id} className="h">
                <button className="custom-btn custom-btn-prime-product">
              ADD TO CART
            </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default Glide;
