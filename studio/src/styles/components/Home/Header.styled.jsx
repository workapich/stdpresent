// HalfSection.styled.js (or HalfSection.styled.jsx)
import styled from "styled-components";
import { colors } from "../../Global.styled";

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  color: #fff;
  /* overflow: hidden; */
  background-color: ${colors.headerColor};
`;

export const NavBar = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 93px;
  position: relative;
`;
export const NavImage = styled.img`
  /* z-index: 3; */
  transform: translateY(20%);
`;
export const NavItems = styled.a`
  font-size: 16px;
  line-height: 18.75px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
`;
