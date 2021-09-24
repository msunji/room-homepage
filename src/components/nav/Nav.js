import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";
import { Container } from "../layout/Container";
import breakpoints from "../../styles/breakpoints";

const Navigation = styled.nav`
  width: 100%;
  height: 110px;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  transition: background 0.4s ease;

  &.open {
    background: white;
  }

  @media screen and ${breakpoints.lg} {
    background: transparent;
  }
`;

const NavContainer = styled(Container)`
  padding: calc(4.17 * var(--padding-y)) 0;
`;

const MobileMenuButton = styled.div`
  height: 14px;
  width: 20px;
  cursor: pointer;
  display: block;

  div {
    background: ${(props) => (props.isopen ? "var(--grey-dark)" : "white")};
    height: 2px;
    width: 100%;
    transition: all 0.3s linear;
    transform-origin: 1px;

    &:not(:last-of-type) {
      margin-bottom: 4px;
    }

    &:first-of-type {
      transform: ${(props) => (props.isopen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-of-type(2) {
      opacity: ${(props) => (props.isopen ? 0 : 1)};
      transform: ${(props) =>
        props.isopen ? "translateX(1rem)" : "translateX(0)"};
    }
    &:last-of-type {
      transform: ${(props) => (props.isopen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media screen and ${breakpoints.lg} {
    display: none;
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Links = styled.div`
  display: none;
  width: 100%;
  justify-content: space-between;
  font-weight: 600;
  margin-left: 6rem;

  a {
    color: var(--black);
    transition: all 0.4s ease;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 160%;
      left: 50%;
      margin-left: -8px;
      width: 0px;
      height: 2px;
      background: black;
      transition: width 0.3s ease 0.1s;
    }

    &:visited {
      color: var(--black);
      transition: all 0.4s ease;
    }

    &:hover,
    &:focus {
      &:after {
        width: 16px;
      }
    }
  }

  &.open {
    display: flex;
  }

  @media screen and ${breakpoints.lg} {
    display: flex;
    a {
      color: var(--white);
      transition: all 0.4s ease;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        top: 160%;
        left: 50%;
        margin-left: -8px;
        width: 0px;
        height: 2px;
        background: white;
        transition: width 0.3s ease 0.1s;
      }

      &:visited {
        color: var(--white);
        transition: all 0.4s ease;
      }

      &:hover,
      &:focus {
        &:after {
          width: 16px;
        }
      }
    }
  }
`;
const ModalBg = styled.div`
  position: absolute;
  z-index: 1;
  background: var(--grey-very-dark);
  opacity: 0.5;
  height: 100%;
  width: 100%;
  display: ${(props) => (props.isopen ? "block" : "none")};
`;

const StyledLogo = styled(Logo)`
  cursor: pointer;
  display: block;

  &.open {
    display: none;
  }
`;

const NavFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <Navigation className={`${open ? "open" : ""}`}>
        <NavContainer>
          <NavFlex>
            <MobileMenuButton
              onClick={handleOpenMenu}
              className={`${open ? "open" : ""}`}
              isopen={open}
            >
              <div></div>
              <div></div>
              <div></div>
            </MobileMenuButton>
            <LinksContainer>
              <StyledLogo className={`${open ? "open" : ""}`} />
              <Links className={`${open ? "open" : ""}`}>
                <a href="#" onClick={closeMenu}>
                  home
                </a>
                <a href="#" onClick={closeMenu}>
                  shop
                </a>
                <a href="#" onClick={closeMenu}>
                  about
                </a>
                <a href="#" onClick={closeMenu}>
                  contact
                </a>
              </Links>
            </LinksContainer>
          </NavFlex>
        </NavContainer>
      </Navigation>
      <ModalBg isopen={open} />
    </>
  );
};
