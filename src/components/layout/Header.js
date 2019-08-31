import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../../img/logo.svg'
import LayoutContent from '../LayoutContent'
import SocialLink from './SocialLink'

const Header = styled.header`
  display: flex;
  height: 4rem;
  background-color: ${p => p.theme.colorPrimary};
  position: fixed;
  width: 100%;
  border-bottom: 1px solid ${p => p.theme.colorWhite};
  box-shadow: 0px 10px 18px 2px rgba(0,0,0,0.3);
  z-index: 2;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
`

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`

const LogoIcon = styled.img`
  height: 2.5rem;
`

const NavItem = styled(Link)`
  color: ${p => p.theme.colorWhite};
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 1rem;
  line-height: 2.3;
  &:hover {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
`

const NavSocialList = styled.div`
  display: flex;
`

const LayoutNavigation = styled(LayoutContent)`
  justify-content: space-between;
  align-items: center;
`

export default () => (
  <Header>
    <LayoutNavigation>
      <Nav>
        <LogoWrapper to="/" title="Logo">
          <LogoIcon src={logo} alt="Vaime Travel" />
        </LogoWrapper>
        <NavItem to="/wycieczki" title="Wycieczki">Wycieczki</NavItem>
        <NavItem to="/gruzja" title="Gruzja">Gruzja</NavItem>
        <NavItem to="/faq" title="FAQ">FAQ</NavItem>
        <NavItem to="/wspolpraca" title="Współpraca">Współpraca</NavItem>
        <NavItem to="/kontakt" title="Kontakt">Kontakt</NavItem>
      </Nav>
      <NavSocialList>
        <SocialLink type='facebook' src='' />
        <SocialLink type='instagram' src='' />
        <SocialLink type='youtube' src='' />
      </NavSocialList>
    </LayoutNavigation>
  </Header>
)