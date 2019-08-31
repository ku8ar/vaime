import React from 'react'
import styled from 'styled-components'
import LayoutContent from '../LayoutContent'
import logo from '../../img/logo.svg'
import { H5, H6 } from '../Text'

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

export default () => (
  <Footer>
    <LayoutContent>
      <FooterRow>
        <FooterList>
          <FooterLogo src={logo} alt="Vaime Travel" />
          <FooterLink href=''>+48 730 665 176</FooterLink>
          <FooterLink href=''>+995 555 628 887</FooterLink>
          <FooterLink href=''>info@vaimetravel.com</FooterLink>
        </FooterList>
        <FooterList>
          <H5 color="colorWhite">Gruziński Po Polsku</H5>
          <FooterLink href=''>Facebook</FooterLink>
          <FooterLink href=''>Instagram</FooterLink>
          <FooterLink href=''>Youtube</FooterLink>
        </FooterList>
        <FooterList>
          <FooterLink href=''><H6 color="colorWhite">Polityka Prywatności</H6></FooterLink>
        </FooterList>
      </FooterRow>
      <FooterRow>
        <FooterCopyright>© Copyright 2017 Vaime Travel. All Rights Reserved</FooterCopyright>
      </FooterRow>
    </LayoutContent>
  </Footer>
)