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
  z-index: 3;
  position: absolute;
  /* transform: translateY(20%); */
  @media (max-width: 769px) {
    padding-left: 50px !important; /* Hide menu on large screens */
  }
`;

export const NavItems = styled.a`
  font-size: 16px;

  line-height: 18.75px;

  font-weight: 700;

  color: #ffffff;
  text-decoration: none;
`;

export const NavItemsContainer = styled.div`
  @media (max-width: 769px) {
    display: none;

    &.last-item {
      display: block;
      position: absolute;
      right: 100px;
      /* padding-left: 400px; */
    }
  }
`;

export const Indexd = styled.div`
  position: relative;
  height: 100px;
  width: 178px;
`;

export const HamburgerIcon = styled.div`
  cursor: pointer;
  padding: 50px;

  @media (min-width: 769px) {
    display: none;
  }

  svg {
    fill: #fff;
    width: 30px;
    height: 30px;
  }
`;

export const Menu = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: ${colors.redCardBack};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 11;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MenuItem = styled.a`
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  z-index: 100;

  &:hover {
    background-color: #ca3636;
  }
`;
