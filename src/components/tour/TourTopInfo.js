import React from 'react'
import styled from 'styled-components'
import Print from '../../icons/buttons/print'
import { H2 } from '../Base'

export default ({ description }) => {

  return (
    <Wrapper>
      <H2>{description}</H2>
      <Buttons>
        <Button onClick={window.print}><Print /></Button>
      </Buttons>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: baseline;
  ${p => p.theme.mobile` align-items: center; `}
`

const Buttons = styled.div`
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