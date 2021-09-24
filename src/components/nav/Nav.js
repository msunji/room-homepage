import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";
import { Container } from "../layout/Container";
import breakpoints from "../../styles/breakpoints";

const Navigation = styled.nav`
  width: 100%;
  height: 110px;
  background: white;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding: calc(4.17 * var(--padding-y)) 0;
`;

const MobileMenuButton = styled.div`
  height: 14px;
  width: 20px;
  cursor: pointer;

  div {
    // background: var(--white);
    background: black;
    height: 2px;
    width: 100%;

    &:not(:last-of-type) {
      margin-bottom: 4px;
    }
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Links = styled.div`
  display: flex;
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

  a,
  a:visited {
    color: var(--black);
  }
`;
const ModalBg = styled.div`
  position: absolute;
  z-index: 1;
  background: var(--grey-very-dark);
  opacity: 0.5;
  height: 100%;
  width: 100%;
`;

const StyledLogo = styled(Logo)`
  cursor: pointer;
  display: none;
`;

export const Nav = () => {
  return (
    <>
      <Navigation>
        <NavContainer>
          <MobileMenuButton>
            <div></div>
            <div></div>
            <div></div>
          </MobileMenuButton>
          <LinksContainer>
            <StyledLogo />
            <Links>
              <a href="#">home</a>
              <a href="#">shop</a>
              <a href="#">about</a>
              <a href="#">contact</a>
            </Links>
          </LinksContainer>
        </NavContainer>
      </Navigation>
      <ModalBg />
    </>
  );
};
