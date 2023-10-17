import {useState} from "react";
import firmawhite from "../assets/firmawhite.jpeg";
import {CATEGORIES_TOURS} from "../media/tours";
const Test = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="test-section">
    {CATEGORIES_TOURS.map(tour =>
      {show ? (
        <Iframe setShow={setShow}/>
      ) : (<button onClick={() => setShow(true)}>tour.name</button>) }

    )}
    </section>

  );

}

const Iframe = ({setShow}) => {
  return (
    <div className="iframe-container">
      <iframe className="iframeFull" src="https://kuula.co/share/collection/7FzH7"/>
      <div className="iframe-header">
        <div className="iframe-signature">
          <img src={firmawhite} alt="signature logo" />
        </div>
        <button className="close-iframe-btn" onClick={() => setShow(false)}>X</button>
      </div>
    </div>
  )
}

export default Test;
