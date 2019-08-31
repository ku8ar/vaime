import React from 'react'
import styled from 'styled-components'
import {H4, H5, P} from '../Text'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.theme.marginM};
  width: 20rem;
`

const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-bottom: ${props => props.theme.marginS};
  border: 4px solid ${props => props.theme.colorPrimary};
  background-position: center center;
  background-size: cover;
`

export default ({ person }) => {
  const { name, place, text, image } = person
  const src = image && image.childImageSharp ? image.childImageSharp.fluid.src : image

  return (
    <Wrapper>
      <Avatar src={src} />
      <H4>{name}</H4>
      <H5>{place}</H5>
      <P>{text}</P>
    </Wrapper>
  )
}