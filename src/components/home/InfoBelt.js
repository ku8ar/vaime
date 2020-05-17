import React from 'react'
import styled from 'styled-components'
import { View, P } from '../Base'
import Compass from '../../icons/compass'
import User from '../../icons/user'
import BusCircle from '../../icons/busCircle'

const data = [
  {Icon: Compass, label: 'Zwiedzanie', description: 'Najlepsze atrakcje Gruzji i Armenii'},
  {Icon: User, label: 'Zespół', description: 'Wykwalifikowani przewodnicy i kierowcy'},
  {Icon: BusCircle, label: 'Komfortowa podróż', description: 'Kameralne grupy'}
]

const Wrapper = styled.div`
  background-color: ${p => p.theme.colorGrey}
`

const InfoView = styled(View)`
  justify-content: space-around;
  flex-wrap: wrap;
`

const InfoWrapper = styled.div`
  padding: .5rem 0;
  width: 15rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const IconWrapper = styled.div`
  height: 3rem;
  margin-right: 1rem;
`

const Column = styled.div``

const Title = styled(P)`
  font-size: 1rem;
  margin-bottom: 0;
  color: ${p => p.theme.colorSecondary}
`

const Description = styled(P)`
  margin-bottom: 0;
`

const InfoItem = ({Icon, label, description}) => (
  <InfoWrapper>
    <IconWrapper>
      <Icon />
    </IconWrapper>
    <Column>
      <Title>{label}</Title>
      <Description>{description}</Description>
    </Column>
  </InfoWrapper>
)

export default () => (
  <Wrapper>
    <InfoView>
      {data.map(item => <InfoItem key={item.label} {...item} />)}
    </InfoView>
  </Wrapper>
)