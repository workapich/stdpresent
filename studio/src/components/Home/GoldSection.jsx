import React from "react";
import { Wrapper } from "../../styles/components/Home/AboveGold.styled";
import { HeadText } from "../../styles/components/Home/HalfSection.styled";
import Gold from "../Golds/Gold";
import firstPicture from "../../assets/img/zlatnik1.png";
import secondPicture from "../../assets/img/nagrada2.png";
import thirdPicture from "../../assets/img/nagrada3.png";
import fourthPicture from "../../assets/img/nagrada4.png";
const GoldSection = () => {
  const goldsData = [
    {
      id: 1,
      picture: firstPicture,
      text: "Tollit argumentum genau Saepe lobortis",
    },
    {
      id: 2,
      picture: secondPicture,
      text: "Schneewittchen denique",
    },
    {
      id: 3,
      picture: thirdPicture,
      text: "Grimms Märchen  expetenda",
    },
    {
      id: 4,
      picture: fourthPicture,
      text: "Mettwurst mei ullum gloriatur.",
    },
  ];
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
