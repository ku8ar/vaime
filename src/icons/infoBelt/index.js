import * as React from "react"
import styled from 'styled-components'
import bag from './bag'
import bus from './bus'
import foot from './foot'
import map from './map'

const IconWrapper = styled.div`
  height: ${p => p.size};
  width: ${p => p.size};
`

const types = {
  bag,
  bus,
  foot,
  map
}

const Icon = ({ icon }) => {
  const Component = types[icon]

  return Component ? (
    <IconWrapper fill={'white'} size={'2.5rem'}>
      <Component fill={'white'} size={'2.5rem'} />
    </IconWrapper>
  ) : null
}

export default Icon
