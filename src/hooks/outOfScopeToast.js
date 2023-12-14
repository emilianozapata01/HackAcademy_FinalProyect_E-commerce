import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const outOfScopeToast = () => {
  toast.info("This feature is not within the project's scope.", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  });
};

export default outOfScopeToast;
