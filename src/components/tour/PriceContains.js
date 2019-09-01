import React from 'react'
import styled from 'styled-components'
import { View, H5 } from '../Base'
import good from '../../img/good_circle.svg'
import bad from '../../img/bad_circle.svg'

const Wrapper = styled.div`
  ${p => p.theme.mobile`
    
  `}
`

const Sections = styled(View)`
  display: flex;
  flex-direction: row;
  ${p => p.theme.mobile`
    flex-direction: column;
  `}
`

const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: .5rem;
`
const Text = styled.p``
const Icon = styled.img`
  width: 1rem;
  margin-left: 1.5rem;
  margin-right: 1rem;
`

const Item = ({ text, icon }) => (
  <ItemWrapper>
    <Text>{text}</Text>
  </ItemWrapper>
)

const Title = styled(H5)`
  margin-top: 1rem;
`

const Column = styled.div``

export default ({ priceContains = [], priceNotContains = [] }) => (
  <Wrapper>
    <Column>
      <Title>Cena zawiera</Title>
      {priceContains.map((text, i) => <Item key={i} text={text} icon={good} />)}
    </Column>
    <Column>
      <Title>Cena nie zawiera</Title>
      {priceNotContains.map((text, i) => <Item key={i} text={text} icon={bad} />)}
    </Column>
  </Wrapper>
)