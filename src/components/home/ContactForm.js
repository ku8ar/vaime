import React from 'react'
import styled from 'styled-components'
import { H2 } from '../Base'
import ContactForm from '../forms/ContactForm'

const Wrapper = styled.div`
  width: auto;
  max-width: 50%;
  margin-left: 2rem;
  flex: 1;
`

const Title = styled(H2)`
  text-transform: none;
  margin-bottom: 2rem;
`

export default () => {
  return (
    <Wrapper> 
      <Title color='colorPrimary'>Napisz do nas</Title>
      <ContactForm />
    </Wrapper>
  )
}
