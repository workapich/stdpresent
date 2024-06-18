import React from "react";
import {
  Paragraph,
  HalfScreen,
  Wrapper,
  StyledImage,
  HeadText,
  ListItem,
  InnerContainer,
  SmallText,
} from "../../styles/components/Home/HalfSection.styled";
import { PrimaryButton } from "../../styles/ui/Buttons.styled";
const HalfSection = ({ picture, order }) => {
  console.log(picture);
  return (
    <Wrapper>
      {!order ? (
        <HalfScreen style={{ order: order || undefined }}>
          <InnerContainer>
            <HeadText>Buchen Sie den Grillkurs jetzt</HeadText>
            <ul>
              <ListItem>professioneller Lehrer</ListItem>
              <ListItem>ausgezeichneter Metzger</ListItem>
              <ListItem>1 Tag</ListItem>
              <ListItem>lernen Sie die Kunst des Grillens</ListItem>
            </ul>
            <PrimaryButton width="174px">Dry Aged</PrimaryButton>
          </InnerContainer>
        </HalfScreen>
      ) : (
        <HalfScreen style={{ order: order || undefined }}>
          <InnerContainer className="important-width">
            <HeadText>Custome spices for your meat</HeadText>
            <SmallText>
              Turnbeutel nostrud exercitation ullamco Sprechen Sie deutsch
            </SmallText>
            <Paragraph>
              Odio principes iracundia Müller Rice pri. Ut vel solum mandamus,
              Kartoffelkopf natum adversarium ei ius, diam Schmetterling
              honestatis eum.
            </Paragraph>
            <Paragraph>
              Wiener Schnitzel amet, consectetur Handtasche elit, sed do eiusmod
              tempor Stuttgart ut labore et dolore magna 99 Luftballons Ut enim
              ad minim veniam, Turnbeutel nostrud exercitation ullamco laboris
              nisi Sprechen Sie deutsch aliquip ex ea commodo consequat.
            </Paragraph>
          </InnerContainer>
        </HalfScreen>
      )}

      <HalfScreen>
        <StyledImage src={picture} alt="Description of the image" />
      </HalfScreen>
    </Wrapper>
  );
};

export default HalfSection;
