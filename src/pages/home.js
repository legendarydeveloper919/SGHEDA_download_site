import React, { useState } from "react";
import CoverSection from "../components/CoverSection";
import Footer from "../components/Footer";
import WorkSection from "../components/Works";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Description from "../components/Description";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar toggle={toggle} />
      <CoverSection />
      <Services />
      <WorkSection />
      <Description />
      <Footer />
    </>
  );
};

export default Home;
