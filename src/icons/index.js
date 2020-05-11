import * as React from "react"
import styled from 'styled-components'
import Good from './good_circle'
import Bad from './bad_circle'
import beach from './beach'
import boat from './boat'
import bus from './bus'
import cableCar from './cableCar'
import catamaran from './catamaran'
import food from './food'
import guide from './guide'
import hotel from './hotel'
import map from './map'
import offroad from './offroad'
import plane from './plane'
import ticket from './ticket'
import wine from './wine'

const IconWrapper = styled.div`
  height: 1rem;
  width: 1rem;
`

const types = {
  good: Good,
  bad: Bad,
  beach: beach,
  boat: boat,
  bus: bus,
  cable: cableCar,
  catamaran: catamaran,
  food: food,
  guide: guide,
  hotel: hotel,
  map: map,
  offroad: offroad,
  plane: plane,
  ticket: ticket,
  wine: wine
}

const Icon = ({ icon, className, fill }) => {
  const Component = types[icon]

  return Component ? (
    <IconWrapper className={className} fill={fill}>
      <Component />
    </IconWrapper>
  ) : null
}

export default Icon
