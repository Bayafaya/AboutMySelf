import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './Home.css';



function Home() {
  return (
    <div className="container">
      <Header/>
      <div className="mainBlock">
        {/* <motion.div
          animate={{ opacity: 0.7, x: 0 }}
          initial={{ opacity: 0, x: -400 }}
          transition={{ duration: 1.5 }}
          className="sideTxt">
          <h6>Bayel_Ibraev</h6>
        </motion.div> */}

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -400 }}
          transition={{ duration: 1.5 }}
          className="mainTxt"
        >
          <h2>Bayel Ibraev</h2>
        </motion.div>
        {/* <motion.div
          animate={{ opacity: 0.7, x: 0 }}
          initial={{ opacity: 0, x: -400 }}
          transition={{ duration: 1.5 }}
          className="sideTxt"
        >
          <h6>baya_faya</h6>
        </motion.div> */}
      </div>
      <Footer />
    </div>


  );
}
export default Home;
