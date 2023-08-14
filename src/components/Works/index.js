import React, { useState } from "react";
import {
  CoverContainer,
  CoverBg,
  ImageBg,
  CoverContent,
  CoverH1,
  CoverBtnWrapper,
  ArrowForward,
  ArrowRight,
  CoverH2,
} from "./WorkElements";
import { Button } from "../ButtonElements";

const WorkSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <CoverContainer style={{ justifyContent: "flex-start" }}>
      <CoverBg style={{}}>
        <ImageBg src="image/back1.png" type="video/mp4" />
      </CoverBg>
      <CoverContent style={{ alignItems: "flex-start", marginLeft: "5%" }}>
        <CoverH1 style={{ marginBottom: 10 }}> SGHEDA</CoverH1>
        <CoverH1 style={{ textAlign: "start", marginBottom: 10 }}>
          A tool design for geothermal energy
        </CoverH1>
        <CoverH2 style={{ textAlign: "start", marginBottom: 15 }}>
          A tool design for geothermal energy paving way to a more efficient and
          environmentally friendly environment
        </CoverH2>
        <CoverBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </CoverBtnWrapper>
      </CoverContent>
    </CoverContainer>
  );
};

export default WorkSection;
