import React from 'react'
import styled from 'styled-components'
import Icon from '../../icons'
import { H6, Box } from '../Base'
import { colorPrimary, colorGreen } from '../style/Theme'

export default ({ priceContains = [], priceNotContains = [] }) => (
  <Wrapper>
    {priceContains.length ? (
      <Row>
        <Title>Cena zawiera</Title>
        {priceContains.map(({ text, icon }, i) => <Item key={i} text={text} icon={icon} ok />)}
      </Row>
    ) : null}
    {priceNotContains.length ? (
      <Row>
        <Title>Cena nie zawiera</Title>
        {priceNotContains.map(({ text, icon }, i) => <Item key={i} icon={icon} text={text} />)}
      </Row>
    ) : null}
  </Wrapper>
)

const Wrapper = styled.div`
  position: sticky;
  top: 5rem;
  margin-top: 3rem;
  margin-left: 4rem;
  width: auto;
  ${p => p.theme.mobile`
    width: 100%;
    top: 0;
    margin-left: 0;
    margin-top: 0;
    position: relative;
  `}
  ${p => p.theme.print`
    break-before: page;
  `}
`

const Row = styled(Box)`
  margin-bottom: 1rem;
`

const TourIcon = styled(Icon)`
  margin-top: 0.25rem;
  margin-right: 1rem;
  fill: ${p => p.fill};
`

const Item = ({ text, ok, icon }) => (
  <ItemWrapper>
    <TourIcon icon={icon || (ok ? 'good' : 'bad')} fill={ok ? colorGreen : colorPrimary} size='2rem' />
    <Text>{text}</Text>
  </ItemWrapper>
)

const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: .5rem;
  ${p => p.theme.print` margin-bottom: 0; `}
`
const Text = styled.span`
  align-self: center;
`

const Title = styled(H6)`
  margin-top: 0;
  text-transform: uppercase;
  font-weight: ${p => p.theme.weightNormal};
`
