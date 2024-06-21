import styled from "styled-components";
import { colors } from "../../Global.styled";
import paralaxBG from "../../../assets/img/meso2.png";

export const ParalaxWrapper = styled.section`
  background-image: url(${paralaxBG});
  height: 540px;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: white;
`;

export const BelowSection = styled.section`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
