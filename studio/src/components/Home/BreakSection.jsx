import React from "react";
import { BreakWrapper } from "../../styles/components/Home/Break.styled";
import pictureMain from "../../assets/img/vonal 1.png";
import { PrimaryButton } from "../../styles/ui/Buttons.styled";

//old imports
import {
  HeadText,
  StyledImage,
} from "../../styles/components/Home/HalfSection.styled";
//old imports

const BreakSection = ({ padding }) => {
  return (
    <BreakWrapper padding={padding}>
      <StyledImage src={pictureMain} alt="Description of the image" />
    </BreakWrapper>
  );
};

export default BreakSection;
