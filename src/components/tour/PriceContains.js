import React from 'react'
import styled from 'styled-components'
import { H5 } from '../Base'

export default ({ priceContains = [], priceNotContains = [] }) => (
  <Wrapper>
    <Row>
      <Title>Cena zawiera</Title>
      {priceContains.map((text, i) => <Item key={i} text={text} />)}
    </Row>
    <Row>
      <Title>Cena nie zawiera</Title>
      {priceNotContains.map((text, i) => <Item key={i} text={text} />)}
    </Row>
  </Wrapper>
)

const Wrapper = styled.div`
  position: relative;
  margin-top: 4rem;
  margin-left: 4rem;
  width: auto;
  padding-left: 1rem;
  ${p => p.theme.mobile`
    width: 100%;
    margin-left: 0;
  `}

  &:before, &:after {
    display: block;
    content: "";
    width: 5rem;
    height: 5rem;
    position: absolute;
  }

  &:before {
    top: -10px;
    left: -10px;
    border-top: 2px solid ${p => p.theme.colorPrimary};
    border-left: 2px solid  ${p => p.theme.colorPrimary};
  }

  &:after {
    bottom: -10px;
    right: -10px;
    border-bottom: 2px solid  ${p => p.theme.colorPrimary};
    border-right: 2px solid  ${p => p.theme.colorPrimary};
}

`

const Row = styled.div`
  margin-bottom: 2rem;
`

const Item = ({ text }) => (
  <ItemWrapper>
    <Text>{text}</Text>
  </ItemWrapper>
)


const ItemWrapper = styled.div`
  display: flex;
`
const Text = styled.p``

const Title = styled(H5)`
  margin-top: 1rem;
  text-transform: uppercase;
  color ${p => p.theme.colorPrimary};
`
