import React from 'react'
import styled from 'styled-components'
import logo from '../../img/logo.svg'
import { View, H5, H6 } from '../Base'

export default ({ phoneNumbers, socialLinks, email, companyName }) => (
  <Footer>
    <View>
      <FooterRow>
        <FooterList>
          <FooterLogo src={logo} alt="Vaime Travel" />
          {phoneNumbers.map(no => <FooterLink key={no} href={`tel: ${no}`}>{no}</FooterLink>)}
          <FooterLink href={`mailto: ${email}`}>{email}</FooterLink>
        </FooterList>
        <FooterList>
          <SecondTitle color="colorWhite">Gruziński Po Polsku</SecondTitle>
          {socialLinks.map(social => <FooterLink key={social.type} href={social.src}>{social.type}</FooterLink>)}
        </FooterList>
        <FooterList>
          <FooterLink href=''><ThirdTitle color="colorWhite">Polityka Prywatności</ThirdTitle></FooterLink>
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

const FooterLink = styled.a`
  color: ${p => p.theme.colorGreyLight};
  text-decoration: none;
`

const FooterLogo = styled.img`
  height: 5rem;
  margin-bottom: 1rem;
`

const FooterCopyright = styled.p`
  color: ${p => p.theme.colorGreyLight};
  font-size: 0.7rem
`

const SecondTitle = styled(H5)`
  ${p => p.theme.mobile`
      margin-top: 1rem;
  `}
`

const ThirdTitle = styled(H6)`
  ${p => p.theme.mobile`
    margin-top: 1rem;
  `}
`
