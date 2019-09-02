import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { path } from 'rambda'
import Hero from '../Hero'
import {H1, P, Button} from '../Base'

export default ({ images, title, startDate, endDate, price, seats, openReservation }) => (
  <Hero images={images}>
    <Wrapper>
      <FirstColumn>
        <H1 color='colorWhite'>{title}</H1>
        <Info>
          <Pill>
            <Label>Termin</Label>
            <Label>{calcDate(startDate, endDate)}</Label>
          </Pill>
          <Pill>
            <Label>Liczba dni</Label>
            <Label>{countDays(startDate, endDate)} dni / {(countDays(startDate, endDate) || 1) - 1} nocy</Label>
          </Pill>
          <Pill>
            <Label>Wolne miejsca</Label>
            <Label>{seats}</Label>
          </Pill>
          <Pill>
            <Label>Cena</Label>
            <Label>{price} EUR</Label>
          </Pill>
        </Info>
      </FirstColumn>
      <LastColumn>
        <Button onClick={openReservation}>Zarezerwuj Termin</Button>
      </LastColumn>
    </Wrapper>
  </Hero>
)

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

const calcDate = (startDate, endDate) => startDate && endDate ?
  `${moment(startDate).format('DD.MM')}-${moment(endDate).format('DD.MM')}.${moment(startDate).format('YYYY')}`
  : ''

const countDays = (startDate, endDate) => startDate && endDate ? moment(endDate).diff(moment(startDate), 'days') : 0
