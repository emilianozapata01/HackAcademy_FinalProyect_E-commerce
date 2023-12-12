import Footer from "../components/Footer";
import AboutThisProyectStyle from "../styles/views/AboutThisProyect.module.css";
import { LiaBootstrap } from "react-icons/lia";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiMongoose } from "react-icons/si";
import { useEffect } from "react";
import ButtonUp from "../components/ButtonUp";
function AboutThisProyect({ hovered, setShowNavAndFooter }) {
  useEffect(() => {
    setShowNavAndFooter(true);
  }, []);
  return (
    <div className={hovered ? "bg-dark-hover-nav " : ""}>
      <div className="container">
        <ButtonUp />
        <div className="d-flex flex-column align-items-center mt-5">
          <h1>About this project & the team behind</h1>
          <p className="text-secondary mt-3">
            Durante nuestro Coding Bootcamp en Hack Academy entre septiembre y
            diciembre de 2023, creamos Juice Shop como proyecto final. En un
            equipo de 4 integrantes, nos propusimos desarrollar un e-commerce en
            apenas 3 semanas. Utilizamos tecnologías clave como React.js para el
            Front-End, Node.js y Express.js para el Back-End, junto con MongoDB
            como base de datos. Nos inspiramos en el sitio oficial de Juice Shop
            y en Little's para dar forma a nuestra plataforma, aplicando nuestra
            creatividad y conocimientos para adaptarla a nuestras necesidades.
            {/* 
            During our Coding Bootcamp at Hack Academy between September and December 2023, we created Juice Shop as our final project. In a team of 4 members, we set out to develop an e-commerce platform in just 3 weeks. We utilized key technologies such as React.js for the Front-End, Node.js and Express.js for the Back-End, along with MongoDB as the database. Drawing inspiration from the official Juice Shop website, we shaped our platform, applying our creativity and knowledge to tailor it to our specific needs. */}
          </p>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="me-5">
            <hr />
            <p className="fw-bold">Metodología</p>
            <span className="text-secondary">
              {" "}
              Empleamos la metodología SCRUM. Durante el transcurso del trabajo
              pasamos por 3 Sprints, uno por semana, y cada uno de ellos fue
              finalizado con una DEMO para mostrar los avances logrados
            </span>
          </div>
          <div className="ms-5">
            <hr />
            <p className="fw-bold">Organización</p>
            <span className="text-secondary">
              {" "}
              Para nuestro equipo fue fundamental dividirnos las tareas. Para
              ello nos apoyamos en la herramienta de proyectos de GitHub. Fue de
              gran ayuda para marcarnos objetivos cortos y claros.
            </span>
          </div>
        </div>
        <p className="text-center fw-bold mt-5">Tecnologías</p>
        <div className="d-flex flex-wrap justify-content-center">
          <div
            className={AboutThisProyectStyle.techUsed}
            style={{ color: "#7533fa" }}
          >
            <LiaBootstrap className={AboutThisProyectStyle.icons} />
            <span>Bootstrap</span>
          </div>
          <div
            className={AboutThisProyectStyle.techUsed}
            style={{ color: "rgb(8 126 164)" }}
          >
            <FaReact size={"36px"} />
            <span>React</span>
          </div>
          <div
            className={AboutThisProyectStyle.techUsed}
            style={{ color: "#487651" }}
          >
            <FaNodeJs />
            <span>Node.js</span>
          </div>
          <div
            className={AboutThisProyectStyle.techUsed}
            style={{ color: "#00685b" }}
          >
            <SiMongodb />
            <span>MongoDB</span>
          </div>
          <div
            className={AboutThisProyectStyle.techUsed}
            style={{ color: "#353535" }}
          >
            <SiExpress />
            <span>Expressjs</span>
          </div>
          <div
            className={AboutThisProyectStyle.techUsed}
            style={{ color: "#764abc" }}
          >
            <SiRedux />
            <span>Redux</span>
          </div>
          <div
            className={AboutThisProyectStyle.techUsed}
            style={{ color: "#010409" }}
          >
            <FaGithub />
            <span>GitHub</span>
          </div>
          <div
            className={AboutThisProyectStyle.techUsed}
            style={{ color: " #800" }}
          >
            <SiMongoose />
            <span>Mongoose</span>
          </div>
        </div>
        <div className="d-flex mt-5">
          <div className="d-flex flex-column mt-4 gap-3">
            <div>
              <p className="fw-bold ">MER</p>
              <span className="text-secondary">
                {" "}
                En la primera etapa del proyecto realizamos un diagrama MER para
                definir las entidades que consideramos necesarias y establecer
                sus respectivas relaciones.
              </span>
            </div>
            <div>
              <p className="fw-bold">Entidades</p>
              <span className="text-secondary">
                {" "}
                Las entidades definidas fueron Product, Category, Order, Buyer y
                Admin. Debido al alcanze del proyecto y para reducir
                complejidad, decidimos que Buyer y Admin fueran entidades
                independientes.
              </span>
            </div>
            <div>
              <p className="fw-bold">Relaciones</p>
              <span className="text-secondary">
                {" "}
                Un producto puede estar en muchas órdenes y cada una de éstas
                pueden tener muchos productos. Una categoría puede tener muchos
                productos, pero un producto solo podrá estar en una categoría.
                El cliente podrá tener muchas órdenes pero cada orden
                pertenecerá a un solo cliente.
              </span>
            </div>
          </div>
          <div>
            <img className="imgATP" src="image.png" alt="" />
          </div>
        </div>
        <div className="d-flex mt-5 ">
          <img className="imgATP" src="image2.png" alt="" />
          <div>
            <div className="d-flex flex-column mt-4 gap-3">
              <div>
                <p className="fw-bold ">Front-End</p>
                <span className="text-secondary">
                  {" "}
                  Creimos conveniente crear dos proyectos de Front
                  independientes. Uno para el e-commerce y otro para la
                  Administración. Las principales tecnologías utilizadas fueron
                  React.js, Redux y React-Router.
                </span>
              </div>
              <div>
                <p className="fw-bold">Back-End</p>
                <span className="text-secondary">
                  {" "}
                  Nos basamos en un entorno de Node.js con Express.js. A través
                  de JWT generamos dos tokens distintos para diferenciar el
                  acceso de un cliente al de un administrador.
                </span>
              </div>
              <div>
                <p className="fw-bold">Base de Datos</p>
                <span className="text-secondary">
                  {" "}
                  Optamos por usar mongoDB para nuestra Base de Datos, ya que
                  tenemos más afinidad con el desarrollo en mongoose.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h1>Nuesto Equipo</h1>
          <div className="mt-3 d-flex flex-wrap justify-content-center mt-4 gap-5">
            <div>
              <div className={`mb-3 ${AboutThisProyectStyle.border}`}>
                <img
                  className={`mb-3 ${AboutThisProyectStyle.ProfileImage}`}
                  src="mati.jpeg"
                  alt="El mati"
                />
                <div>
                  <p className="mt-2 mb-0">Matias Barreto</p>
                  <a
                    className="m-3"
                    href="https://www.linkedin.com/in/matias-barreto/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className={AboutThisProyectStyle.border}>
                <img
                  className={`mb-3 ${AboutThisProyectStyle.ProfileImage}`}
                  src="mati.jpeg"
                  alt="El mati"
                />
                <div>
                  <p className="mt-2 mb-0">Matias Barreto</p>
                  <a
                    className="m-3"
                    href="https://www.linkedin.com/in/matias-barreto/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className={AboutThisProyectStyle.border}>
                <img
                  className={`mb-3 ${AboutThisProyectStyle.ProfileImage}`}
                  src="mati.jpeg"
                  alt="El mati"
                />
                <div>
                  <p className="mt-2 mb-0">Matias Barreto</p>
                  <a
                    className="m-3"
                    href="https://www.linkedin.com/in/matias-barreto/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className={AboutThisProyectStyle.borderLast}>
                <div className={AboutThisProyectStyle.ProfileImage1}>
                  <img
                    className={`mb-3 ${AboutThisProyectStyle.ProfileImage}`}
                    src="mati.jpeg"
                    alt="El mati"
                  />
                </div>
                <div>
                  <p className="mt-2 mb-0">Matias Barreto</p>
                  <a
                    className="m-3"
                    href="https://www.linkedin.com/in/matias-barreto/"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutThisProyect;
