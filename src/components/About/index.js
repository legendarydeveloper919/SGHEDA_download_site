import React from "react";
import {
  CoverContainer,
  CoverBg,
  ImageBg,
  CoverContent,
  CoverH1,
  PersonContainer,
} from "./AboutElements";
import StoryFieldCardRight from "./StoryFieldCardRight";
import StoryFieldCardLeft from "./StoryFieldCardLeft";
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
          <CoverH1
            style={{
              textAlign: "center",
              fontSize: "48px",
              textDecoration: "underline",
            }}
          >
            ABOUT SGHEDA
          </CoverH1>
          <CoverH1
            style={{
              textAlign: "center",
              fontSize: "28px",
            }}
          >
            SGHEDA is the ideal bridge between the latest technology and the
            people who benefit from these developments.
          </CoverH1>
        </CoverContent>
      </CoverContainer>
      <PersonContainer>
        <StoryFieldCardRight />
        <StoryFieldCardLeft />
      </PersonContainer>
    </>
  );
};

export default AboutSection;
