import React from "react";
import { CoverH1 } from "./AboutElements";
const StoryFieldCardLeft = () => {
  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20px",
        padding: "90px",
      }}
    >
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
          Our Story
        </CoverH1>
        <CoverH1
          style={{
            marginTop: "50px",
            textAlign: "left",
            fontSize: "24px",
            color: "#738A9D",
          }}
        >
          Our collective is starting prototype construction for a blockchain
          mining shipping container project in January using PV power at a
          nominal 50kw of processing energy, as a primary product. <br></br>"Why
          does everyone I know want to buy earth-friendly option, but very few
          do?" is a question that they pondered in the year spent preparing for
          construction. One solution required a novel application of ground
          loops borrowed from GHSP practice, and led to the development of our
          heat analysis engine.<br></br> So, we developed a modelling method
          that uses sophisticated mathematical principles and fluid dynamics to
          create an optical slinky loop configuration that can be used for any
          use cases and validated our design using ANSYS Fluent. After going
          through all the verification steps, we released SGHEDA and hope will
          contribute to the world efforts for fight against climate change.
        </CoverH1>
      </div>
    </div>
  );
};

export default StoryFieldCardLeft;
