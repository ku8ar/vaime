import React from 'react'
import styled from 'styled-components'
import Image from '../Image'
import { boxStyle } from '../Base'

const Map = styled(Image)`
  ${boxStyle}
  width: 100%;
`

export default ({ map }) => {
  const data = map ? {
    name: 'mapa',
    image: map
  } : null
  return <Map data={data} />
}