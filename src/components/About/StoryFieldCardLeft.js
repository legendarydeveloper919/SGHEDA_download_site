import React from "react";
import { CoverH1 } from "./AboutElements";
const StoryFieldCardLeft = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
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
          width: "45%",
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
          Jeff Hammond is Executive Director at the International Ground Source
          Heat Pump Association (IGSHPA). Jeff earned a B.S. in business
          administration from the University of Saint Francis in Fort Wayne,
          Indiana, and an A.A.S. in electrical engineering technology from
          Purdue University. He has over 35 years’ experience in the ground
          source heat pump (geothermal) industry, including positions at
          ClimateMaster, Enertech, Geo-Flo, and WaterFurnace. Jeff is a member
          of ASHRAE (American Society of Heating, Refrigerating, and Air
          Conditioning Engineers), AEE
        </CoverH1>
      </div>
    </div>
  );
};

export default StoryFieldCardLeft;
