import React from "react";
import "./Volunteer.scss";

const Volunteer = ({ volunteer }) => {
  return (
    <div className="volunteer">
      <div className="volunteer-card">
      <h3>Volunteer</h3>
        {volunteer.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p class="text">{item.name}</p>
              <p class="text">{item.where}</p>
              <p class="text">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Volunteer;
