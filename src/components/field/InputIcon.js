import React from 'react'
import styled from 'styled-components'
import comment from '../../img/comment.svg'
import person from '../../img/person.svg'
import edit from '../../img/edit.svg'
import envelope from '../../img/envelope.svg'

const icons = {
  comment,
  person,
  edit,
  envelope,
}

export default ({name}) => {
  const src = icons[name]
  return src ? <InputIcon src={src} /> : null
}

const InputIcon = styled.img`
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  margin-top: .5rem;
  margin-left: .5rem;
  margin-right: .5rem;
`