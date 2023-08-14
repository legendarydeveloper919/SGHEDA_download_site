import React from "react";
import {
  CoverContainer,
  CoverContent,
  CoverH1,
  CoverP,
} from "./DescriptionElements";

const Description = () => {
  return (
    <CoverContainer style={{ justifyContent: "flex-start", marginTop: -300 }}>
      <CoverContent style={{ marginTop: "10%", alignItems: "center" }}>
        <CoverH1 style={{ color: "#2A2F34", fontSize: "48px" }}>
          WHAT IS{" "}
          <CoverH1
            style={{
              marginLeft: "10px",
              fontSize: "48px",
              fontWeight: 600,
              color: "#2A2F34",
            }}
          >
            {" "}
            SGHEDA
          </CoverH1>
        </CoverH1>
        <CoverP>
          The purpose of the geothermal heat pump industry is to promote a
          sustainable and decarbonized future across the globe through the
          adoption of geothermal as the cleanest, most efficient heating and
          cooling technology.
        </CoverP>
      </CoverContent>
    </CoverContainer>
  );
};

export default Description;
