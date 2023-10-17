import { useNavigate } from "react-router-dom";
import { VIDEOS } from "../media/videos";

const Videos = ({scrollRef}) => {

  window.scrollTo({ top: 0, behavior: "instant" });
  let navigate = useNavigate();

  const handleClick = (endPoint) => {
    scrollRef.current = null;
    navigate("/");
  };

  return <section className="videos-section">
    <h2 className="videos-title">Videos 360</h2>
    <article className="videos-gallery">
      {VIDEOS.map((video, videoIndex) => (
            <Video video={video} key={videoIndex} />
          ))}

    </article>
    <div className="btn-container">
      <button className="link-btn" onClick={() => handleClick("/")}>
        Inicio
      </button>
    </div>
  </section>
}

export default Videos

const Video = ({video}) => {
  return (
    <div className="video-box">
      <video
      className="video"
        src={video.src}
        width="315"
        height="315"
        autoPlay
        muted
        loop
      />
    </div>
  );
}
