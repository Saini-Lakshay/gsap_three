import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Highlights from "./Highlights";
import { Model } from "./Model";

const AppleHome = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
};

export default AppleHome;
