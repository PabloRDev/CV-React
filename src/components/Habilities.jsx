import React from "react";
import "./Habilities.scss";

const Habilities = ({ habilities }) => {
  return (
    <div className="habilities">
      <div className="habilities-card">
        <h3>Skills</h3>
        {habilities.map((item) => {
          return (
            <ul key={JSON.stringify(item)}>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Habilities;
