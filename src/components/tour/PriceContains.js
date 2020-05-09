import React from 'react'
import styled, { css } from 'styled-components'
import { H6 } from '../Base'
import good from '../../img/good_circle.svg'
import bad from '../../img/bad_circle.svg'

export default ({ priceContains = [], priceNotContains = [] }) => (
  <Wrapper>
          <Row>
          <Title>Cena zawiera</Title>
          {priceContains.map((text, i) => <Item key={i} text={text} ok />)}
        </Row>
        <Row>
          <Title>Cena nie zawiera</Title>
          {priceNotContains.map((text, i) => <Item key={i} text={text} />)}
        </Row>

  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  margin-top: 3.5rem;
  margin-left: 4rem;
  width: auto;
  ${p => p.theme.mobile`
    width: 100%;
    margin-left: 0;
  `}
`

const Row = styled.div`
  margin-bottom: 1rem;
`

const Icon = styled.img`
  height: 1rem;
  margin-top: 0.25rem;
  margin-right: 1rem;
`

const Item = ({ text, ok }) => (
  <ItemWrapper>
    <Icon src={ok ? good : bad} />
    <Text>{text}</Text>
  </ItemWrapper>
)


const ItemWrapper = styled.div`
  display: flex;
`
const Text = styled.span`
`

const Title = styled(H6)`
  margin-top: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0;
`
