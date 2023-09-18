import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
import PersonCard from "./PersonCard";
const AboutSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
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
      <div
        style={{
          // background: "#051728",
          padding: "50px",
        }}
      >
        <CoverH1 style={{ fontSize: 38, color: "#000" }}>Our Team</CoverH1>
        <CoverH1 style={{ fontSize: 25, color: "#3e3e3e" }}>
          SGHEDA is the ideal bridge between the latest technology and the
          people who benefit from these developments.
        </CoverH1>
        <div style={{ width: "50%", margin: "auto", marginTop: "30px" }}>
          <Slider {...settings}>
            <div>
              <PersonCard />
            </div>
            <div>
              <PersonCard />
            </div>
            <div>
              <PersonCard />
            </div>
            <div>
              <PersonCard />
            </div>
            <div>
              <PersonCard />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
