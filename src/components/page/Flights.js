import React from 'react'
import styled from 'styled-components'
import { H5, P } from '../Base'
import Image from '../Image'
import uia from '../../img/flights/uia.png'
import lot from '../../img/flights/lot.png'
import wizz from '../../img/flights/wizz.png'

const data = [
  {
    to: 'Kutaisi',
    from: ['Warszawa', 'Kraków', 'Katowice', 'Wrocław', 'Poznań', 'Gdańsk'],
    imageData: {
      image: wizz,
      name: 'Logo Wizzair'
    },
    url: 'https://wizzair.com/'
  },
  {
    to: 'Tbilisi',
    from: ['Warszawa'],
    imageData: {
      image: lot,
      name: 'Logo Lot'
    },
    url: 'https://lot.pl'
  },
  {
    to: 'Tbilisi',
    from: ['Warszawa'],
    info: '(przesiadka w Kijowie)',
    imageData: {
      image: uia,
      name: 'Logo UIA'
    },
    url: 'https://www.flyuia.com/'
  }
]

export default () => {
  return (
    <Wrapper>
      <H5>Połączenia lotnicze do Gruzji</H5>
      {data.map(({ to, from, imageData, url, info }) => (
        <CompanyWrapper key={url} href={url} target="_blank" rel="noopener noreferrer">
          <LeftColumn>
            <Subtitle> {to}</Subtitle>
            {from.map(city => <City key={city}>{city}</City>)}
            {info && <Info>{info}</Info>}
          </LeftColumn>
          <RightColumn>
            <SubtitleCentered>Sprawdź tu</SubtitleCentered>
            <Logo data={imageData} />
          </RightColumn>
        </CompanyWrapper>
      ))}
    </Wrapper>
  )
}

const Logo = styled(Image)`
  width: 100%;
  padding: .5rem;
`

const Subtitle = styled(P)`
  font-weight: ${p => p.theme.weightBold};
`

const City = styled(P)`
  margin: 0;
  font-weight: ${p => p.theme.weightThin};
`

const Info = styled(P)`
  font-weight: ${p => p.theme.weightThin};
  font-size: 12px;
`

const SubtitleCentered = styled(P)`
  text-align: center;
`

const RightColumn = styled.div`
  flex: 2;
`

const LeftColumn = styled.div`
  flex: 1;
`

const CompanyWrapper = styled.a`
  display: flex;
  flex-direction: row;
  background-color: ${p => p.theme.colorGrey};
  padding: ${p => p.theme.marginS};
  margin-bottom: 1rem;
  box-shadow: ${p => p.theme.shadowLight};
  border-radius: .25rem;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`

const Wrapper = styled.div`
  margin-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  ${p => p.theme.mobile`
    margin-left: 0;
  `}
`