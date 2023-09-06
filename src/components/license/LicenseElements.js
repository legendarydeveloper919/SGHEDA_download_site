import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

export const CoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 5;
`;
export const PersonContainer = styled.div`
  background-color: #051728;
  justify-content: center;
  align-items: center;
  padding: 100px;
  position: relative;
  z-index: 5;
`;

export const CoverBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const CoverContent = styled.div`
  width: 80%;
  z-index: 3;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CoverH1 = styled.h1`
  color: #fff;
  font-family: Josefin Sans;
  font-size: 48px;
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
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

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
export const PurchaseLink = styled(Link)`
  border-radius: 10px;
  background: var(
    --new-btn-color,
    linear-gradient(180deg, #415a8a 0%, #571c1f 100%)
  );
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(
      --new-btn-color,
      linear-gradient(180deg, #316a7a 0%, #672c3f 100%)
    );
  }
`;
export const BasicButton = styled.button`
  background-color: #55656a;
  border-radius: 5px;
  border-width: 0;
  padding: 16px;
  margin-top: 50px;
  display: inline-flex;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(
      --new-btn-color,
      linear-gradient(180deg, #35454a 0%, #55656a 100%)
    );
  }
`;
export const StandardButton = styled.button`
  background-color: #22c5f9;
  border-radius: 5px;
  border-width: 0;
  padding: 16px;
  margin-top: 50px;
  display: inline-flex;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(
      --new-btn-color,
      linear-gradient(180deg, #12b5e9 0%, #22c5f9 100%)
    );
  }
`;

export const PremiumButton = styled.button`
  background-color: #e8ea78;
  border-radius: 5px;
  border-width: 0;
  padding: 16px;
  margin-top: 50px;
  display: inline-flex;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(
      --new-btn-color,
      linear-gradient(180deg, #c8ca58 0%, #e8ea78 100%)
    );
  }
`;
