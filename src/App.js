import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import ServiceSection from "./components/ServiceSection";

import "./assets/scss/main.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <ServiceSection />
      <About />
      <Footer />
    </Fragment>
  );
}

export default App;
