import styled from "styled-components";
import { ReactComponent as Logo } from "./logo.svg";
import { Container } from "./Container";

const Navigation = styled.nav`
  width: 100%;
  height: 110px;
  background: transparent;
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
    background: var(--white);
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

export const Nav = () => {
  return (
    <Navigation>
      <NavContainer>
        <MobileMenuButton>
          <div></div>
          <div></div>
          <div></div>
        </MobileMenuButton>
        <LinksContainer>
          <Logo />
        </LinksContainer>
      </NavContainer>
    </Navigation>
  );
};
