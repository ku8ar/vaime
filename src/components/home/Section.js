import React from 'react'
import styled from 'styled-components'
import { View, H2 } from '../Base'

const Wrapper = styled.div`
  padding: 1rem 0 1.5rem 0;
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