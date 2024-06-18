import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  html {
    scroll-behavior: smooth;
  }

  body, #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const colors = {
  //djakoviceve boje
  timberwolf: "#DAD7CD",
  sage: "#A3B18A",
  fernGreen: "#588157",
  hunterGreen: "#3A5A40",
  brunswickGreen: "#344E41",
  lightGreen: "#ace1af",

  //moje boje
  redCardBack: "rgba(166, 33, 32, 1)",
  buttonBgForRed: "#fff",
};
