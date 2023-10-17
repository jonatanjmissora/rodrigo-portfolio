import { useNavigate } from "react-router-dom";
import { Principal } from "../components/Principal";
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Works } from "../components/Works";
import { InicioBtns } from "../components/InicioBtns"

const Home = ({ scrollRef }) => {

  window.scrollTo({ top: 0, behavior: "instant" });



  return (
    <main>
      <Hero />
      <Works scrollRef={scrollRef} />
      <Principal />
      <InicioBtns scrollRef={scrollRef}/>
    </main>
  );
};

export default Home
