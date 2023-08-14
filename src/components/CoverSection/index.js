import React from "react";
import {
  CoverContainer,
  CoverBg,
  ImageBg,
  CoverContent,
  CoverH1,
  CoverBtnWrapper,
  CoverH2,
} from "./CoverElements";
import { PurchaseLink } from "./CoverElements";
const CoverSection = () => {
  return (
    <CoverContainer style={{ justifyContent: "flex-start" }}>
      <CoverBg style={{}}>
        <ImageBg src="image/back1.png" type="video/mp4" />
      </CoverBg>
      <CoverContent style={{ alignItems: "flex-start", marginLeft: "5%" }}>
        <CoverH1 style={{ marginBottom: 10 }}> SGHEDA</CoverH1>
        <CoverH1 style={{ textAlign: "start", marginBottom: 10 }}>
          A design tool for geothermal energy
        </CoverH1>
        <CoverH2 style={{ textAlign: "start", marginBottom: 15 }}>
          A tool design for geothermal energy paving way to a more efficient and
          environmentally friendly environment
        </CoverH2>
        <CoverBtnWrapper>
          <PurchaseLink>Purchase</PurchaseLink>
        </CoverBtnWrapper>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
