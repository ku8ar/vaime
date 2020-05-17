import React from 'react'
import styled, { css } from 'styled-components'
import { useField } from './hooks'
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

export const Input = ({ field, icon, error, ...props }) => {
  const [value, onChange] = useField(field)

  return (
    <Field icon={icon} error={error}>
      <InputStyled {...props} value={value} onChange={onChange} />
    </Field>
  )
}

export const TextArea = ({ field, icon, error, ...props }) => {
  const [value, onChange] = useField(field)

  return (
    <Field icon={icon} error={error}>
      <TextAreaStyled {...props} value={value} onChange={onChange} />
    </Field>
  )
}
