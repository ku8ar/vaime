import React from 'react'
import styled from 'styled-components'
import { path } from 'rambda'
import Hero from '../Hero'
import { calcDate, calcMonthsDate } from '../../utils/date'
import { H1, P, Button } from '../Base'
import { getIsTourDisabled } from '../../utils/selectors'

export default (tour) => {
  const { images, title, openReservation, terms, oneDay, minSeats } = tour

  if (!terms) {
    return null
  }

  const disabled = getIsTourDisabled(tour)

  return (
    <Hero images={images}>
      <Wrapper>
        <FirstColumn>
          <H1 color='colorWhite'>{title}</H1>
          <Info>
            <Pill>
              <Label>Termin</Label>
              {terms.map(({ startDate, endDate }, index) =>
                <Label key={index}>
                  {(oneDay ? calcMonthsDate : calcDate)(startDate, endDate)}
                </Label>
              )}
            </Pill>
            {!oneDay && (
              <Pill>
                <Label>Liczba dni</Label>
                {terms.map(({ daysCount }, index) =>
                  <Label key={index}>{daysCount}</Label>)}
              </Pill>
            )}
            {oneDay ? (
              <Pill>
                <Label>Min. liczba miejsc</Label>
                <Label>{minSeats}</Label>
              </Pill>
            ) : (
            <Pill>
              <Label>Wolne miejsca</Label>
              {terms.map(({ seats }, index) =>
                <Label key={index}>{seats || 'BRAK'}</Label>)}
            </Pill>
            )}
            <Pill>
              <Label>Cena</Label>
              {terms.map(({ price }, index) =>
                <Label key={index}>{price} EUR</Label>)}
            </Pill>
          </Info>
        </FirstColumn>
        <LastColumn>
          <TourButton disabled={disabled} onClick={openReservation}>
            {disabled ? 'Wyprzedane' : 'Zarezerwuj Termin'}
          </TourButton>
        </LastColumn>
      </Wrapper>
    </Hero>
  )
}

const TourButton = styled(Button)`
  min-width: 50%;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${p => p.theme.mobile`
    flex-direction: column;
    height: auto;
    margin-top: auto;
  `}
  z-index: 1;
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
  ${p => p.theme.print` display: none; `}
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${p => p.theme.colorSecondaryTransparent};
  padding: ${path('theme.marginS')} 0rem ${path('theme.marginS')} 0rem;
  backdrop-filter: blur(3px);

  border-top-left-radius: ${p => p.theme.radiusSmall};
  border-top-right-radius: ${p => p.theme.radiusSmall};

  ${p => p.theme.mobile`
    flex-direction: column;
    width: 100%;
    padding: 0;
  `}
  ${p => p.theme.print`
    flex-direction: row;
    width: 100%;
    background-color: white;
    border: 1px solid black;
  `}
`

const Pill = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem ${path('theme.marginS')};
  border-right: 1px solid ${path('theme.colorWhite')};
  font-weight: ${path('theme.weightNormal')};
  &:last-child {
    border-right: none;
  }
  min-width: 7rem;
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
  ${p => p.theme.print`
    color: black;
    &:first-child {
      border-bottom: 1px dotted black;
    }
  `}
`
