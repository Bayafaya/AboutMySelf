import React, { useContext } from 'react';
import { motion } from "framer-motion";
import discord from "../../img/discord.png";
import telegram from "../../img/telegram.png";
import google from "../../img/google.png";
import instagram from "../../img/instagram.png";
import whats from "../../img/whatsapp.png";
import github from "../../img/github-logo-silhouette-in-a-square.png";
import { AuthContext } from "../../Context";
import './Footer.css'

function Footer() {
    const {soundPLay} = useContext(AuthContext)
  return (
    <motion.div
    animate={{ y: 0, opacity: 1 }}
    initial={{ y: 400, opacity: 0 }}
    transition={{ duration: 1.5 }}
    className="icons"
  >
    <a
      href="https://discord.gg/j2BgM5V6"
      target="_blank"
      rel="noopener noreferrer"
      onClick={soundPLay} 
    >
      <img src={discord} alt="none" className="icon"/>
    </a>
    <a
      href="https://t.me/baya_faya"
      target="_blank"
      rel="noopener noreferrer"
      onClick={soundPLay} 
    >
      <img src={telegram} alt="none" className="icon" />
    </a>
    <a
      href="mailto:bayelibraev1@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={soundPLay} 
    >
      <img src={google} alt="none" className="icon" />
    </a>
    <a
      href="https://www.instagram.com/bayel_ibraev"
      target="_blank"
      rel="noopener noreferrer"
      onClick={soundPLay} 
    >
      <img src={instagram} alt="none" className="icon" />
    </a>
    <a
      href="https://wa.me/996708792569"
      target="_blank"
      rel="noopener noreferrer"
      onClick={soundPLay} 
    >
      <img src={whats} alt="none" className="icon" />
    </a>
    <a
      href="https://github.com/Bayafaya"
      target="_blank"
      rel="noopener noreferrer"
      onClick={soundPLay} 
    >
      <img src={github} alt="none" className="icon" />
    </a>
  </motion.div>
  )
}

export default Footer;