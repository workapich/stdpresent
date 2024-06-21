import { React, useState } from "react";
import {
  NavBar,
  Wrapper,
  NavImage,
  NavItems,
  Indexd,
  HamburgerIcon,
  Menu,
  MenuItem,
  NavItemsContainer,
} from "../../styles/components/Home/Header.styled";

import { links } from "../../utils/links";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Wrapper>
      <NavBar>
        {links.map((link, index) =>
          link.picture ? (
            <Indexd key={link.id}>
              <NavImage src={link.picture} alt="picture" />
            </Indexd>
          ) : (
            <NavItemsContainer
              key={index}
              className={index === links.length - 1 ? "last-item" : ""}
            >
              <NavItems href={link.id}>{link.text}</NavItems>
            </NavItemsContainer>
          )
        )}
        <HamburgerIcon onClick={toggleMenu} aria-label="Menu">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        </HamburgerIcon>
        <Menu open={menuOpen}>
          {links.map((link) => (
            <MenuItem href="#" key={link.id}>
              {link.text}
            </MenuItem>
          ))}
        </Menu>
      </NavBar>
    </Wrapper>
  );
};

export default Header;
