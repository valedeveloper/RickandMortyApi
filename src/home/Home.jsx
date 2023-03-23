import React from "react";
import "./Home.css";
import {  Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="containerHome">
        <Link to="/characters">
          <button type="button" className="sectionHome">
            Iniciar
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
