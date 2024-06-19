import React from "react";
import { Wrapper } from "../../styles/components/Home/AboveGold.styled";
import { HeadText } from "../../styles/components/Home/HalfSection.styled";
import Gold from "../Golds/Gold";
import { goldsData } from "../../utils/golds";

const GoldSection = () => {
  return (
    <Wrapper>
      <HeadText>Auszeichnungen</HeadText>
      {goldsData.map((gold) => (
        <Gold goldObj={gold} key={gold.id} />
      ))}
    </Wrapper>
  );
};

export default GoldSection;
