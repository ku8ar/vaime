import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import SocialLink from './SocialLink'
import logo from '../../img/logo.svg'
import { View, H6 } from '../Base'

export default ({ phoneNumbers, socialLinks, email, companyName }) => (
  <Footer>
    <View>
      <FooterRow>
        <FooterList>
          <FooterLogo src={logo} alt="Vaime Travel" />
          {phoneNumbers.map(no => <FooterLink key={no} href={`tel: ${no}`}>{no}</FooterLink>)}
          <FooterLink href={`mailto: ${email}`}>{email}</FooterLink>
        </FooterList>
        <MiddleFooterList>
          <FooterNav to='/polityka'><Title color="colorWhite">Polityka Prywatności</Title></FooterNav>
        </MiddleFooterList>
        <FooterList>
          <Title color="colorWhite">Gruziński Po Polsku</Title>
          <Row>{socialLinks.map(social => <SocialLink key={social.type} {...social} />)}</Row>
        </FooterList>
      </FooterRow>
      <FooterRow>
        <FooterCopyright>© Copyright 2017 {companyName}. All Rights Reserved</FooterCopyright>
      </FooterRow>
    </View>
  </Footer>
)

const Footer = styled.footer`
  min-height: 4rem;
  background-color: ${p => p.theme.colorSecondary};
  padding: 3rem 0;
  ${p => p.theme.mobile`
    margin-bottom: 2rem;
  `}
`

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`

const FooterList = styled.div`
  display: flex;
  flex-direction: column;
`

const MiddleFooterList = styled(FooterList)`
  ${p => p.theme.mobile`
    margin-top: .5rem;
  `}
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  ${p => p.theme.mobile`
    justify-content: flex-start;
  `}
`

const FooterLink = styled.a`
  color: ${p => p.theme.colorGreyLight};
  text-decoration: none;
`

const FooterNav = styled(Link)`
  color: ${p => p.theme.colorGreyLight};
  text-decoration: none;
`

const FooterLogo = styled.img`
  width: 5.0rem;
  margin-bottom: 1rem;
`

const FooterCopyright = styled.p`
  color: ${p => p.theme.colorGreyLight};
  font-size: 0.7rem;
  margin-top: .5rem;
  ${p => p.theme.mobile`
    margin-top: 2rem;
    text-align: center;
    flex: 1;
  `}
`

const Title = styled(H6)`
  text-transform: upperacase;
`
