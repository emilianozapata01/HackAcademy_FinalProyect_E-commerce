import Footer from "../components/Footer";
import AboutThisProyectStyle from "../styles/views/AboutThisProyect.module.css";
import { LiaBootstrap } from "react-icons/lia";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiMongoose } from "react-icons/si";

function AboutThisProyect({ hovered }) {
  return (
    <div className={hovered ? "bg-dark-hover-nav " : ""}>
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <h1>About this proyect & the team behanid</h1>
          <p>
            Durante nuestro Coding Bootcamp en Hack Academy entre septiembre y
            diciembre de 2023, creamos Juice Shop como proyecto final. En un
            equipo de 4 integrantes, nos propusimos desarrollar un e-commerce en
            apenas 3 semanas. Utilizamos tecnologías clave como React.js para el
            Front-End, Node.js y Express.js para el Back-End, junto con MongoDB
            como base de datos. Nos inspiramos en el sitio oficial de Juice Shop
            para dar forma a nuestra plataforma, aplicando nuestra creatividad y
            conocimientos para adaptarla a nuestras necesidades.
          </p>
        </div>
        <div className="d-flex justify-content-center ">
          <p> mas texto de axel</p>
          <p> mas texto de axel</p>
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <div className={AboutThisProyectStyle.techUsed}>
            <LiaBootstrap className={AboutThisProyectStyle.icons} />
            <span>Bootstrap</span>
          </div>
          <div className={AboutThisProyectStyle.techUsed}>
            <FaReact size={"36px"} />
            <span>React</span>
          </div>
          <div className={AboutThisProyectStyle.techUsed}>
            <FaNodeJs />
            <span>Node.js</span>
          </div>
          <div className={AboutThisProyectStyle.techUsed}>
            <SiMongodb />
            <span>MongoDB</span>
          </div>
          <div className={AboutThisProyectStyle.techUsed}>
            <SiExpress />
            <span>Expressjs</span>
          </div>
          <div className={AboutThisProyectStyle.techUsed}>
            <SiRedux />
            <span>Redux</span>
          </div>
          <div className={AboutThisProyectStyle.techUsed}>
            <FaGithub />
            <span>GitHub</span>
          </div>
          <div className={AboutThisProyectStyle.techUsed}>
            <SiMongoose />
            <span>Mongoose</span>
          </div>
        </div>
        <div>mer al estilo axel</div>
        <div> resumen front al estilo axel</div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutThisProyect;
