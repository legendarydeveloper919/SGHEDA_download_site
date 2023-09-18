import React from "react";
import { CoverH1 } from "./AboutElements";
const StoryFieldCardRight = () => {
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20px",
        padding: "100px",
      }}
    >
      <div
        style={{
          width: "55%",
          display: "flex",
          flexDirection: "column",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <CoverH1
          style={{
            textAlign: "left",
            fontSize: "36px",
            textDecoration: "underline",
            color: "#000",
          }}
        >
          Our Mission
        </CoverH1>
        <CoverH1
          style={{
            marginTop: "50px",
            textAlign: "left",
            fontSize: "24px",
            color: "#738A9D",
          }}
        >
          Imagine reducing energy bills, while contributing to the fight against
          climate change. Yes, all this is possible with our ground heat
          exchanger design solution, which offers environmentally-friendly and
          cost-effective heating and cooling systems. <br></br>Whether you're a
          homeowner, a contractor or a large organization, our program provides
          a unique model to meet every specific need. It deals with an array of
          use cases with the utmost precision. <br></br>Our modeling method uses
          sophisticated mathematical principles and fluid dynamics to create an
          optimal slinky loop configuration. It's adaptable and versatile,
          catering to a wide range of soil and climate conditions. We believe
          everyone could have access to sustainable, green solutions because
          making a difference to the environment should be within everyone’s
          reach.
        </CoverH1>
      </div>
      <div style={{ width: "40%", display: "flex", justifyContent: "center" }}>
        <img
          src="image/story2.png"
          alt="storyfield"
          style={{ width: "450px", height: "430px" }}
        ></img>
        <img
          src="image/story1.png"
          alt="storyfield"
          style={{ width: "420px", height: "400px", position: "absolute" }}
        ></img>
      </div>
    </div>
  );
};

export default StoryFieldCardRight;
