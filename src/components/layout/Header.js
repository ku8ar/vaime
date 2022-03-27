import React, { useCallback, memo } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Vaime from './Vaime'
import phoneImg from '../../img/phone.svg'
import { View } from '../Base'
import SocialLink from './SocialLink'
import MobileNavigation from './MobileNavigation'

export default ({ navigationPl, navigationEn, socialLinks, companyName, phoneNumbers, slug, lang }) => {
  const onClick = useCallback(() => window.scrollTo(0, 0), [])
  const phone = phoneNumbers && phoneNumbers[0] || null
  const isTransparent = slug && slug.includes('galeria')

  const isEn = lang === 'en'
  const navigation = isEn ? navigationEn : navigationPl
  const mainRoute = isEn ? '/en' : '/'

  return (
    <>
      <Header isTransparent={isTransparent}>
        <LayoutNavigationDesktop>
          <Nav>
            <LogoWrapper to={mainRoute} title="Logo" onClick={onClick}>
              <Vaime />
            </LogoWrapper>
            {navigation.map(nav => (
              <NavItem data-active={slug === nav.to} key={nav.to} to={nav.to}>{nav.title}</NavItem>
            ))}
          </Nav>
        <SocialListContainer phone={phone} socialLinks={socialLinks} />
        </LayoutNavigationDesktop>
        <LayoutNavigationMobileContainer companyName={companyName} phone={phone} />
      </Header>
      <MobileNavigation navigation={navigation} slug={slug} />
    </>
  )
}

const removeSpace = str => str.replace(/\s/g, '')

const SocialListContainer = memo(({phone, socialLinks}) => (
  <NavSocialList>
    <PhoneNo href={`tel:${removeSpace(phone)}`} title="telefon"><PhoneImg src={phoneImg} alt='telephone' />{phone}</PhoneNo>
    {socialLinks.map(soc => <SocialLink key={soc.type} {...soc} />)}
  </NavSocialList>
))

const LayoutNavigationMobileContainer = memo(({ companyName, phone }) => (
  <LayoutNavigationMobile>
    <LogoWrapper to="/" title="Logo">
      <Vaime />
    </LogoWrapper>
    <PhoneNo href={`tel:${removeSpace(phone)}`}><PhoneImg src={phoneImg} alt='telephone' />{phone}</PhoneNo>
  </LayoutNavigationMobile>
))

const PhoneImg = styled.img`
  width: 1.25rem;
  margin-right: .5rem;
`

const PhoneNo = styled.a`
  color: ${p => p.theme.colorWhite};
  font-weight: ${p => p.theme.weightNormal};
  font-size: ${p => p.theme.fontBig};
  margin-right: 1rem;
  display: flex;
  align-items: center;
`

const Header = styled.header`
  display: flex;
  height: 4rem;
  background-color: ${p => p.isTransparent ? 'transparent' : p.theme.colorPrimary};
  position: fixed;
  width: 100%;
  border-bottom: 1px solid ${p => p.theme.colorWhite};
  box-shadow: ${p => p.theme.shadowLight};
  z-index: 2;
  ${p => p.theme.mobile`
    position: absolute;
  `}
  ${p => p.theme.print` display: none; `}
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

const NavItem = styled(Link)`
  color: ${p => p.theme.colorWhite};
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 1rem;
  line-height: 2.75;
  font-weight: ${p => p.theme.weightBolder};

  transition: border .2s;

  border-top: ${p => p['data-active'] ? '1px solid white' : '1px solid transparent'};
  border-bottom: ${p => p['data-active'] ? '1px solid white' : '1px solid transparent'};

  &:hover {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
`

const NavSocialList = styled.div`
  display: flex;
  ${p => p.theme.smallScreen`
    display: none;
  `}
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
