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
  beach,
  boat,
  bus,
  cableCar,
  catamaran,
  food,
  guide,
  hotel,
  map,
  offroad,
  plane,
  ticket,
  wine
}

const Icon = ({ type, className, fill }) => {
  const Component = types[type]

  return Component ? (
    <IconWrapper type={type} className={className} fill={fill}>
      <Component />
    </IconWrapper>
  ) : null
}

export default Icon
