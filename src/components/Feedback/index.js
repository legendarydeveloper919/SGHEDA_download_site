import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CoverH1 } from "../CoverSection/CoverElements";
export default function FeedbackSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{
        background: "#051728",
        padding: "50px",
      }}
    >
      <CoverH1 style={{ fontSize: 38 }}>What Our users are saying</CoverH1>
      <div style={{ width: "50%", margin: "auto", marginTop: "30px" }}>
        <Slider {...settings}>
          <div>
            <div
              style={{
                padding: "50px",
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                src="/image/person1.png"
                className="avatar"
                alt="avatar"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50px",
                  position: "absolute",
                  zIndex: 1,
                  top: "0",
                }}
              />
              <h3
                style={{
                  padding: "60px",
                  backgroundColor: "rgba(255,255,255,0.3)",
                  filter: "brightness(120%)", // Example filter property
                  borderRadius: "10px",
                  width: "90%",
                  textAlign: "center",
                  fontSize: "23px",
                  fontWeight: "normal",
                  color: "white",
                }}
              >
                Perfect!, Amazing! How can develop this type of program? I would
                be grateful if you let me know about developer
              </h3>
            </div>
          </div>
          <div>
            <div
              style={{
                padding: "50px",
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                src="/image/person2.png"
                className="avatar"
                alt="avatar"
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50px",
                  position: "absolute",
                  zIndex: 1,
                  top: "0",
                }}
              />
              <h3
                style={{
                  padding: "60px",
                  backgroundColor: "rgba(255,255,255,0.3)",
                  filter: "brightness(120%)", // Example filter property
                  borderRadius: "10px",
                  width: "90%",
                  textAlign: "center",
                  fontSize: "23px",
                  fontWeight: "normal",
                  color: "white",
                }}
              >
                Perfect!, Amazing! How can develop this type of program? I would
                be grateful if you let me know about developer
              </h3>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
