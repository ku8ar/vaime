import React from 'react'
import styled, { css } from 'styled-components'
import { useField, useError } from './hooks'
import Field from './Field'

const inputCss = css`
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

const InputStyled = styled.input`
  ${inputCss}
`

const TextAreaStyled = styled.textarea`
  ${inputCss}
  resize: vertical;
`

export const Input = ({ field, icon, type, ...props }) => {
  const [value, , setValue] = useField(field)
  const error = useError(field)

  const onChange = e => {
    const value = e.target.value

    setValue(type === 'number' ? Number(value) : value)
  }

  return (
    <Field icon={icon} error={error}>
      <InputStyled type={type} {...props} value={value} onChange={onChange} />
    </Field>
  )
}

export const TextArea = ({ field, icon, ...props }) => {
  const [value, onChange] = useField(field)
  const error = useError(field)

  return (
    <Field icon={icon} error={error}>
      <TextAreaStyled {...props} value={value} onChange={onChange} />
    </Field>
  )
}
