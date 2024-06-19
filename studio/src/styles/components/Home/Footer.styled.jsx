import styled from "styled-components";
import { colors } from "../../Global.styled";

export const FooterWrapper = styled.section`
  background-color: ${colors.footerColor};
  padding: 20px;
`;

export const FooterContent = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 388px;
`;

export const InfoParagraph = styled.p`
  /* display: flex;
  flex-direction: column; */
  font-size: 16px;
  max-width: 192px;
  font-weight: 400;
  line-height: 28px;
  text-align: left;
  color: white;
`;
export const SocialsImages = styled.section`
  display: flex;
  /* max-width: 1098px; */
  /* margin: 0 auto; */
  /* width: 100%; */
  color: #fff;
  /* padding: 127px 0 127px 0; */
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
