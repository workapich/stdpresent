import styled from "styled-components";
import { colors } from "../../Global.styled";

export const DarkWrap = styled.section`
  display: flex;

  max-width: 1098px;
  margin: 0 auto;
  width: 100%;
  color: #fff;
  padding: 127px 0 127px 0;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  /* @media (max-width: 1000px) {
  } */
`;
export const ImageContainer = styled.section`
  display: flex;

  max-width: 1098px;
  margin: 0 auto;
  width: 100%;
  color: #fff;
  /* padding: 127px 0 0 0; */
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  /* @media (max-width: 1000px) {
  } */
`;
export const GoldenImages = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 176px;
  align-items: center;
  text-align: center;
`;

export const GoldenImage = styled.img`
  width: 120px;
`;

export const SmallText = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
  padding: 60px 225px;
`;
export const MediumText = styled.h1`
  font-size: 22px;
  font-weight: 700;
  line-height: 25.78px;
  text-align: center;
`;

export const DarkImage = styled.img`
  padding: 50px 0;
  width: 262px;
`;
