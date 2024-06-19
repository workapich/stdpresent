import styled from "styled-components";
import { colors } from "../../Global.styled";
export const DryWrap = styled.section`
  display: flex;

  max-width: 1098px;
  margin: 0 auto;
  width: 100%;
  color: #fff;
  padding: 127px 0 127px 0;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: column; */

  /* @media (max-width: 1000px) {
  } */
`;
export const ImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ImageRow = styled.section`
  display: flex;

  color: #fff;
  align-items: center;
  gap: 16px;
`;

export const InnerContainer = styled.div`
  /* max-width: 503px; */
  display: flex;
  flex-direction: column;
  gap: 24px;

  &.important-width {
    max-width: 432px !important;
    align-items: left;
    margin-right: 100px;
    @media (max-width: 1200px) {
      margin-right: 50px;
    }
  }
`;

export const SmallText = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  /* text-align: center; */
  max-width: 427px;
`;
export const MediumText = styled.h1`
  font-size: 22px;
  font-weight: 700;
  /* line-height: 25.78px; */
  /* text-align: center; */
`;
export const ButtonRow = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
