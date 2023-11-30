import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUsStyle from "../styles/views/AboutUs.module.css";
function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="d-flex  ">
        <div className=" mb-5 d-flex flex-column">
          <div>
            <img
              className={`img-fluid ${AboutUsStyle.imageSize}`}
              src="https://juiceshop.com/cdn/shop/files/learnBanner_2000x.jpg?v=1613735059"
              alt="countryside"
            />
          </div>
          <div className="d-flex flex-row">
            <div className="col-6 ">
              <img
                className={`img-fluid ${AboutUsStyle.imageSize} ${AboutUsStyle.customShadow}`}
                src="https://juiceshop.com/cdn/shop/files/JuiceShop-190_1000x.jpg?v=1613750484"
                alt="making-juice"
              />
            </div>

            <div className="col-6 d-flex align-items-center justify-content p-5 ">
              <div className="text-start">
                <h4>OUR JUICE</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eaque aperiam inventore numquam commodi incidunt impedit rerum
                  reiciendis sequi. Adipisci et odit assumenda tempore quas
                  facilis architecto ratione doloribus provident? Modi!
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="col-6 d-flex align-items-center justify-content-center mt-5 p-5">
              <div className="text-start">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora, nulla suscipit nostrum quas voluptatibus dolorem
                incidunt sapiente esse voluptates repudiandae doloremque in
                possimus aspernatur cupiditate odit dolore, culpa ducimus
                architecto.
              </div>
            </div>
            <div className="col-6 ">
              <img
                className={`img-fluid ${AboutUsStyle.imageSize} ${AboutUsStyle.customShadow}`}
                src="https://juiceshop.com/cdn/shop/files/DSC_9824-MHS-medres_1000x.jpg?v=1613739049"
                alt="walking-outside"
              />
            </div>
          </div>
          <div className="d-flex flex-row">
            <div className="col-6 ">
              <img
                className={`img-fluid ${AboutUsStyle.imageSize} ${AboutUsStyle.customShadow}`}
                src="https://juiceshop.com/cdn/shop/files/16_Juice_Shop_Andria_Lo_1000x.jpg?v=1613750481"
                alt="walking-outside"
              />
            </div>

            <div className="col-6 d-flex align-items-center justify-content-center p-5 mt-2">
              <div className="text-start">
                <h4>SUSTAINABILITY</h4>
                <p>
                  At Juice Shop we are a mission driven company. When we
                  officially opened our doors in 2010 we made the decision that
                  our community, teams and offerings were going to be the
                  priority. We adopted the philosophy to think big and to lead
                  with our hearts. This quickly segued into working closely with
                  local organic farms and cultivating long-standing
                  relationships in alignment with seasonality and availability.
                  Along with supporting sustainable and organic farming
                  practices, glass has always been at the forefront of Juice
                  Shop’s guiding principles. We choose glass not only because it
                  retains the flavor of the juice and is the safest material to
                  drink from (glass does not degrade or leach chemicals), but it
                  is the best choice for the environment. We buy back all of our
                  16oz juice bottles after use to wash, reuse, and create a
                  closed-loop system. We have saved over 5 million plastic
                  bottles (and counting) from entering landfills and waterways.
                  As a mindful business, we believe that this accountability for
                  our practices can create a significant impact and stand for
                  something larger than ourselves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
