import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="" />
      <div className="card">
        <h1>
          {hero.name} {hero.lastName}
        </h1>
        <p>🗺️ {hero.location} </p>
        <p>
          📧 <a href={"mailto:" + hero.email}>pabloriojod@gmail.com</a>
        </p>
        <p>
          📱 <a href="tel:003463686107">{hero.phone}</a>
        </p>
        <p>
          📁{" "}
          <a href={hero.cv} target="_blank" rel="noreferrer">
            Download my CV
          </a>
        </p>
        <p>
          💼 <a href={hero.linkedIn}>Linkedin</a>
        </p>
        <p>
          💾 <a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
