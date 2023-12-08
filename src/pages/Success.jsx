import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import SuccessStyle from "../styles/views/Success.module.css";
function Success({ setShowNavAndFooter }) {
  const navigate = useNavigate();
  useEffect(() => {
    setShowNavAndFooter(true);
  }, []);
  return (
    <>
      <video muted autoPlay loop>
        <source src="./videos/successVideo.mp4" type="video/mp4" />
      </video>

      <div className={` text-center mt-5 ${SuccessStyle.promo}`}>
        <h1 className={SuccessStyle.SuccessTittle}>Sweet!</h1>
        <p className={SuccessStyle.SuccessText}>
          Your order has been approved.
        </p>
        <p className={SuccessStyle.SuccessText}>
          In 3-5 days, juiciness knocks on your door! 🎉🥤{" "}
        </p>
        <p className={SuccessStyle.SuccessText}>
          Thanks for buying at Juice Shop.
        </p>
        <button
          className={SuccessStyle.SuccessButton}
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </div>
    </>
  );
}

export default Success;
