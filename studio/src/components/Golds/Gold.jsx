import React from "react";
import {
  GoldenImages,
  GoldenImage,
  SmallText,
} from "../../styles/components/Home/GoldenImages.styled";

const Gold = ({ goldObj }) => {
  return (
    <GoldenImages>
      <GoldenImage src={goldObj.picture} alt={goldObj.text} />
      <SmallText>{goldObj.text}</SmallText>
    </GoldenImages>
  );
};

export default Gold;
