import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/components/SlideImagesHome.css";

function SlideImagesHome({ hovered }) {
  const imgArr = [
    {
      id: 1,
      original: "24_Juice_Shop_Andria_Lo.webp",
      originalHeight: "500em",
      originalClass: `${hovered && "obscurecerSlide"} original-image-slide`,
    },
    {
      id: 2,
      original: "DSC_9620-MHS-medres.webp",
      originalHeight: "500em",
      originalClass: `${hovered && "obscurecerSlide"} original-image-slide`,
    },
    {
      id: 3,
      original: "Green-Header-1.webp",
      originalHeight: "500em",
      originalClass: `${hovered && "obscurecerSlide"} original-image-slide`,
    },
    {
      id: 5,
      original: "Tonic-2.webp",
      originalHeight: "500em",
      originalClass: `${hovered && "obscurecerSlide"} original-image-slide`,
    },
    {
      id: 6,
      original: "305849026_511483600978910_7244055434825137908_n.jpg",
      originalHeight: "500em",
      originalClass: `${hovered && "obscurecerSlide"} original-image-slide`,
    },
  ];
  return (
    <ImageGallery
      showBullets={true}
      items={imgArr}
      infinite={true}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay={true}
      slideInterval={3000}
    />
  );
}

export default SlideImagesHome;
