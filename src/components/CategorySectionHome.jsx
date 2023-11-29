import { Link } from "react-router-dom";
import HomeStyle from "../styles/views/Home.module.css";

function CategorySectionHome() {
  return (
    <div className="d-flex flex-column mt-5">
      <h1 className={`text-center text-dark ${HomeStyle.ourProductTitle} mb-4`}>
        OUR PRODUCTS
      </h1>
      <div className="d-flex flex-column">
        <div className="d-flex flex-wrap justify-content-center">
          <Link
            to="/sparkling-juice"
            className={`${HomeStyle.categoryBoxSize}`}
          >
            <img
              className={HomeStyle.categoryBoxSizeCAN}
              src="can.png"
              alt="Sparkling Juice"
            />
            <button className={HomeStyle.buttonCategoriesSparkling}>
              SPARKLING TONICS
            </button>
          </Link>
          <Link to="/nut-milks&smoothies" className={`${HomeStyle.categoryBoxSize}`}>
            <img
              className={HomeStyle.categoryBoxSizePROTEIN}
              src="proteina.PNG"
              alt="NUT MILKS & SMOOTHIES"
            />
            <button className={HomeStyle.buttonCategoriesNutMilks}>
              NUT MILKS & SMOOTHIES
            </button>
          </Link>
        </div>
        <div className="m-auto d-flex flex-wrap justify-content-center">
          <Link
            to="/juices"
            className={` ${HomeStyle.categoryBoxSize}`}
          >
            <img
              className={HomeStyle.categoryBoxSizeJUICE}
              src="juices.PNG"
              alt="juices"
            />
            <button className={HomeStyle.buttonCategories}>JUICES</button>
          </Link>
          <Link to="/elixirs" className={`${HomeStyle.categoryBoxSize}`}>
            <img
              className={`${HomeStyle.categoryBoxSizeELIXIR}`}
              src="elixir0.png"
              alt="Elixir"
            />

            <button className={HomeStyle.buttonCategories}>ELIXIRS</button>
          </Link>
        </div>
        <div className="text-center mt-5">
          <Link to="/all-products">
            <button className={HomeStyle.shopAllButton}>SHOP ALL</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategorySectionHome;
