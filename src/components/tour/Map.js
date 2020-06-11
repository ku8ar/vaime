import React from 'react'
import styled from 'styled-components'
import Image from '../Image'

const Map = styled(Image)`
  background: transparent;
  width: 100%;
  ${p => p.theme.print` break-before: page; `}
`

export default ({ map }) => {
  const data = map ? {
    name: 'mapa',
    image: map
  } : null
  return <Map data={data} />
}