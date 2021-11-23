import React from "react";
import "./Languages.scss";

const Languages = ({ languages }) => {
  return (
    <div className="languages">
      <div className="languages-card">
        <h3>{languages.language}</h3>
        <p>{languages.wrlevel} Professional level</p>
        <h3>Spanish</h3>
        <p>Native</p>
      </div>
    </div>
  );
};

export default Languages;
