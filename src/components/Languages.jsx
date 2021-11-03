import React from "react";
import "./Languages.scss";

const Languages = ({ languages }) => {
  return (
    <div className="languages">
      <div className="languages-card">
        <h3>{languages.language}</h3>
        <p>{languages.wrlevel}</p>
        <p>{languages.splevel}</p>
      </div>
    </div>
  );
};

export default Languages;
