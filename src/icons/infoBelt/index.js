import * as React from "react"
import styled from 'styled-components'
import compass from './compass'
import human from './human'
import bus from './bus'

const IconWrapper = styled.div`
  height: ${p => p.size};
  width: ${p => p.size};
`

const types = {
  compass,
  human,
  bus
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
