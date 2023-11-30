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
      renderLeftNav={(onClick) => (
        <div
          type="button"
          className="image-gallery-icon image-gallery-left-nav"
          aria-label="Previous Slide"
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>
        </div>
      )}
      renderRightNav={(onClick) => (
        <div
          type="button"
          className="image-gallery-icon image-gallery-right-nav"
          aria-label="Next Slide"
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </div>
      )}
    />
  );
}

export default SlideImagesHome;
