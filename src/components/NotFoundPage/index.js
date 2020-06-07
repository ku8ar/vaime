import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {Page, View, H1, H2, buttonStyle } from '../Base'
import letter from './letter.png'

const PageView = styled(Page)`
  background-color: ${p => p.theme.colorPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled(H1)`
  filter: drop-shadow(-3px 0px 0px #fff);
  text-shadow: none;
  font-size: 5rem;
  font-weight: bolder;
  letter-spacing: .5rem;
`

const Subtitle = styled(H2)`
  font-size: 1.5rem;
  color: white;
  margin-top: 0rem;
  text-transform: none;
`

const Buttons = styled.div`
  margin-top: 3rem;
  ${p => p.theme.mobile`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  `}
`

const Button = styled(Link)`
  ${buttonStyle}
  border: 1px solid white;
  margin-left: 1rem;
  margin-right: 1rem;
`

const Image = styled.img`
  position: absolute;
  width: 20rem;
  left: 1rem;
  top: -10rem;
  ${p => p.theme.mobile`
    display: none;
  `}
`

const InfoView = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const NotFoundPage = () => (
  <PageView>
    <InfoView>
      <Image src={letter} />
      <Title>404</Title>
      <Subtitle>Nie ma takiej strony :(</Subtitle>
      <Buttons>
        <Button to='/'>Strona Główna</Button>
        <Button to='/kontakt'>Kontakt</Button>
      </Buttons>
    </InfoView>
  </PageView>
)

export default NotFoundPage
