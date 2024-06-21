// HalfSection.styled.js (or HalfSection.styled.jsx)
import styled from "styled-components";
import { colors } from "../../Global.styled";

export const Text = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 18px;
  text-align: center;
  padding: 0 34px;
  color: white;
`;
export const BigText = styled.p`
  color: white;

  font-size: 16px;
  font-weight: 400;
  text-align: center;
`;

export const BelowSection = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Image = styled.img`
  width: auto !important;
  height: auto !important;
`;
export const ComaImage = styled.img`
  width: auto !important;
  height: auto !important;
  position: absolute !important;
  bottom: -20px !important;
  right: 16px !important;
`;
