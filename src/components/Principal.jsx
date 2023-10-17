import portada2 from "../assets/portada2.jpg";
import { EXPERIENCIAS } from "../data/data.js"

export const Principal = () => {
  return (
    <section className="principal">

      <article className="hero-header">
        <p className="hero-title">Mi experiencia</p>
        <div className="hero-img2-box">
          <img className="hero-img2" src={portada2} alt="portada 2" />
        </div>
      </article>

      <article className="skills-container">
        <div className="skills-half-left">
          <p className="skills-half-title">Habilidades</p>
          <ul className="skills-list">
            <li><span className="skills-circle" data-num="1"></span>Tours Virtuales 360</li>
            <li><span className="skills-circle" data-num="2"></span>Fotografía para inmobiliarias</li>
            <li><span className="skills-circle" data-num="3"></span>Avance de obra</li>
            <li><span className="skills-circle" data-num="4"></span>Empresas</li>
            <li><span className="skills-circle" data-num="5"></span>Particulares</li>
            <li><span className="skills-circle" data-num="6"></span>Artística Fine Art</li>
            <li><span className="skills-circle" data-num="7"></span>Minimalista</li>
            <li><span className="skills-circle" data-num="8"></span>Renders arquitectónicos y 3D</li>
            <li><span className="skills-circle" data-num="9"></span>Diseño y desarrollo de páginas web</li>
          </ul>
        </div>

        <div className="skills-half-right">
          <p className="skills-half-title">Experiencia Laboral</p>
          <ul className="works-list">
            {EXPERIENCIAS.map((li, index) => <li key={index}>{li}</li>)}
          </ul>
        </div>
      </article>
    </section>
  );
};
