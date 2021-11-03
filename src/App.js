import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Habilities from "./components/Habilities";
import Volunteer from "./components/Volunteer";

import { CV } from "./cv/cv";

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <Education education={education} />
      <Experience experience={experience} />
      <Languages languages={languages} />
      <Habilities habilities={habilities} />
      <Volunteer volunteer={volunteer} />
    </div>
  );
}

export default App;
