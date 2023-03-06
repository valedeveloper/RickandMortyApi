import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillCopyrightCircle,
} from "react-icons/ai";

import "./Footer.css";
function Footer() {
  return (
    <footer className="containerFooter">
      <div className="footerTop">
        <div className="containerSocial">
          <BsFacebook />
          <AiFillInstagram />
          <AiFillGithub />
        </div>
        <p className="textEmail">vjimenezbedoya@gmail.com</p>
      </div>
      <div className="footerBottom">
        <AiFillCopyrightCircle className="iconCopy" />
        <p>
          Valeria Jiménez Bedoya<span> | Desarrolladora</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
