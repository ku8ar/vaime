import React from 'react'
import styled from 'styled-components'
import InfoPopup from './InfoPopup'
import { P } from '../Base'

export default ({ title, info, last, children }) => (
  <Section last={last}>
    <OrderInfo title={title} info={info} />
    {children}
  </Section>
)

const OrderInfo = ({ title, info }) => (
  <OrderInfoWrapper>
    <OrderInfoText>{title}</OrderInfoText>
    <InfoPopup info={info} />
  </OrderInfoWrapper>
)

const Section = styled.div`
  margin-bottom: 2rem;
  ${p => p.last && `
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  `}
  ${p => p.theme.mobile`
    margin-bottom: 0;
  `}
`

const OrderInfoWrapper = styled.div`
  display: flex;
  ${p => p.theme.mobile`
    display: none;
  `}
`

const OrderInfoText = styled(P)`
  text-transform: uppercase;
  color: ${p => p.theme.colorSecondary};
`
