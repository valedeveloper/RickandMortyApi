import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import ItemNav from "../ItemNav/ItemNav";
import "./NavBar.css";
function NavBar() {
  const [isHover, setIsHover] = useState(false);
  const [stateMenu, setStateMenu] = useState(false);
  const listItemNav = [
    {
      id: 1,
      title: "Personajes",
      link: "/characters",
    },
    {
      id: 2,
      title: "Episodios",
      link: "/episodies",
    },
    {
      id: 3,
      title: "Generador",
      link: "/generate",
    },
  ];
 
  const enterHover = () => {setIsHover(true);};
  const leaveHover = () => {setIsHover(false);};
  const showMenu = () => {setStateMenu(true);};
  const hideMenu=()=>{ setStateMenu(false)}

  return (
    <nav className="containerNav">
      <Link to="/">
        <img
          className="logoNav"
          onMouseEnter={enterHover}
          onMouseLeave={leaveHover}
          src={
            isHover
              ? "/assets/logoMortySinFondo.png"
              : "/assets/logoRickySinFondo.png"
          }
        />
      </Link>
      <ul className={"listItemsNav " + (stateMenu && "navResponsive")}>
        {listItemNav.map((item) => (
          <ItemNav
            key={item.id}
            id={item.id}
            title={item.title}
            link={item.link}
            menuHide={hideMenu}
          />
        ))}
      </ul>
      <div className="mobile">
        {!stateMenu ? (
          <AiOutlineMenu onClick={showMenu} className="iconMenu" />
        ) : (
          <AiOutlineClose onClick={hideMenu} className="iconMenu" />
        )}
      </div>
    </nav>
  );
}

export default NavBar;
