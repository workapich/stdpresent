import React from "react";
import {
  NavBar,
  Wrapper,
  NavImage,
  NavItems,
  Indexd,
} from "../../styles/components/Home/Header.styled";
import { links } from "../../utils/links";
const Header = () => {
  return (
    <Wrapper>
      <NavBar>
        {links.map((link) =>
          link.picture ? (
            <Indexd key={link.id}>
              <NavImage src={link.picture} alt="picture" />
            </Indexd>
          ) : (
            <NavItems href="#" key={link.id}>
              {link.text}
            </NavItems>
          )
        )}
      </NavBar>
    </Wrapper>
  );
};

export default Header;
