import React, { useContext} from "react";
import logo from "../../img/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context";
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const { soundPLay } = useContext(AuthContext);

  return (
    <header>
      <motion.img
        src={logo}
        alt="noneavatar"
        className="logo"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
        }}
      />
      <div className="header__items">
        <Link
          onClick={soundPLay}
          to="/home"
          className="header__item"
        >
          Home
        </Link>
        <Link
          onClick={soundPLay}
          to="/about"
          className="header__item"
        >
          About Me
        </Link>
        <Link
          onClick={soundPLay}
          to="/work"
          className="header__item"
        >
          MY WORKS
        </Link>
      </div>
    </header>


  );
}

export default Header;
