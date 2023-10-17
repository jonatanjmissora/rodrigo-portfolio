import { useNavigate } from "react-router-dom";

export const InicioBtns = ({ scrollRef }) => {
  let navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "instant" });

  const handleClick = (endPoint) => {
    scrollRef.current = null;
    navigate(endPoint);
  };

  return (
    <div className="inicio-btns-container">
      <button className="link-btn" onClick={() => handleClick("/photos")}>
        Galeria de Imagenes
      </button>
      <button className="link-btn" onClick={() => handleClick("/tours")}>
        Tours Virtuales
      </button>
      <button className="link-btn" onClick={() => handleClick("/videos")}>
        Videos 360
      </button>
      <button className="link-btn" onClick={() => handleClick("/contact")}>
        Contacto
      </button>
    </div>
  )
}
