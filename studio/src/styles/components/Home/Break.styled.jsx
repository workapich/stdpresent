import styled from "styled-components";
import { colors } from "../../Global.styled";

export const BreakWrapper = styled.section`
  display: flex;
  max-width: 1098px;
  margin: 0 auto;
  width: 100%;
  color: #fff;
  padding: ${(props) => (props.padding ? "50px 0" : "0")};

  align-items: center;
  justify-content: space-between;

  /* @media (max-width: 1000px) {
    flex-direction: column;
  } */
`;
