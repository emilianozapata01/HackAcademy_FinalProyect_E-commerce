import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import SwiperStyle from "../styles/components/SwiperHome.module.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SwiperHome() {
  const imgArr = [
    {
      id: 1,
      original: "2.jpg",
      // text: `100% Organic · Bay area made · Family owned`,
      class: "firstText",
    },
    {
      id: 2,
      original: "pictureFour.jpg ",
      text: "Indulge in Pure Freshness! Vibrant juices that awaken your senses. ",
      class: "secondText",
    },
    {
      id: 4,
      original: "1.jpg ",
      text: "Discover Our Global Oasis! From coast to coast, find our refreshing haven.",
      class: "fourthText",
    },
    {
      id: 3,
      original: "Tonic-2.jpg",
      text: "Sparkle Up Your Day! Our Sparklin' Tonics - a fizz of pure delight. Try one today!",
      class: "thirdText",
    },
    {
      id: 5,
      original: "pictureOne.jpg",
      text: "Streetwise Freshness! Our iconic street stands offer a taste of pure delight.",
      class: "fifthText",
    },
  ];
  return (
    <div className={SwiperStyle.main}>
      <Swiper
        flipEffect={false}
        spaceBetween={50}
        centeredSlides={false}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={SwiperStyle.swiper}
      >
        {imgArr.map((img) => (
          <SwiperSlide
            key={img.id}
            className={SwiperStyle.swiperSlide}
            style={{ backgroundImage: `url(${img.original})` }}
          >
            <span className={SwiperStyle[img.class]}>{img.text}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperHome;
