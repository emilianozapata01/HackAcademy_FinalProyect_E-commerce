import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";

import AddToCart from "./AddToCart";
import { useNavigate } from "react-router-dom";

function Glide({ products }) {
  const navigate = useNavigate();
  return (
    <>
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
              <div >
                <img onClick={() => navigate(`/product/${product._id}`)} className="custom-image" src={product.image} alt="" />
                <p className="text-center h">{product.name}</p>
                <p className="text-center h">${product.price}</p>
                <div className="h mb-5">
                  <AddToCart product={product} qty={1} classBtn={"custom-btn-swiper custom-btn-swiper-product"} />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Glide;
