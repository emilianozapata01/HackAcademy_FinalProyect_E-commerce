import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="containe">
        <div className="row mb-5">
          <div className="col-12 mb-4">
            <img
              className="img-fluid image-size"
              src="https://juiceshop.com/cdn/shop/files/learnBanner_2000x.jpg?v=1613735059"
              alt="countryside"
            />
          </div>

          <div className="col-6 ">
            <img
              className="img-fluid image-size custom-shadow"
              src="https://juiceshop.com/cdn/shop/files/JuiceShop-190_1000x.jpg?v=1613750484"
              alt="making-juice"
            />
          </div>

          <div className="col-6 d-flex align-items-center justify-content ">
            <div className="text-center">
              <h4>OUR JUICE</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                aperiam inventore numquam commodi incidunt impedit rerum
                reiciendis sequi. Adipisci et odit assumenda tempore quas
                facilis architecto ratione doloribus provident? Modi!
              </p>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center justify-content-center mt-5">
            <div className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
              nulla suscipit nostrum quas voluptatibus dolorem incidunt sapiente
              esse voluptates repudiandae doloremque in possimus aspernatur
              cupiditate odit dolore, culpa ducimus architecto.
            </div>
          </div>
          <div className="col-6 mt-5">
            <img
              className="img-fluid image-size custom-shadow"
              src="https://juiceshop.com/cdn/shop/files/DSC_9824-MHS-medres_1000x.jpg?v=1613739049"
              alt="walking-outside"
            />
          </div>

          <div className="col-6 mt-5">
            <img
              className="img-fluid image-size custom-shadow"
              src="https://juiceshop.com/cdn/shop/files/16_Juice_Shop_Andria_Lo_1000x.jpg?v=1613750481"
              alt="walking-outside"
            />
          </div>

          <div className="col-6 d-flex align-items-center justify-content-center mt-5">
            <div className="text-center">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                corrupti facere voluptates numquam, totam optio voluptatum
                commodi quibusdam voluptatem iure in illo dicta? Enim sapiente
                officiis id quibusdam, itaque laborum?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
