import { Suspense, lazy, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { GoTop } from "./components/GoTop";
import "./index.css";

const Home = lazy(() => import("./pages/Home"));
const Photos = lazy(() => import("./pages/Photos"));
const Tours = lazy(() => import("./pages/Tours"));
const Videos = lazy(() => import("./pages/Videos"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Test = lazy(() => import("./pages/Test"));

export default function App() {
  const scrollRef = useRef(null);
  return (
    <div className="App">
    <Header scrollRef={scrollRef} />
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<Home scrollRef={scrollRef} />} />
        <Route path="/photos" element={<Photos scrollRef={scrollRef} />} />
        <Route path="/tours" element={<Tours scrollRef={scrollRef} />} />
        <Route path="/videos" element={<Videos scrollRef={scrollRef} />} />
        <Route path="/about" element={<About scrollRef={scrollRef} />} />
        <Route path="/contact" element={<Contact scrollRef={scrollRef} />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      </Suspense>
      <GoTop />
    </div>
  );
}

// arreglar las imagenes
// arreglar los alt="" y titulos de las imagenes
// el title de los links tambien
