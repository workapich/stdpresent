// HalfSection.styled.js (or HalfSection.styled.jsx)
import styled from "styled-components";
import { colors } from "../../Global.styled";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  color: #fff;
  background-color: ${colors.lineBelow};
`;

export const BelowSection = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
