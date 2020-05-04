import React from 'react'
import styled from 'styled-components'
import useInstagram from '../../hooks/instagram'

const Wrapper = styled.div`
  width: 100%;
  margin-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Anchor = styled.a`
  border: 1px solid white;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity .15s;
  &:hover {
    opacity: 0.8;
  }
  flex: 0 33%;
  width: 33%;
  padding-bottom: 32%;
`

export default () => (
  <Wrapper>
    {useInstagram().slice(0, 9).map(({ href, src }) => (
      <Anchor key={href} target="_blank" href={href} style={{ backgroundImage: `url("${src}")` }} />
    ))}
  </Wrapper >
)
