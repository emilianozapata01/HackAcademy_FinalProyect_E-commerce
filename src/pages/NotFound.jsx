// import Footer from "../components/Footer";
import NotFoundVideo from "/videos/NotFoundVideo.mp4";
import NotFoundStyle from "../styles/views/NotFound.module.css";
import { useNavigate } from "react-router";

function NotFound({ setShowNavAndFooter }) {
  setShowNavAndFooter(false);
  const navigate = useNavigate();
  return (
    <>
      <video autoPlay loop muted className={NotFoundStyle.notFoundVideo}>
        <source src={NotFoundVideo} type="video/mp4" />
      </video>
      <div className="d-flex flex-column justify-content-center vh-100">
        <div className="d-flex justify-content-center align-items-center gap-2 rrrttt">
          <span className={NotFoundStyle.ooops}>Ooops!</span>
          <span className={NotFoundStyle.messageNotFound}>Juice Not Found</span>
        </div>
        <div
          className={`${NotFoundStyle.bgObale} d-flex justify-content-center align-items-center mb-5`}
        >
          <span className={`${NotFoundStyle.titleText} pe-3`}>4</span>
          <img src="NotFoundImg.png" alt="" style={{ height: "10rem" }} />
          <span className={`${NotFoundStyle.titleText}`}>4</span>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className={NotFoundStyle.backBtn}
            onClick={() => {
              navigate("/");
            }}
          >
            <span>Back to Home</span>
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default NotFound;
