import "@styles/modules/about.scss";
import Image1 from "@assets/img/img1.png";
import Image2 from "@assets/img/img2.jpeg";
import Image3 from "@assets/img/img3.jpg";
import Image4 from "@assets/img/img4.jpg";

import Logo from "@components/svgr/GivenSvg";
import { BsGithub } from "react-icons/bs";

const About = () => (
  <main className="main main--about">
    <section className="about">
      <div className="content">
        <Logo />
        <div className="text">
          <h2>Sobre Nosotros</h2>
          <h5>Desarrolladores y diseñadores</h5>
          <p>
            Somos una organizacion de desarrolladores y diseñadores enfocados en
            brindar soluciones de alta gama dentro de los cuales se encuentran
            servicios como un procesos de matricula para estudiantes, donde el
            estudiante se podra registrar y loguearse para poder realizar sus
            matricula y una vez finalizado este proceso podra ver los cursos en
            los cuales se encuentra matriculado de una forma sencilla y rapida.
          </p>
        </div>
      </div>
    </section>

    <section className="content">
      <div className="container">
        <div className="card-section">
          <div className="card">
            <header className="card-header">Alejandro Oroncoy Almeyda</header>
            <div className="card-body">
              <div className="img img--alejo">
                <img src={Image1} alt="Foto de Alejandro Oroncoy Almeyda" />
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/alejooroncoy"
              >
                Github <BsGithub size={18} />
              </a>
            </div>
            <footer className="card-footer">7 de Enero 2023</footer>
          </div>
          <div className="card">
            <header className="card-header">Mario Grande Contreras</header>
            <div className="card-body">
              <div className="img">
                <img src={Image2} alt="Foto de Mario Grande Contreras" />
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Mario2701"
              >
                Github <BsGithub size={18} />
              </a>
            </div>
            <footer className="card-footer">7 de Enero 2023</footer>
          </div>
          <div className="card">
            <header className="card-header">York Antayhua Cortez</header>
            <div className="card-body">
              <div className="img">
                <img src={Image4} alt="Foto de York Antayhua Cortez" />
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/york30"
              >
                Github <BsGithub size={18} />
              </a>
            </div>
            <footer className="card-footer">7 de Enero 2023</footer>
          </div>
          <div className="card">
            <header className="card-header">Yhancarlos Gonzales Javier</header>
            <div className="card-body">
              <div className="img">
                <img src={Image3} alt="Foto de Yhancarlos Gonzales Javier" />
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/YHAGON"
              >
                Github <BsGithub size={18} />
              </a>
            </div>
            <footer className="card-footer">7 de Enero 2023</footer>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default About;

// # I will work from this point
