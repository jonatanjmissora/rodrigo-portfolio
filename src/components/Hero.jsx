import { useNavigate } from "react-router-dom";
import portada1 from "../assets/portada1.webp";

export const Hero = () => {
  let navigate = useNavigate();
  return (
    <article className="hero-container">
      <span className="hero-name">Rodrigomphotos</span>
      <div className="hero-half-left">
        <span className="hero-subname">Fotografía Arquitectónica</span>
        <button
          className="hero-contact-btn"
          onClick={() => navigate("/contact")}
        >
          Contacto
        </button>
      </div>
      <div className="hero-half-right">
        <img className="hero-img" src={portada1} alt="portada 1" />
      </div>
    </article>
  )
}
