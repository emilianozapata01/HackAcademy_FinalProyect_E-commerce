// import Footer from "../components/Footer";
import NotFoundVideo from "/videos/NotFoundVideo.mp4";
import NotFoundStyle from "../styles/views/NotFound.module.css";

function NotFound() {
  return (
    <>
      <video autoPlay loop muted id="not-found-video">
        <source src={NotFoundVideo} type="video/mp4" />
      </video>
      <div className="d-flex flex-column justify-content-center mt-5">
        <div className="d-flex justify-content-center align-items-center gap-2 rrrttt">
          <span className={NotFoundStyle.ooops}>Ooops!</span>
          <span className={NotFoundStyle.messageNotFound}>Page Not Found</span>
        </div>
        <div
          className={`${NotFoundStyle.bgObale} d-flex justify-content-center align-items-center mb-5`}
        >
          <span className={`${NotFoundStyle.titleText} pe-3`}>4</span>
          <img src="NotFoundImg.png" alt="" style={{ height: "10rem" }} />
          <span className={`${NotFoundStyle.titleText}`}>4</span>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button className={NotFoundStyle.backBtn}>
            <span>Back to Home</span>
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default NotFound;
