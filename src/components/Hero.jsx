import { useNavigate } from "react-router-dom";
import portada1 from "../assets/portada1.webp";

export const Hero = () => {
  let navigate = useNavigate();
  return (
    <article className="hero-container">
      <h1 className="hero-name">Rodrigomphotos</h1>
      <div className="hero-half-left">
        <h2 className="hero-subname">Fotografía Arquitectónica</h2>
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
