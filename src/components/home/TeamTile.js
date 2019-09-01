import React from 'react'
import styled from 'styled-components'
import Image from '../Image'
import {H4, H5, P} from '../Base'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.theme.marginM};
  width: 20rem;
  ${p => p.theme.mobile`
    margin-left: 0;
    margin-right: 0;
  `}
`

const Avatar = styled(Image)`
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
  const imgData = {image, name}

  return (
    <Wrapper>
      <Avatar data={imgData} />
      <H4>{name}</H4>
      <H5>{place}</H5>
      <P>{text}</P>
    </Wrapper>
  )
}