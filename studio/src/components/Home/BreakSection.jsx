import React from "react";
import {
  Wrapper,
  SectionAbove,
} from "../../styles/components/Home/AboveGold.styled";
import pictureMain from "../../assets/img/vonal 1.png";
// import pictureMain from "../../assets/img/secondLogo.jpg";
import { PrimaryButton } from "../../styles/ui/Buttons.styled";

//old imports
import {
  HeadText,
  StyledImage,
} from "../../styles/components/Home/HalfSection.styled";
//old imports

const BreakSection = () => {
  return (
    <Wrapper>
      <StyledImage src={pictureMain} alt="Description of the image" />
    </Wrapper>
  );
};

export default BreakSection;
