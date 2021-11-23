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
    <>
      <div className="App">
        <Hero hero={hero} />
        <About hero={hero} />
        <Education education={education} />
        <Languages languages={languages} />
      </div>
      <footer>
        <p>
          &copy; 2021, by <a href="https://github.com/PabloRDev"> PabloRDev</a>
        </p>
      </footer>
    </>
  );
}

export default App;
