import React from "react";
import { CoverH1 } from "./AboutElements";
const PersonCard = (props) => {
  const { url, name, role } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          borderRadius: "10px",
        }}
      >
        <div style={{ height: "13vw", position: "relative" }}>
          <img
            src={url}
            style={{
              height: "13vw",
              width: "13vw",
              borderRadius: "10px",
              borderWidth: "10px",
              borderColor: "#1B233F",
            }}
            alt="Person"
          />
          <div
            style={{
              backgroundColor: "rgba(255,255,255,0.2)",
              width: "13vw",
              height: "7vh",
              position: "absolute",
              bottom: 0,
              left: 0,
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <CoverH1 style={{ fontSize: "20px" }}>{name}</CoverH1>
            <CoverH1 style={{ fontSize: "15px", marginTop: "3px" }}>
              {role}
            </CoverH1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
