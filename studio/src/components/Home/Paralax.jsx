import React from "react";

import { PrimaryButton } from "../../styles/ui/Buttons.styled";
import { HeadText } from "../../styles/components/Home/HalfSection.styled";

import { ParalaxWrapper } from "../../styles/components/Home/Paralax.styled";
const Paralax = () => {
  return (
    <ParalaxWrapper>
      <HeadText>Fleischversand</HeadText>

      <PrimaryButton>Jetzt bestellen</PrimaryButton>
    </ParalaxWrapper>
  );
};
export default Paralax;
