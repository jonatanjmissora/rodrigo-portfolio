import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiSmartphone, FiMail, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { USER } from "../data/data";

const Contact = ({ scrollRef }) => {
  let navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "instant" });

  const handleClick = (endPoint) => {
    scrollRef.current = null;
    navigate(endPoint);
  };

  return (
    <section className="contact-section">
      <div className="logo-box">
        <img src={logo} alt="" />
      </div>
      <div className="contact-render-container">
      <div className="contact-row">
      <FiSmartphone className="contact-icon" n />
      <span className="contact-phone">{USER.phone}</span>
      </div>
          <div className="contact-row">
            <FiSmartphone className="contact-icon" n />
            <span className="contact-phone">{USER.phone2}</span>
          </div>
          <span className="contact-render-text">( Renders - Diseño Web )</span>
      </div>
      <div className="contact-row">
        <FiMail className="contact-icon" />
        <span>{USER.email}</span>
      </div>
      <div className="socials">
        <a href={USER.facebook}>
          <FiFacebook className="social-icon" />
        </a>
        <a href={USER.whatsapp}>
          <FaWhatsapp className="social-icon" />
        </a>
        <a href={USER.instagram}>
          <FiInstagram className="social-icon" />
        </a>
      </div>
      <div className="btn-container">
        <button className="link-btn" onClick={() => handleClick("/")}>
          Inicio
        </button>
      </div>
    </section>
  );
};

export default Contact;
