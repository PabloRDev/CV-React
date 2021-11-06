import React from "react";
import "./Education.scss";

const Education = ({ education }) => {
  return (
    <div className="education">
      <div className="education-card">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h2 className="name">📕 {item.name}</h2>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
