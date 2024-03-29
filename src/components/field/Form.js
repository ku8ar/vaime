import React from 'react'
import styled from 'styled-components'

export const FormContext = React.createContext()

export default ({ values, errors, setValues, children }) => (
  <FormContext.Provider value={{ values, errors, setValues }} setValues={setValues}>
    <FormWrapper>
      {children}
    </FormWrapper>
  </FormContext.Provider>
)

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`