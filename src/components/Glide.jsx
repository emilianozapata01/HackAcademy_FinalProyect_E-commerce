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
      <h1 className="text-center mt-5 woolwich bestseller">Bestseller</h1>
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
              <div>
                <img
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="custom-image"
                  src={product.image}
                  alt=""
                />
                <div className="d-flex justify-content-center gap-2">
                  <p className="woolwich hSwiper h fs-4">{product.name}</p>
                  <p className="woolwich h fs-4">${product.price}</p>
                </div>
                <div className="h mb-5">
                  <AddToCart
                    product={product}
                    qty={1}
                    classBtn={
                      "btn btn-success custom-btn-swiper-product woolwich fs-5 p-0"
                    }
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Glide;
