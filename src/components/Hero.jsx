import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
      <div className="card">
        <h2>
          {hero.name} {hero.lastName}
        </h2>
        <p>🗺️ {hero.location} </p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>pabloriojod@gmail.com</a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>
          💾 <a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
