import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../../img/logo.svg'
import bars from '../../img/bars.svg'
import { View } from '../Base'
import SocialLink from './SocialLink'
import MobileNavigation from './MobileNavigation'

export default () => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = useCallback(() => setMenu(!menu), [menu])

  return (
    <>
      <Header>
        <LayoutNavigationDesktop>
          <Nav>
            <LogoWrapper to="/" title="Logo">
              <LogoIcon src={logo} alt="Vaime Travel" />
            </LogoWrapper>
            {navigation.map(nav => (
              <NavItem key={nav.to} {...nav}>{nav.title}</NavItem>
            ))}
          </Nav>
          <NavSocialList>
            {social.map(soc => <SocialLink key={soc.type} {...soc} />)}
          </NavSocialList>
        </LayoutNavigationDesktop>
        <LayoutNavigationMobile>
          <LogoWrapper to="/" title="Logo">
            <LogoIcon src={logo} alt="Vaime Travel" />
          </LogoWrapper>
          <BurgerIcon src={bars} onClick={toggleMenu} />
        </LayoutNavigationMobile>
      </Header>
      <MobileNavigation navigation={navigation} menu={menu} toggleMenu={toggleMenu} />
    </>
  )
}

const navigation = [
  { to: '/wycieczki', title: 'Wycieczki' },
  { to: '/gruzja', title: 'Gruzja' },
  { to: '/faq', title: 'FAQ' },
  { to: '/wspolpraca', title: 'Współpraca' },
  { to: '/kontakt', title: 'Kontakt' },
]

const social = [
  { type: 'facebook', src: '' },
  { type: 'instagram', src: '' },
  { type: 'youtube', src: '' }
]

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

const LayoutNavigationDesktop = styled(View)`
  justify-content: space-between;
  align-items: center;
  ${p => p.theme.mobile`
    display: none;
  `}
`

const LayoutNavigationMobile = styled(View)`
  display: none;
  ${p => p.theme.mobile`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

const BurgerIcon = styled.img`
  height: 2.5rem;
`
