import React from 'react'
import styled from 'styled-components'
import { useField, useError } from './hooks'
import Field from './Field'

const InputStyled = styled.input`
  min-height: 1.75rem;
  width: 100%;
  padding: .5rem;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${p => p.theme.colorSecondaryTransparent};
  }
`

export default ({ field, icon, ...props }) => {
  const [value, onChange] = useField(field)
  const error = useError(field)

  return (
    <Field icon={icon} error={error}>
      <InputStyled type='date' {...props} value={value} onChange={onChange} />
    </Field>
  )
}
