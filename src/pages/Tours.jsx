import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {CATEGORIES_TOURS} from "../media/tours"
import firmawhite from "../assets/firmawhite.jpeg";

const Tours = ({ scrollRef }) => {
  let navigate = useNavigate();

  useEffect(() => {
    const refElement = document.querySelector(
      `.tour-box[data-name="${scrollRef.current}"]`
    );
    if (refElement) {
      window.scrollTo({ top: refElement.offsetTop - 65, behavior: "instant" });
    } else window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleClick = (endPoint) => {
    scrollRef.current = null;
    navigate(endPoint);
  };

  return (
    <section className="tours-section">
      <article className="info-container">
        <div className="intro-container">
          <h3 className="intro-container-title">
            ¿Qué es un Tour Virtual 360°?
          </h3>
          <p className="intro-container-data">
            Empezaremos explicando, de la forma más fácil, que es un tour
            virtual de 360 grados. Un tour virtual es una herramienta digital e
            interactiva que agrupa un conjunto de fotos de 360 grados y que
            atráves de estas se genera un recorrido para mostrar espacios
            espefícios o de interés, por ejemplo los distintos espacios dentro
            de un restaurante o un bar, el salón de un auto y las diversas
            vistas de este o una habitación de hotel con todos los beneficios
            que puede brindar. Además, que al ser una herramienta digital, el
            tour virtual se puede visualizar en diversos dispositivos como un
            smartphone, una tableta, una computadora convencional de escritorio,
            una laptop o portatil o, para una opción más inmersiva, con lentes
            de realidad virtual, esto hace que esta tecnología esté al alcance
            de todos y en casi todos los dispositivos que hoy en día usamos.
          </p>
        </div>
        <div className="card-container">
          <div className="card">
            <h4 className="card-header">Fácil implementación</h4>
            <p className="card-text">
              La implementación es rápida, ya sea en páginas que usen
              plataformas CMS como WordPress u otros sistemas, lo único que se
              debe de hacer practicamente es subir ciertos archivos o imágenes.
            </p>
          </div>
          <div className="card">
            <h4 className="card-header">Interacción</h4>
            <p className="card-text">
              Lograrás un nivel de interacción mayor con tus clientes y posibles
              clientes al mostrarles tus servicos o productos de una forma única
              y poco convencional.
            </p>
          </div>
          <div className="card">
            <h4 className="card-header">Diferenciación</h4>
            <p className="card-text">
              Aún los tours virtuales no son muy conocidos, es por esto que si
              empiezas ya, será un punto de diferenciación frente a tus
              competidores.
            </p>
          </div>
          <div className="card">
            <h4 className="card-header">Más ventas</h4>
            <p className="card-text">
              Aumenta tus ventas al tener a tu público cautivado. Imagínate a
              tus clientes sintiendo y viendo a detalle, por ejemplo, una
              habitación y todos sus beneficios antes de estar en ella.
            </p>
          </div>
        </div>
      </article>

      {CATEGORIES_TOURS.map((ct, index) => <CategoryObj key={index} scrollRef={scrollRef} categoryObj={ct} />)}

      <div className="btn-container">
        <button className="link-btn" onClick={() => handleClick("/")}>
          Inicio
        </button>
      </div>
    </section>
  );
};

const CategoryObj = ({ scrollRef, categoryObj}) => {

  const [show, setShow] = useState(true)

  const handleClick = () => {
    scrollRef.current = null;
    setShow((prev) => !prev);
  };

  return (
    <article className="tour-category-container">
      <div className="tour-header" onClick={handleClick}>
        <span className="tour-header-name">{categoryObj.name}</span>
        <div className="tour-header-line"></div>
        <div className="tour-header-icon-box">
          {show ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {show && (
        <div className="tour-gallery">
          {categoryObj.tours.map((tour, tourIndex) => (
            <TourElement tour={tour} key={tourIndex} />
          ))}
        </div>
      )}
    </article>
  )
}

const TourElement = ({ tour }) => {
  const firstName = tour.name.split(" ")[0];

  const [showTour, setShowTour] = useState(false);

  const handleClick = () => {
    setShowTour(true)
}
  return (
    <div className="tour-box" data-name={firstName}>
    {showTour ? (<TourView src={tour.src} setShowTour={setShowTour} />)
    : (<div className="tour-img-box" onClick={handleClick}>
      <img loading="lazy" className="tour-img" src={tour.image} alt={tour.name} width="200px" hight="150px"/>
      <span className="tour-text">Ver Tour</span>
    </div>)}
      <h3 className="tour-name">{tour.adress}</h3>
    </div>
  );
};

const TourView = ({src, setShowTour}) => {
return (
  <div className="iframe-container">
    <span className="cargando-text">Cargando</span>
    <span className="tour-loader"></span>
    <iframe className="iframeFull" src={src}/>
    <div className="iframe-header">
      <div className="iframe-signature">
        <img src={firmawhite} alt="signature logo" />
      </div>
      <button className="close-iframe-btn" onClick={() => setShowTour(false)}>X</button>
    </div>
  </div>
);
}

export default Tours;
