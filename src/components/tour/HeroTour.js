import React from 'react'
import styled from 'styled-components'
import { path, sort, prop, head, pipe } from 'rambda'
import Hero from '../Hero'
import { calcDate } from '../../utils/date'
import { H1, P, Button } from '../Base'

const getOldestTs = pipe(
  sort((a, b) => a.timestamp > b.timestmap),
  head,
  prop('timestamp')
)

const getBiggestSeats = pipe(
  sort((a, b) => a.seats > b.seats),
  head,
  prop('seats')
)

export default ({ images, title, openReservation, active, terms }) => {
  if (!terms) {
    return null
  }

  const timestamp = getOldestTs(terms)
  const seats = getBiggestSeats(terms)

  const expired = timestamp < + new Date()
  const noSeats = seats <= 0
  const disabled = expired || noSeats || !active

  return (
    <Hero images={images}>
      <Wrapper>
        <FirstColumn>
          <H1 color='colorWhite'>{title}</H1>
          <Info>
            <Pill>
              <Label>Termin</Label>
              {terms.map(({ startDate, endDate }, index) =>
                <Label key={index}>{calcDate(startDate, endDate)}</Label>)}
            </Pill>
            <Pill>
              <Label>Liczba dni</Label>
              {terms.map(({ daysCount }, index) =>
                <Label key={index}>{daysCount}</Label>)}
            </Pill>
            <Pill>
              <Label>Wolne miejsca</Label>
              {terms.map(({ seats }, index) =>
                <Label key={index}>{seats || 'BRAK'}</Label>)}
            </Pill>
            <Pill>
              <Label>Cena</Label>
              {terms.map(({ price }, index) =>
                <Label key={index}>{price} EUR</Label>)}
            </Pill>
          </Info>
        </FirstColumn>
        <LastColumn>
          <Button disabled={disabled} onClick={openReservation}>
            {disabled ? 'Wyprzedane' : 'Zarezerwuj Termin'}
          </Button>
        </LastColumn>
      </Wrapper>
    </Hero>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${p => p.theme.mobile`
    flex-direction: column;
  `}
`

const Column = styled.div`
  margin-top: auto;
  flex: 1;
`

const FirstColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const LastColumn = styled(Column)`
  display: flex;
  justify-content: flex-end;
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  background-color: ${p => p.theme.colorSecondaryTransparent};
  padding: ${path('theme.marginS')} ${path('theme.marginS')} ${path('theme.marginS')} 0;
  backdrop-filter: blur(3px);
  ${p => p.theme.mobile`
    flex-direction: column;
    width: 100%;
    padding: 0;
  `}
`

const Pill = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${path('theme.marginS')};
  border-right: 1px solid ${path('theme.colorWhite')};
  font-weight: ${path('theme.weightNormal')};
  &:last-child {
    border-right: none;
  }
  ${p => p.theme.mobile`
    border: none;
    padding-top: .5rem;
    padding-bottom: .5rem;
    border-bottom: 1px solid ${path('theme.colorWhite')};
    &:last-child {
      border-bottom: none;
    }
  `}
`

const Label = styled(P)`
  color: ${path('theme.colorWhite')};
  margin: 0;
`
