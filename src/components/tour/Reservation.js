import React from 'react'
import styled from 'styled-components'
import RightModal from '../modals/RightModal'
import TourForm from '../forms/TourForm'
import Image from '../Image'
import { H4, H5, P } from '../Base'

export default ({ open, onClose, title, thumb, ...props }) => {
  const { startDate, endDate, price, seats } = props

  return (
    <RightModal open={open} onClose={onClose}>
      <TripInfoWrapper>
        <Thumbnail data={{image: thumb, name: title}} />
        <Column>
          <InfoText>{'Rezerwujesz'}</InfoText>
          <Title>{title}</Title>
          <Subtitle>Termin 01.12.2012</Subtitle>
        </Column>
      </TripInfoWrapper>
      <TourForm startDate={startDate} endDate={endDate} price={price} seats={seats} />
    </RightModal>
  )
}

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

const InfoText = styled(H4)`
  margin: 0;
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