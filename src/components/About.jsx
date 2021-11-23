import React from "react";
import "./About.scss";

const About = ({ hero }) => {
  return (
    <div className="about">
      <div className="about-card">
        {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h2 className="info1">{item.description}</h2>
              <p className="info2">{item.tecnhologies}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
