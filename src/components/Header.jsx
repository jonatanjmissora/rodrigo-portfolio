import { useNavigate } from "react-router-dom";
import firma from "../assets/firma.png";
import { FaBars } from "react-icons/fa";
export const Header = ({ scrollRef }) => {
  let navigate = useNavigate();

  const toggleHamburguerMenu = () => {
    document.querySelector(".hamb-nav").classList.toggle("animado");
    const hambLinks = document.querySelectorAll(".hamb-link");
    hambLinks.forEach((hambLink) => {
      hambLink.classList.toggle("animado");
    });
  };

  const clickOnMenu = (endpoint) => {
    scrollRef.current = null;
    navigate(endpoint);
    toggleHamburguerMenu();
  };

  const handleClick = (endPoint) => {
    scrollRef.current = null;
    navigate(endPoint);
  };

  return (
    <header className="header">
      <div className="signature-box">
        <img src={firma} alt="signature logo" />
      </div>
      <nav className="nav">
        <ul className="links">
          <li onClick={() => handleClick("/")}>Inicio</li>
          <li onClick={() => handleClick("/photos")}>Galeria</li>
          <li onClick={() => handleClick("/tours")}>Tour</li>
          <li onClick={() => handleClick("/videos")}>Video</li>
          <li onClick={() => handleClick("/about")}>Acerca de</li>
          <li onClick={() => handleClick("/contact")}>Contacto</li>
        </ul>
      </nav>
      <div className="hamb-container">
        <div className="hamb-bars" onClick={toggleHamburguerMenu}>
          <FaBars />
        </div>
        <nav className="hamb-nav">
          <ul className="hamb-list">
            <li className="hamb-link" onClick={() => clickOnMenu("/")}>
              Inicio
            </li>
            <li className="hamb-link" onClick={() => clickOnMenu("/photos")}>
              Galeria de Imagenes
            </li>
            <li className="hamb-link" onClick={() => clickOnMenu("/tours")}>
              Tours Virtuales
            </li>
            <li className="hamb-link" onClick={() => clickOnMenu("/videos")}>
              Videos 360
            </li>
            <li className="hamb-link" onClick={() => clickOnMenu("/about")}>
              Acerca de
            </li>
            <li className="hamb-link" onClick={() => clickOnMenu("/contact")}>
              Contacto
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
