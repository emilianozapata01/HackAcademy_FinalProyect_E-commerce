import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import SwiperStyle from "../styles/components/SwiperHome.module.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SwiperHome() {
  //   const imgArr = [
  //     {
  //       id: 1,
  //       original: "24_Juice_Shop_Andria_Lo.webp",
  //       text: "Indulge in Pure Freshness! Vibrant juices that awaken your senses. Discover a burst of natural flavors. Order now and savor the goodness!",
  //       class: "firstText",
  //     },
  //     {
  //       id: 2,
  //       original: "Green-Header-1.jpg",
  //       text: `100% Organic · Bay area made · Family owned`,
  //       class: "secondText",
  //     },
  //     {
  //       id: 3,
  //       original: "Tonic-2.webp",
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorum.",
  //       class: "thirdText",
  //     },
  //     {
  //       id: 4,
  //       original: "305849026_511483600978910_7244055434825137908_n.jpg",
  //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorum.",
  //       class: "fourthText",
  //     },
  //   ];
  const imgArr = [
    {
      id: 1,
      original: "5.jpg",
      text: "Indulge in Pure Freshness! Vibrant juices that awaken your senses. Discover a burst of natural flavors. Order now and savor the goodness!",
      class: "firstText",
    },
    {
      id: 2,
      original: "Green-Header-1.jpg",
      text: `100% Organic · Bay area made · Family owned`,
      class: "secondText",
    },
    {
      id: 3,
      original: "Tonic-2.webp",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorum.",
      class: "thirdText",
    },
    {
      id: 4,
      original: "305849026_511483600978910_7244055434825137908_n.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorum.",
      class: "fourthText",
    },
  ];
  return (
    <div className={SwiperStyle.main}>
      <Swiper
        flipEffect={false}
        spaceBetween={50}
        centeredSlides={false}
        autoplay={{
          delay: 3000,
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
