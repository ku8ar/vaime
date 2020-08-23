import * as React from "react"
import styled from 'styled-components'
import compass from './compass'
import human from './human'
import bus from './bus'
import group from './group'
import money from './money'

const IconWrapper = styled.div`
  height: ${p => p.size};
  width: ${p => p.size};
`

const types = {
  compass,
  human,
  bus,
  group,
  money
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
