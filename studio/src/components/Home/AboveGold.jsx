import React from "react";
import {
  Wrapper,
  SectionAbove,
} from "../../styles/components/Home/AboveGold.styled";
import pictureMain from "../../assets/img/secondLogo.png";
// import pictureMain from "../../assets/img/secondLogo.jpg";
import { PrimaryButton } from "../../styles/ui/Buttons.styled";

//old imports
import { HeadText } from "../../styles/components/Home/HalfSection.styled";
//old imports

const AboveGold = () => {
  return (
    <Wrapper>
      <img src={pictureMain} alt="" />
      <SectionAbove>
        <HeadText>Metzgerei Brath ist Mitglied im Genussnetzwerk</HeadText>
        <PrimaryButton bgcolor="theRedOne">Gehen zu site</PrimaryButton>
      </SectionAbove>
    </Wrapper>
  );
};

export default AboveGold;
