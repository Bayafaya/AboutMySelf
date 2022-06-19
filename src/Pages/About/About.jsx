import React, {useContext, useEffect} from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { AuthContext } from "../../Context";
import "./About.css";

function About() {
  const {user,soundPLay} = useContext(AuthContext);
  const userTyped = useSelector(state=>state.searchUser.searchUser);
  console.log(userTyped)
  
  return (
    <div className="container">
      <Header/>
      <div className="profileBlock">
        <img alt="none" src={user.avatar_url} className="avatar" />
       
        <div className="informBlock"> 
          <div className="inform_item">
            Login:{" "}
            {user.login !== null ? (
              <span style={{ fontWeight: 400}}>{user.login}</span>
            ) : (
              <span style={{ fontWeight: 400}}>there is no Login</span>
            )}
           
          </div>
               
          <div className="inform_item">
            Email:{" "}
            {user.email !== null ? (
              <span style={{ fontWeight: 400}}>{user.email}</span>
            ) : (
              <span style={{ fontWeight: 400}}>there is no Email</span>
            )}
          </div>

          <div className="inform_item">
            Company:{" "}
            {user.company !== null ? (
              <span style={{ fontWeight: 400}}>{user.company}</span>
            ) : (
              <span style={{ fontWeight: 400}}>there is no Company</span>
            )}
          </div>

          <div className="inform_item">
            Location:{" "}
            {user.location !== null ? (
              <span style={{ fontWeight: 400}}>{user.location}</span>
            ) : (
              <span style={{ fontWeight: 400}}>there is no Location</span>
            )}
          </div>

          <div className="inform_item">
            Bio:{" "}
            {user.bio !== null ? (
              <span style={{ fontWeight: 400}}>{user.bio}</span>
            ) : (
              <span style={{ fontWeight: 400}}>there is no Bio</span>
            )}
          </div>

          <div className="inform_item">
            URL:{" "}
            {user.url !== null ? (
              <a onClick={soundPLay} className="url" target='_blank' href={user.html_url} rel="noreferrer">{user.html_url}</a>
            ) : (
              <span style={{ fontWeight: 400}}>there is no URL</span>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default About;