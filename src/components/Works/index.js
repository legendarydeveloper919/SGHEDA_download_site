import React from "react";
import { CoverContainer, CoverContent, CoverH1 } from "./WorkElements";

const WorkSection = () => {
  return (
    <CoverContainer style={{ justifyContent: "flex-start", marginTop: -300 }}>
      <CoverContent style={{ marginTop: "15%" }}>
        <CoverH1> HOW IT WORKS</CoverH1>
      </CoverContent>
    </CoverContainer>
  );
};

export default WorkSection;
