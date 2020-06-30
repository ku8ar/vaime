import * as React from "react"
import styled from 'styled-components'
import bed from './bed'
import calendar from './calendar'
import map from './map'
import money from './money'
import ticket from './ticket'
import logo from './logo'

const IconWrapper = styled.div`
  height: 3rem;
  width: 3rem;
`

const types = {
  bed,
  calendar,
  map,
  money,
  ticket,
  logo
}

const Icon = ({ icon, className, fill }) => {
  const Component = types[icon]

  return Component ? (
    <IconWrapper className={className} fill={fill}>
      <Component size={'3rem'} fill={fill} />
    </IconWrapper>
  ) : null
}

export default Icon
