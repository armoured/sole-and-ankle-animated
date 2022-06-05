import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <LinkText>Sale</LinkText>
            <LinkText>Sale</LinkText>
          </NavLink>
          <NavLink href="/new">
            <LinkText>New&nbsp;Releases</LinkText>
            <LinkText>New&nbsp;Releases</LinkText>
          </NavLink>
          <NavLink href="/men">
            <LinkText>Men</LinkText>
            <LinkText>Men</LinkText>
          </NavLink>
          <NavLink href="/women">
            <LinkText>Women</LinkText>
            <LinkText>Women</LinkText>
          </NavLink>
          <NavLink href="/kids">
            <LinkText>Kids</LinkText>
            <LinkText>Kids</LinkText>
          </NavLink>
          <NavLink href="/collections">
            <LinkText>Collections</LinkText>
            <LinkText>Collections</LinkText>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }

  position: relative;
  overflow: hidden;
`;

const LinkText = styled.p`
  ${NavLink} &:last-of-type {
    display: none;
  }

  @media(prefers-reduced-motion: no-preference) {
    ${NavLink} &:first-of-type {
      transform: translateY(0px);
      transition: transform 200ms ease-out;
    }
  
    ${NavLink}:hover &:first-of-type {
      transform: translateY(-100%);
      transition: transform 200ms ease-in;
    }
  
    ${NavLink} &:last-of-type {
      display: inline;
      position: absolute;
      transform: translateY(0px);
      transition: transform 200ms ease-out;
      font-weight: ${WEIGHTS.bold}
    }
  
    ${NavLink}:hover &:last-of-type {
      transform: translateY(-100%);
      transition: transform 200ms ease-in;
    }
  }
`;

export default Header;
