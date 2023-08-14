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
          <ServicesH2>Multiple Zones and Multiple Heat Pumps</ServicesH2>
          <ServicesP>
            Embark on larger residential projects compared to previous endeavors
            using the exclusive residential software, incorporation of up to 10
            zones with limitless heat pumps.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Accurate Result</ServicesH2>
          <ServicesP>
            Create designs with assurance, utilizing the sole software founded
            upon the calculation techniques detailed in the 2011 SGHEDA
            Residential/Light Commercial Design Manual
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Economic Analysis</ServicesH2>
          <ServicesP>
            Embark on larger residential projects compared to previous endeavors
            using the exclusive residential software, enabling the incorporation
            of up to 10 zones with limitless heat pumps within each zone
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
