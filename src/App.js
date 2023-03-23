import Home from "./home/Home";
import NavBar from "./components/NavBar/NavBar";
import Description from "./components/Description/Description";
import Panel from "./components/Panel/Panel";
import Characters from "./views/Characters/Characters";
import Episodies from "./views/Episodies/Episodies";
import Generate from "./views/Generate/Generate";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Description />
      <Panel />
      <div className="containerViews">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/episodies" element={<Episodies />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
