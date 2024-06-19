import React from "react";
import {
  DarkImage,
  DarkWrap,
  MediumText,
  SmallText,
  ImageContainer,
} from "../../styles/components/Home/DarkSection.styled";
import { HeadText } from "../../styles/components/Home/HalfSection.styled";
import { PrimaryButton } from "../../styles/ui/Buttons.styled";
import BreakSection from "../../components/Home/BreakSection";

//
import fistPicture from "../../assets/img/wurstchen.png";
import secondPicture from "../../assets/img/hanchen.png";
import thirdPicture from "../../assets/img/schwein.png";
import fourthPicture from "../../assets/img/rind.png";

const DarkSection = () => {
  return (
    <DarkWrap>
      <HeadText>Auszeichnungen</HeadText>
      <MediumText>alles über unsere Hausgemachte Produkte</MediumText>
      <SmallText>
        Halt amet, consectetur Handtasche elit, sed do eiusmod tempor Stuttgart
        ut labore et dolore magna 99 Luftballons Ut enim ad minim veniam,
        Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen Sie
        deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute irure
        dolor in Guten Tag mollit anim Stuttgart. id latine indoctum
        complectitur HugoClub Mate mea meliore denique nominavi id. Ohrwurm
        expetenda nam an, his ei Reise euismod assentior
      </SmallText>
      <PrimaryButton bgcolor="Any">Das Handwerk</PrimaryButton>
      <BreakSection padding="yes" />
      <ImageContainer>
        <DarkImage src={fistPicture} alt="asas" />
        <DarkImage src={secondPicture} alt="asas" />
        <DarkImage src={thirdPicture} alt="asas" />
        <DarkImage src={fourthPicture} alt="asas" />
      </ImageContainer>
    </DarkWrap>
  );
};

export default DarkSection;
