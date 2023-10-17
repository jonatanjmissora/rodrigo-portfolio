import { useNavigate } from "react-router-dom";
import { WORKS, WORKS_LINK } from "../media/works";

export const Works = ({ scrollRef }) => {
  let navigate = useNavigate();

  const handleClick = (name) => {
    const firstName = name.split(" ")[0];
    console.log(firstName)
    scrollRef.current = firstName;
    navigate(WORKS_LINK[firstName]);
  };

  return (
    <section className="work-section">
      <h1 className="work-title">Trabajos</h1>
      <article className="work-container">
        {WORKS.map((work, workIndex) => (
          <div
            className="work"
            key={workIndex}
            onClick={() => handleClick(work.name)}
          >
            <img className="work-img" src={work.img} alt={work.name}></img>
          </div>
        ))}
      </article>
    </section>
  );
};
