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
  border-bottom: ${p => p.filled ? '0px' : '1px'} solid ${p => p.theme.colorGreyDark};
  display: flex;

  background-color: ${p => p.filled ? p.theme.colorGreyNew : 'none'};
  border-radius: ${p => p.filled ? '.25rem' : 'none'};
  padding: ${p => p.filled ? '.25rem 0' : 'none'};
`

const Error = styled.p`
  color: ${p => p.theme.colorPrimary};
  margin: 0;
`

export default ({ icon, error, filled, children }) => (
  <FormInputWrapper>
    <FieldWrapper filled={filled}>
      <Icon name={icon} />
      {children}
    </FieldWrapper>
    {error && <Error>{error}</Error>}
  </FormInputWrapper>
)
