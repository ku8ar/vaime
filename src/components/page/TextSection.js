import React from 'react'
import styled from 'styled-components'
import { P } from '../Base'

export default ({ text }) => {
  if (!text ) return null

  return (<Text>{text}</Text>)
}

const Text = styled(P)`
  margin: 0;
`
