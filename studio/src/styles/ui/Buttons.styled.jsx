import styled from "styled-components";
import { colors } from "../Global.styled";

export const PrimaryButton = styled.button`
  background-color: ${(props) =>
    props.bgcolor ? colors.redCardBack : colors.buttonBgForRed};
  color: ${(props) => (props.bgcolor ? "#fff" : "#000")};
  width: ${(props) => (props.width ? props.width : "")};

  border-radius: 25px;
  border: 1px solid red;
  font-size: 16px;
  font-weight: 400;

  padding: 12px 16px 13px 16px;
  cursor: pointer;
`;
