import React from "react";
import {
  ButtonRow,
  DryWrap,
  ImageContainer,
  ImageRow,
  InnerContainer,
} from "../../styles/components/Home/DryAged.styled";

import { HeadText } from "../../styles/components/Home/HalfSection.styled";

import {
  MediumText,
  SmallText,
} from "../../styles/components/Home/DryAged.styled";

import bigImage from "../../assets/img/pictureFor2.png";
import firstSmall from "../../assets/img/pictureFor1.png";
import secondSmall from "../../assets/img/pictureMain.png";
import thirdSmall from "../../assets/img/pictureFor3.png";
import { PrimaryButton } from "../../styles/ui/Buttons.styled";
const DryAged = () => {
  return (
    <DryWrap>
      <InnerContainer>
        <div className="noGap">
          <HeadText>Dry aged</HeadText>
          <MediumText>Alte Wutz, Dry Aged</MediumText>
        </div>
        <SmallText>
          Halt amet, consectetur Handtasche elit, sed do eiusmod tempor
          Stuttgart ut labore et dolore magna 99 Luftballons Ut enim ad minim
          veniam, Turnbeutel nostrud exercitation ullamco laboris nisi Sprechen
          Sie deutsch aliquip ex ea commodo consequat. Wiener Schnitzel aute
          irure dolor in reprehenderit Guten Tag mollit anim Stuttgart.
          <br />
          <br />
          id latine indoctum complectitur HugoClub Mate mea meliore denique
          nominavi id. Ohrwurm expetenda nam an, his ei Reise euismod assentior.
        </SmallText>
        <ButtonRow>
          <PrimaryButton bgcolor="yes">Dry Aged</PrimaryButton>
          <PrimaryButton bgcolor="yes">Dry Aged</PrimaryButton>
        </ButtonRow>
      </InnerContainer>
      <ImageContainer>
        <img src={bigImage} alt="" />
        <ImageRow>
          <img src={firstSmall} alt="" />
          <img src={secondSmall} alt="" />
          <img src={thirdSmall} alt="" />
        </ImageRow>
      </ImageContainer>
    </DryWrap>
  );
};

export default DryAged;
