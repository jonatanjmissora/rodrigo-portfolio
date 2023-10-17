import { useNavigate } from "react-router-dom";
import acercade from "../assets/acercade.webp";

const About = ({ scrollRef }) => {
  let navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "instant" });

  const handleClick = (endPoint) => {
    scrollRef.current = null;
    navigate(endPoint);
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-img-box">
          <img className="about-img" src={acercade} alt="about-me-img" />
        </div>
        <p className="about-text">
          "Me fascina mi trabajo e intento transmitir esta pasión en cada uno de
          los proyectos que realizo. Mantener el ojo atento a las necesidades de
          mis clientes me da la idea para crear imágenes que se diferencian del
          resto. Si te ocupas de tus proyectos, tanto como yo, Estoy para
          ayudarte! Puedes contactarme para cualquier consulta o asesoramiento."
        </p>
      </div>
      <div className="btn-container">
        <button className="link-btn" onClick={() => handleClick("/")}>
          Inicio
        </button>
      </div>
    </section>
  );
};

export default About;
