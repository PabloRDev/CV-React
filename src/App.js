import React from "react";
import "./App.scss";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Languages from "./components/Languages";

import { CV } from "./cv/cv";

const { hero, education, languages } = CV;

function App() {
  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <Education education={education} />
      <Languages languages={languages} />
    </div>
  );
}

export default App;
