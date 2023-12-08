import React from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";
import SuccessStyle from "../styles/views/Success.module.css";
function Success() {
  const navigate = useNavigate();
  return (
    <>
      <div className={` text-center mt-5`}>
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
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Success;
