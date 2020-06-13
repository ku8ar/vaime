import React from 'react'
import styled from 'styled-components'
import Print from '../../icons/buttons/print'
import { H2, H3 } from '../Base'

const windowGlobal = typeof window !== 'undefined' && window || {}

export default ({ description, informations }) => {

  return (
    <Container>
      <Wrapper>
        <H2>{description}</H2>
        <Buttons>
          <Button onClick={windowGlobal.print}><Print /></Button>
        </Buttons>
      </Wrapper>
      {informations && <Info>{informations}</Info>}
    </Container>
  )
}

const Info = styled(H3)`
  font-size: 1rem;
  margin-top: 1rem;
  text-transform: none;
  text-align: justify;
`

const Container = styled.div`
  width: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
  ${p => p.theme.mobile` align-items: center; `}
`

const Buttons = styled.div`
  margin-left: 1rem;
  ${p => p.theme.print` display: none; `}
`

const Button = styled.button`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid ${p => p.theme.colorSecondary};
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`