import React, { useCallback } from 'react'
import styled from 'styled-components'

export default ({ ...props }) => {
  const value = props.form.values[props.field.name]

  const onChange = useCallback(() => {
    props.form.setFieldValue(props.field.name, !value)
  }, [])

  return (
    <Wrapper>
      <Checkbox
        checked={value}
        {...props}
        {...props.field}
        onChange={onChange}
      />
      <Label>{props.label}</Label>
    </Wrapper>
  )
}

const Wrapper = styled.label`
  margin-top: .5rem;
  margin-bottom: .25rem;
  cursor: pointer;
  display: flex;
  align-items: baseline;
`

const Label = styled.span`
  margin-left .5rem;
  color: ${p => p.theme.colorSecondaryTransparent};
  line-height: 1.15rem;
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding-left: .5rem;
`

const Icon = styled.svg`
  fill: transparent;
  stroke: ${p => p.theme.colorPrimary};
  stroke-width: 6px;
  width: 1rem;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div`
  display: flex;
  width: 1rem;
  height: 1rem;
  border-radius: 3px;
  border: 2px solid  ${p => p.theme.colorPrimary};
  transition: all 150ms;
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)