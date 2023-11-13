import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { PHOTOS } from "../media/galery";
import tour360 from "../assets/tour360.png";
import firmawhite from "../assets/firmawhite.jpeg";

const Photos = ({ scrollRef }) => {
  let navigate = useNavigate();
  useEffect(() => {
    let topPosition = 0;
    if (scrollRef.current) {
      const refElement = document.querySelector(
        `.photo-company-container[data-name="${scrollRef.current}"]`
      );
      topPosition = refElement.offsetTop;
    }
    window.scrollTo({ top: topPosition, behavior: "instant" });
  }, []);

  const handleClick = (endPoint) => {
    scrollRef.current = null;
    navigate(endPoint);
  };

  return (
    <section className="photo-section">
      {PHOTOS.map((company, companyIndex) => (
        <CompanyList
          scrollRef={scrollRef}
          company={company}
          key={companyIndex}
        />
      ))}
      <div className="btn-container">
        <button className="link-btn" onClick={() => handleClick("/")}>
          Inicio
        </button>
      </div>
    </section>
  );
};

const CompanyList = ({ scrollRef, company }) => {
  const [showPhotos, setShowPhotos] = useState(true);
  const firstName = company.name.split(" ")[0];

  return (
    <article className="photo-company-container" data-name={firstName}>
      <div
        className="photo-header"
        onClick={() => setShowPhotos((prev) => !prev)}
      >
        <h3 className="photo-header-name">{company.name}</h3>
        <div className="photo-header-line"></div>
        <div className="photo-header-icon-box">
          {showPhotos ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      <CompanyPhotos
        scrollRef={scrollRef}
        company={company}
        showPhotos={showPhotos}
      />
    </article>
  );
};

const CompanyPhotos = ({ scrollRef, company, showPhotos }) => {
  let navigate = useNavigate();

  const [showTour, setShowTour] = useState(false);

  const firstName = company.name.split(" ")[0];
  const handleClick = () => {
    setShowTour(true)
  };
  return (
    <>
      {showPhotos && (
        <div className="photo-gallery" data-name={firstName}>
          {company.tour !== "" ? (
            showTour ? (<TourView src={company.tourSrc} setShowTour={setShowTour} />)
            : (<div className="photo-tour-img-container" onClick={handleClick}>
              <p className="photo-tour-img-header">Vista</p>
              <img className="photo-tour-img" src={tour360} alt="tour 360" />
            </div>)
          ) : null}
          {company.photos.map((photo, photoIndex) => (
            <PhotoElement photo={photo} key={photoIndex} alt={firstName + photoIndex}/>
          ))}
        </div>
      )}
    </>
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

const PhotoElement = ({ photo, alt }) => {
  return (
    <div className="photo-img-box">
      <img loading="lazy" className="photo-img" src={photo} alt={alt} width="200px" hight="150px"/>
    </div>
  );
};

export default Photos
