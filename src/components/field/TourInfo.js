import React from 'react'
import styled from 'styled-components'
import Image from '../Image'
import { H6, H5, P } from '../Base'

export default ({ title, thumb, children }) => (
  <TripInfoWrapper>
    <Thumbnail data={{ image: thumb, name: title }} />
    <Column>
      <InfoText>REZERWACJA</InfoText>
      <Title>{title}</Title>
      {children}
    </Column>
  </TripInfoWrapper>
)

const TripInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${p => p.theme.colorGreyDark};
  flex-wrap: wrap;
  align-items: center;
  ${p => p.theme.mobile`
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  `}
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const InfoText = styled(H6)`
  margin: 0;
  color: ${p => p.theme.colorSecondaryTransparent};
`

const Title = styled(H5)`
  text-transform: uppercase;
  margin: 0;
  line-height: 1;
`

const Subtitle = styled(P)`
  color: ${p => p.theme.colorSecondaryTransparent};
  margin: 0;
`

const Thumbnail = styled(Image)`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  margin-right: 1rem;
  ${p => p.theme.mobile`
    display: none;
  `}
`