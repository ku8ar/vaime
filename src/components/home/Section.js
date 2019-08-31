import React from 'react'
import styled from 'styled-components'
import { View, H2 } from '../Base'

const Wrapper = styled.div`
  background-color: ${props => props.theme[props.color]}
`

export default ({color, title, children}) => (
  <Wrapper color={color}>
    <View>
      <H2 color='colorPrimary' center>{title}</H2>
      {children}
    </View>
  </Wrapper>
)