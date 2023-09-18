import React, { useState } from "react";
import {
  CoverContainer,
  CoverContent,
  CoverH1,
  CoverP,
} from "./DescriptionElements";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Description = () => {
  let fadeImages = [];
  let imageIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  imageIndex.map((index, key) => {
    fadeImages.push({ url: `/image/validation/${index}.png` });
  });

  return (
    <CoverContainer style={{ justifyContent: "flex-start", marginTop: -300 }}>
      <CoverContent style={{ marginTop: "10%", alignItems: "center" }}>
        <CoverH1 style={{ color: "#2A2F34", fontSize: "48px" }}>
          WHAT IS
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
          The slinky GHE configuration refers to the arrangement of the pipes in
          a tightly coiled or helical shape resembling a slinky toy. This
          configuration maximizes the surface area of the pipes in contact with
          the ground, enhancing the heat transfer efficiency
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
          <div style={{ width: "40%" }}>
            <Fade>
              {fadeImages.map((fadeImage, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{ width: "90%", borderRadius: "20px" }}
                    src={fadeImage.url}
                    alt="image"
                  />
                </div>
              ))}
            </Fade>
          </div>
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
              style={{ fontSize: "23px", textAlign: "left", color: "#B4B7C5" }}
            >
              We especially paid attention to this step because we know it is
              really what our customers interested in. Trust in the accuracy and
              reliability of our design as we leverage the industry-leading
              computational fluid dynamics (CFD) software to simulate heat
              transfer, fluid flow dynamics, and thermal behavior in your GHE
              system. If you want, we can provide validation report.
              <br /> <br />
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
