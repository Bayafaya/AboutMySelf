import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Works from "./Pages/Works/Works";
import axios from "axios";
import { AuthContext } from "./Context";
import { Howl } from 'howler';
import clickSound from "./sounds/6a6ad928cfac061.mp3";


function App() {
  const [user, setUser] = useState({});
  const [arrayRepos, setArrayRepos] = useState([]);

  useEffect(() => {
    fetching();
  }, []);


  async function fetching() {
    await axios.get("https://api.github.com/users/Bayafaya").then(response => {
      setUser(response.data)
      axios.get(response.data.repos_url)
        .then(element => setArrayRepos(element.data))
    })
      .catch(error => console.error(error))
  }


  const soundPLay = () => {
    const sound = new Howl({
      src: clickSound,
      html5: true
    })
    sound.play();
  }

  return (
    <AuthContext.Provider value={{
      user,
      soundPLay,
      arrayRepos,

    }}>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Works />} />
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
