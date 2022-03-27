import React from 'react'
import styled from 'styled-components'
import useDict from 'src/hooks/dict'
import { H2 } from '../Base'
import ContactForm from '../forms/ContactForm'

const Wrapper = styled.div`
  width: auto;
  max-width: 75%;
  margin-left: 2rem;
  flex: 1;
  ${p => p.theme.mobile`
    margin-left: 0;
    max-width: 100%;
    width: 100%;
  `}
`

const Title = styled(H2)`
  text-transform: none;
  margin-bottom: 2rem;
`

export default () => {
  const getInTouchText = useDict("getInTouch")

  return (
    <Wrapper> 
      <Title color='colorPrimary'>{getInTouchText}</Title>
      <ContactForm />
    </Wrapper>
  )
}
