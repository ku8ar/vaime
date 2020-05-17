import React, { useCallback } from 'react'
import styled from 'styled-components'
import { useField } from './hooks'
import Field from './Field'

const Select = styled.select`
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

const Option = styled.option`

`

export default ({ field, icon, error, options, ...props }) => {
  const [value, , setValue] = useField(field)
  const selectValue = options[value]
  const onChange = useCallback(e => {
    setValue(options.indexOf(e.target.value))
  }, [setValue, options, value])

  return (
    <Field icon={icon} error={error}>
      <Select {...props} value={selectValue} onChange={onChange}>
        {options.map((option, index) => <Option key={option} value={option}>{option}</Option>)}
      </Select>
    </Field>
  )
}
