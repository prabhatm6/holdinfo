import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <nav className="footer">
      <ul className="footer__list">
        <li className="footer__item">Copyright &copy; 2019</li>
        <li>Hodlinfo.com</li>
        <li>
          Developed By
          <Link>QuadBTech</Link>
        </li>
      </ul>

      <li className="footer__contact">
          <Link>support</Link>
      </li>
    </nav>
  );
};

export default Footer;
