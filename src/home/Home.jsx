import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Description from '../components/Description/Description';
import Panel from '../components/Panel/Panel';
import Characters from '../views/Characters/Characters';
import Episodies from '../views/Episodies/Episodies';
import Generate from '../views/Generate/Generate';
import Footer from '../components/Footer/Footer';
import './Home.css';
import { Routes, Route, Link } from 'react-router-dom';
function Home() {
  return (
    < >
      <NavBar />
      <Description />
      <Panel />
      <div className="containerViews">
        <Routes>
          <Route path='/' element={<div className="containerHome"><Link to="/characters"><button  type='button' className='sectionHome'>Iniciar</button></Link></div>} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/episodies' element={<Episodies />} />
          <Route path='/generate' element={<Generate />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default Home