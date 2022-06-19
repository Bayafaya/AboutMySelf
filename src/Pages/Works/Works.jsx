import React, { useContext} from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { AuthContext } from "../../Context";
import { motion } from "framer-motion";
import './Works.css';

function Works() {
  const {arrayRepos,soundPLay} = useContext(AuthContext);
  const sortedRepos = arrayRepos.filter(
    (repos) => repos.private === false
  );

 
  return (
    <div className="container">
      <Header />
      <div className="reposBlock">
        {sortedRepos.map((repos) => (
          <motion.a
          key={repos.id}
          animate={{ opacity: 1,x:0 }}
          initial={{ opacity: 0,x:-400 }}
          transition={{ duration: 1.5 }}
            target="_blank"
            rel="noreferrer"
            onClick={soundPLay}
            className="reposA"
            href={repos.clone_url} 
          >
            {repos.name}
          </motion.a>
        ))}
      </div>
      <Footer />
    </div>
   
  );
}

export default Works;
