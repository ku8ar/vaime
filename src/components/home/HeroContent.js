import React from 'react'
import { H1, H2, Button } from '../Base'
import styled from 'styled-components'

const Container = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled(H1)`
  color: white;
  text-shadow: none;
  font-weight: ${p => p.theme.weightBolder};
`
const Subtitle = styled(H2)`
  color: white;
  font-weight: ${p => p.theme.weightThin};
  letter-spacing: .1rem;
  margin-top: 0rem;
`
const OffersButton = styled(Button)`
  margin-top: 2.5rem;
`

const onClick = () => {
  document.querySelector('#offers').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

export default ({ heroTitle, heroSubtitle, heroButtonTitle }) => {

  return (
    <Container>
        <Title>{heroTitle}</Title>
        <Subtitle>{heroSubtitle}</Subtitle>
        <OffersButton href="#offers" onClick={onClick}>{heroButtonTitle}</OffersButton>
    </Container>
  )
}
