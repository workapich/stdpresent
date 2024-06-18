// HalfSection.styled.js (or HalfSection.styled.jsx)
import styled from "styled-components";
import { colors } from "../../Global.styled";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  color: #fff;
  overflow: hidden;
  background-color: ${colors.redCardBack};
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const HalfScreen = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;
export const HeadText = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
`;
export const SmallText = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 20px;
`;
export const Paragraph = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
`;
export const ListItem = styled.li`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  margin-left: 20px;
`;
export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const InnerContainer = styled.div`
  max-width: 243px;
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
