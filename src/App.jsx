import { useState } from "react";

import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}

export default App;
