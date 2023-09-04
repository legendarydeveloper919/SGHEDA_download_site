import React from "react";
import {
  CoverContainer,
  CoverBg,
  ImageBg,
  CoverContent,
  CoverH1,
  PersonContainer,
} from "./AboutElements";
import PersonCardLeft from "./PersonCardLeft";
import PersonCardRight from "./PersonCardRight";
const AboutSection = () => {
  return (
    <>
      <CoverContainer>
        <CoverBg style={{}}>
          <ImageBg src="image/about.png" type="video/mp4" />
        </CoverBg>
        <CoverContent
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CoverH1 style={{ textAlign: "center", fontSize: "48px" }}>
            SGHEDA is the ideal bridge between the latest technology and the
            people who benefit from these developments.
          </CoverH1>
        </CoverContent>
      </CoverContainer>
      <PersonContainer>
        <PersonCardLeft />
        <PersonCardRight />
        <PersonCardLeft />
      </PersonContainer>
    </>
  );
};

export default AboutSection;
