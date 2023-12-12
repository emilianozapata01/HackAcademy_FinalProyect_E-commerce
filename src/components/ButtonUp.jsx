import React, { useEffect } from "react";
import ButtonUpStyle from "../styles/views/ButtonUp.module.css";

const ButtonUp = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      className={`woolwich ${ButtonUpStyle.ScrollToTop}`}
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      Scroll to top
    </button>
  );
};

export default ButtonUp;
