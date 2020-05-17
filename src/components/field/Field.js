import React from 'react'
import styled from 'styled-components'
import Icon from './InputIcon'

const FormInputWrapper = styled.div`
  margin-top: 1rem;
  &:first-child {
    margin-top: 0;
  }
`

const FieldWrapper = styled.div`
  border-bottom: 1px solid ${p => p.theme.colorGreyDark};
  display: flex;
`

const Error = styled.p`
  color: ${p => p.theme.colorPrimary};
  margin: 0;
`

export default ({ icon, error, children }) => (
  <FormInputWrapper>
    <FieldWrapper>
      <Icon name={icon} />
      {children}
    </FieldWrapper>
    {error && <Error>{error}</Error>}
  </FormInputWrapper>
)
