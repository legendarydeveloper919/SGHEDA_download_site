import React from "react";
import Icon1 from "../../images/img-4.png";
import Icon2 from "../../images/img-5.png";
import Icon3 from "../../images/img-6.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServiceBg,
  ImageBg,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services" style={{ marginTop: "-400px" }}>
      <ServiceBg style={{ zIndex: -1 }}>
        <ImageBg src="image/back2.png" />
      </ServiceBg>
      <ServicesH1 style={{ color: "black" }}>SGHEDA FEATURES</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Comprehensive design capabilities</ServicesH2>
          <ServicesP>
            Our program offers a wide range of design capabilities, allowing you
            to create GHE system tailored to your specific needs and
            requirements
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Accurate Performance Analysis</ServicesH2>
          <ServicesP>
            With our program, you can accurately analyze the performance of your
            ground heat exchanger system, taking into account factors such as
            heat transfer rates, fluid flow, and thermal conductivity
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>User-Friendly Interface</ServicesH2>
          <ServicesP>
            Our program features a user-friendly interface that makes it easy to
            navigate and utilize its powerful design and analysis capabilities,
            even for users without extensive technical expertise
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
