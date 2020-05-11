import React from 'react'
import styled from 'styled-components'
import Icon from '../../icons'
import { H6, Box } from '../Base'
import { colorPrimary, colorGreen } from '../style/Theme'

export default ({ priceContains = [], priceNotContains = [] }) => (
  <Wrapper>
    <Row>
      <Title>Cena zawiera</Title>
      {priceContains.map(({ text, icon }, i) => <Item key={i} text={text} icon={icon} ok />)}
    </Row>
    <Row>
      <Title>Cena nie zawiera</Title>
      {priceNotContains.map(({ text, icon }, i) => <Item key={i} icon={icon} text={text} />)}
    </Row>
  </Wrapper>
)

const Wrapper = styled.div`
  position: sticky;
  top: 5rem;
  margin-top: 3.5rem;
  margin-left: 4rem;
  width: auto;
  ${p => p.theme.mobile`
    width: 100%;
    margin-left: 0;
    position: relative;
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
`
const Text = styled.span`
  align-self: center;
`

const Title = styled(H6)`
  margin-top: 0;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0;
`
