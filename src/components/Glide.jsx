import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";

function Glide({ products }) {
  return (
    <div className=" ">
      <h1 className="text-center mt-5 woolwich">Bestseller</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        centeredSlides={true}
        slidesPerView={2.2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper swip"
      >
        {products
          .filter((product) => product.bestSeller === true)
          .map((product) => (
            <SwiperSlide key={product._id}>
              <div key={product._id}>
                <img className="custom-image" src={product.image} alt="" />
                <p className="text-center h">{product.name}</p>
                <p className="text-center h">${product.price}</p>
                <div key={product._id} className="h mb-5">
                  <button className="custom-btn-swiper custom-btn-swiper-product">
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
