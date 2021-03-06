import { useState, useEffect, useRef } from "react";
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

  @media screen and ${breakpoints.xl} {
    background: transparent;
  }
`;

const NavContainer = styled(Container)`
  max-width: none;
  padding: calc(4.17 * var(--padding-y)) 0;

  @media screen and ${breakpoints.xl} {
    width: 95%;
  }
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

  @media screen and ${breakpoints.xl} {
    display: none;
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and ${breakpoints.lg} {
    justify-content: flex-start;
  }
`;

const Links = styled.div`
  display: none;
  width: 100%;
  justify-content: flex-end;
  font-weight: 600;

  a {
    color: var(--black);
    transition: all 0.4s ease;
    position: relative;

    &:not(first-of-type) {
      margin-left: 2rem;
    }

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

  @media screen and ${breakpoints.xl} {
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
  display: flex;
  justify-self: flex-start;

  &.open {
    display: none;
  }

  @media screen and ${breakpoints.lg} {
    margin-left: 2rem;
  }
`;

const NavFlex = styled.div`
  display: flex;
  align-items: center;

  @media screen and ${breakpoints.xl} {
    max-width: 400px;
  }
`;

export const Nav = () => {
  const mobileRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const clickOutside = (e) => {
      if (mobileRef.current && mobileRef.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", clickOutside);

    return () => {
      document.body.removeEventListener("click", clickOutside);
    };
  }, []);

  const handleOpenMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <Navigation className={`${open ? "open" : ""}`} ref={mobileRef}>
        <NavContainer>
          <NavFlex>
            <MobileMenuButton onClick={handleOpenMenu} isopen={open}>
              <div></div>
              <div></div>
              <div></div>
            </MobileMenuButton>
            <LinksContainer>
              <StyledLogo
                className={`${open ? "open" : ""}`}
                style={{ overflow: "visible" }}
              />
              <Links className={`${open ? "open" : ""}`}>
                <a
                  href="https://fe-mentor-room-homepage.vercel.app/"
                  onClick={closeMenu}
                >
                  home
                </a>
                <a
                  href="https://fe-mentor-room-homepage.vercel.app/"
                  onClick={closeMenu}
                >
                  shop
                </a>
                <a
                  href="https://fe-mentor-room-homepage.vercel.app/"
                  onClick={closeMenu}
                >
                  about
                </a>
                <a
                  href="https://fe-mentor-room-homepage.vercel.app/"
                  onClick={closeMenu}
                >
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
