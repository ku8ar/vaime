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
import home from './home'
import alcohol from './alcohol'
import cinemaTicket from './cinemaTicket'
import grapes from './grapes'
import healthcare from './healthcare'
import coffee from './coffee'
import restaurant from './restaurant'
import train from './train'
import whisky from './whisky'

const IconWrapper = styled.div`
  height: 2rem;
  width: 2rem;
`

const types = {
  good: Good,
  bad: Bad,
  beach: beach,
  boat: boat,
  bus: bus,
  cableCar: cableCar,
  catamaran: catamaran,
  food: food,
  guide: guide,
  hotel: hotel,
  map: map,
  offroad: offroad,
  plane: plane,
  ticket: ticket,
  wine: wine,
  home,
  alcohol,
  cinemaTicket,
  grapes,
  healthcare,
  coffee,
  restaurant,
  train,
  whisky
}

const Icon = ({ icon, className, fill, size }) => {
  const Component = types[icon]

  return Component ? (
    <IconWrapper className={className} fill={fill}>
      <Component size={size} />
    </IconWrapper>
  ) : null
}

export default Icon
