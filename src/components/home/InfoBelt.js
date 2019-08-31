import React from 'react'
import styled from 'styled-components'
import { View, P } from '../Base'
import marker from '../../img/marker.svg'
import car from '../../img/car.svg'
import user from '../../img/user.svg'

const data = [
  {img: marker, label: 'Zwiedzanie', description: 'Najlepsze atrakcje Gruzji i Armenii'},
  {img: user, label: 'Zespół', description: 'Wykwalifikowani przewodnicy i kierowcy'},
  {img: car, label: 'Komfortowa podróż', description: 'Kameralne grupy'}
]

const Wrapper = styled.div`
  padding: .5rem 0;
  background-color: ${p => p.theme.colorGrey}
`

const InfoView = styled(View)`
  justify-content: space-around;
`

const InfoWrapper = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const Icon = styled.img`
  height: 3rem;
  margin-right: 1rem;
`

const Column = styled.div``

const Title = styled(P)`
  font-size: 0.9rem;
  margin-bottom: 0;
  color: ${p => p.theme.colorSecondary}
`

const Description = styled(P)`
  margin-bottom: 0;
`

const InfoItem = ({img, label, description}) => (
  <InfoWrapper>
    <Icon src={img} />
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