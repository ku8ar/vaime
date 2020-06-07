import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Section from './Section'
import { H5 } from '../Base'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const FaqItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 100%;
`

const FaqColumn = styled.div`
  flex: 1;
  padding-top: .5rem;
`

const Hr = styled.div`
  width: ${p => p.open ? '100%' : '10rem'};
  transition: all 0.3s;
  height: 1px;
  background-image: linear-gradient(to right, ${p => p.theme.colorPrimary}, ${p => p.open ? p.theme.colorPrimary : 'white'});
  margin-bottom: 1rem;
`

const Answer = styled.p`
  text-align: justify;
  display: ${p => p.open ? 'visible': 'none'}
`

const FaqWrapper = styled(Section)`
  flex-direction: column;
`

const FaqItem = ({ question, answer }) => {

  const [open, setOpen] = useState(false)

  const swipe = useCallback(() => setOpen(!open), [open])

  return (
    <FaqItemWrapper onClick={swipe}>
      <FaqColumn>
        <Hr open={open} />
        <p><strong>{question}</strong></p>
        <Answer open={open}>{answer}</Answer>
      </FaqColumn>
    </FaqItemWrapper>
  )
}

export default ({ list }) => list && list.length ? (
  <FaqWrapper>
    <H5>FAQ</H5>
    <Wrapper>
      {list.map((el, i) => <FaqItem key={i} {...el} />)}
    </Wrapper>
  </FaqWrapper>
) : null
