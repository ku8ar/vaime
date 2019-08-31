import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import Section from './Section'

const FaqItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 100%;
`

const FaqIcon = styled.div`
  background-color: ${p => p.theme.colorPrimary};
  margin-top: .25rem;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: .5rem;
  margin-top: .75rem;
  font-size: .7rem;
  font-weight: bolder;
`

const FaqColumn = styled.div`
  flex: 1;
  padding-top: .5rem;
  border-bottom: 1px dotted ${p => p.theme.colorGreyDark};
`

const FaqItem = ({ question, answer }) => {

  const [open, setOpen] = useState(false)

  const swipe = useCallback(() => setOpen(!open), [open])

  return (
    <FaqItemWrapper onClick={swipe}>
      <FaqIcon>?</FaqIcon>
      <FaqColumn>
        <p><strong>{question}</strong></p>
        {open && <p>{answer}</p>}
      </FaqColumn>
    </FaqItemWrapper>
  )
}

export default ({ list }) => list && list.length ? (
  <Section>
    {list.map((el, i) => <FaqItem key={i} {...el} />)}
  </Section>
) : null
