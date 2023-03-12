import React from "react";
import './ItemNav.css'
import { Link } from "react-router-dom";

function ItemLi({ link, title, menuHide}) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <li onClick={menuHide}className="itemNav" >{title}</li>
    </Link>
  );
}

export default ItemLi;
