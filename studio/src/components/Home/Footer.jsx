import React from "react";
import {
  FooterWrapper,
  FooterContent,
  InfoParagraph,
  InfoWrapper,
  SocialsImages,
} from "../../styles/components/Home/Footer.styled";
import pictureMain from "../../assets/img/Group.png";
import pictureSmalll from "../../assets/img/Group 610.png";
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <InfoWrapper>
          <InfoParagraph>
            Klauprechtstraße 25 76137 Karlsruhe, Germany
          </InfoParagraph>
          <InfoParagraph>+49 721 358060 </InfoParagraph>
          <InfoParagraph>info@partyservice-brath.de</InfoParagraph>
        </InfoWrapper>
        <img src={pictureMain} alt="" />
        <SocialsImages>
          <InfoParagraph>Besuchen Sie uns auf:</InfoParagraph>
          <img src={pictureSmalll} alt="" />
          <img src={pictureSmalll} alt="" />
          <img src={pictureSmalll} alt="" />
          <img src={pictureSmalll} alt="" />
        </SocialsImages>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
