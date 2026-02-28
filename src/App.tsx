import "./App.css";
import { Routes, Route } from "react-router-dom";
import Resume from "./components/pages/Resume";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import ScrollHandler from "./components/ScrollHandler";

function App() {



  return (
   <div className={`bg-bgdark h-[100%]`}>
        <ScrollHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumo" element={<Resume />} />
        <Route path="/projetos" element={<Work />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </div>
  );
}


export default App;
