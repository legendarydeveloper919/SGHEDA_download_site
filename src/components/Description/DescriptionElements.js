import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const CoverContainer = styled.div`
  background: #dedede;
  display: flex;
  padding: 0 30px;
  height: 1200px;
  position: relative;
  z-index: -5;
`;

export const CoverBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  -o-object-fit: cover;
  object-fit: cover;
`;

export const CoverContent = styled.div`
  z-index: 3;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CoverH1 = styled.h1`
  color: #fff;
  font-family: Josefin Sans;
  font-size: 48px;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-weight: 500;
  margin-bottom: 15;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CoverH2 = styled.h1`
  color: #fff;
  font-family: Josefin Sans;
  font-size: 22px;
  text-align: center;
  font-weight: 200;

  @media screen and (max-width: 768px) {
    font-size: 19px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CoverP = styled.p`
  width: 80%;
  margin-top: 24px;
  color: #67696f;
  font-size: 28px;
  text-align: center;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CoverBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
