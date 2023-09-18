import React, { useState, useEffect } from "react";
import CoverSection from "../components/CoverSection";
import Footer from "../components/Footer";
import WorkSection from "../components/Works";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Description from "../components/Description";
import FeedbackSection from "../components/Feedback";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_ADDRESS}/api/visitor`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({}), // Replace with the request body if needed
          }
        );
        const data = await response.json();
        // Handle the response data
        console.log("here!!!!!--", data);
      } catch (error) {
        // Handle any errors
        console.error(error);
      }
    };

    sendData();
  }, []);
  console.log(`${process.env.REACT_APP_SERVER_ADDRESS}/api/visitor`);

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
      <FeedbackSection />
      <Footer />
    </>
  );
};

export default Home;
