import React from "react";
import { CoverH1 } from "./AboutElements";
const PersonCardRight = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          width: "50vw",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#041321",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "25vw",
            marginRight: "4vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CoverH1 style={{ fontSize: "20px", color: "#738A9D" }}>
            Jeff Hammond is Executive Director at the International Ground
            Source Heat Pump Association (IGSHPA). Jeff earned a B.S. in
            business administration from the University of Saint Francis in Fort
            Wayne, Indiana, and an A.A.S. in electrical engineering technology
            from Purdue University. He has over 35 years’ experience in the
            ground source heat pump (geothermal) industry, including positions
            at ClimateMaster, Enertech, Geo-Flo, and WaterFurnace. Jeff is a
            member of ASHRAE (American Society of Heating, Refrigerating, and
            Air Conditioning Engineers), AEE (Association of Energy Engineers),
            ASAE (American Society of Association
          </CoverH1>
        </div>
        <div style={{ height: "20vw", position: "relative" }}>
          <img
            src="image/person2.png"
            style={{
              height: "20vw",
              width: "20vw",
              borderRadius: "10px",
              borderWidth: "10px",
              borderColor: "#1B233F",
            }}
            alt="Person"
          />
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              width: "20vw",
              height: "4vw",
              position: "absolute",
              bottom: 0,
              left: 0,
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <CoverH1 style={{ fontSize: "25px" }}>Jeff Hammond</CoverH1>
            <CoverH1 style={{ fontSize: "20px", marginTop: "3px" }}>
              EXECUTIVE DIRECTOR
            </CoverH1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCardRight;
