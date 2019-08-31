import React from 'react'
import styled from 'styled-components'
import LayoutContent from '../LayoutContent'
import {H2} from '../Text'

const Wrapper = styled.div`
  background-color: ${props => props.theme[props.color]}
`

export default ({color, title, children}) => (
  <Wrapper color={color}>
    <LayoutContent>
      <H2 color='colorPrimary' center>{title}</H2>
      {children}
    </LayoutContent>
  </Wrapper>
)