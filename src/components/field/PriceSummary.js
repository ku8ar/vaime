import React from 'react'
import styled from 'styled-components'
import {  H2, H6, P } from '../Base'

export default ({ price, adults, currency = 'EUR' }) => {
  const amount = price * adults

  return (
    <PriceWrapper>
      <PriceText>Razem</PriceText>
      <PriceAmount>{amount}</PriceAmount>
      <PriceCurrency>{currency}</PriceCurrency>
    </PriceWrapper>
  )
}

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  ${p => p.theme.mobile`
    margin-top: 1rem;
  `}
`
const PriceText = styled(H6)`
  margin: 0;
  font-weight: ${p => p.theme.weightBolder};
  color: ${p => p.theme.colorPrimary};
`
const PriceAmount = styled(H2)`
  margin: 0;
  font-weight: ${p => p.theme.weightBolder};
  margin: 0 .5rem;
  color: ${p => p.theme.colorPrimary};
`
const PriceCurrency = styled(P)`
  margin: 0;
  font-weight: ${p => p.theme.weightBolder};
  color: ${p => p.theme.colorPrimary};
`

