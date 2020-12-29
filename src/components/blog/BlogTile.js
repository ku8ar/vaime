import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Image from '../Image'
import { H4, P } from '../Base'

export default ({ slug, thumb, title, description }) => {
  if (!slug || !thumb || !title) return null

  return (
    <Wrapper to={slug} title={title}>
      <LeftImage data={{ image: thumb, name: title }} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  )
}

const LeftImage = styled(Image)`
  height: 20rem;
`

const Wrapper = styled(Link)`

`
const Title = styled(H4)`
  margin-top: .5rem;
`
const Description = styled(P)`

`