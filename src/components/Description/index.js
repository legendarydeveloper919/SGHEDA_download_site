import React from "react";
import {
  CoverContainer,
  CoverContent,
  CoverH1,
  CoverP,
} from "./DescriptionElements";
import { ImageBg } from "./DescriptionElements";

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
            SGHEDA
          </CoverH1>
        </CoverH1>
        <CoverP>
          The purpose of the geothermal heat pump industry is to promote a
          sustainable and decarbonized future across the globe through the
          adoption of geothermal as the cleanest, most efficient heating and
          cooling technology.
        </CoverP>
        <div
          style={{
            marginTop: 50,
            width: "100%",
            height: "70%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <ImageBg
            src="image/validation.png"
            style={{ padding: 100 }}
          ></ImageBg>
          <div
            style={{
              borderRadius: 15,
              backgroundColor: "#051728",
              height: "80%",
              width: "50%",
              padding: 50,
            }}
          >
            <CoverH1
              style={{
                marginLeft: "10px",
                fontSize: "35px",
                fontWeight: 500,
                color: "white",
              }}
            >
              SGHEDA
            </CoverH1>
            <CoverP
              style={{ fontSize: "20px", textAlign: "left", color: "#B4B7C5" }}
            >
              SGHEDA has been validated against measured data from working
              ground heat exchangers and compared with the ASHRAE Handbook
              Method. Applying the measured loads on the ground heat exchanger
              as the design conditions and setting the actual peak temperatures
              as the user-specified design temperatures, the design methods
              should give us back the actual design. SGHEDA gave sizes within 5%
              of actual; the ASHRAE Handbook method gave designs substantially
              different from actual. “Why” is explained in the paper cited below
              that details the comparison. <br /> <br />
              Cullin, J.R., J.D. Spitler, C. Montagud, F. Ruiz-Calvo, S.J. Rees,
              S.S. Naicker, P. Konečný, and L.E. Southard. 2015. Validation of
              Vertical Ground Heat Exchanger Design Methodologies. Science and
              Technology for the Built Environment. 21(2):137-149.
            </CoverP>
          </div>
        </div>
      </CoverContent>
    </CoverContainer>
  );
};

export default Description;
