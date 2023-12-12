import React, { useEffect } from "react";
import ButtonUpStyle from "../styles/views/ButtonUp.module.css";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
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
      <KeyboardDoubleArrowUpIcon
        className={ButtonUpStyle.ButtonUp}
        sx={{ fontSize: 40 }}
      />
    </button>
  );
};

export default ButtonUp;
