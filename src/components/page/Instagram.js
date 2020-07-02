import React from 'react'
import styled from 'styled-components'
import useInstagram from '../../hooks/instagram'
import Icon from '../../icons/info'
import { P } from '../Base'

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  ${p => p.theme.mobile`
    margin-left: 0;
  `}
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  align-items: center;
`

const Title = styled(P)`
  margin-left: .5rem;
  margin-bottom: 0;
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
  <SectionWrapper>
    <TitleWrapper>
      <Icon icon='instagram' />
      <Title>vaimetravel</Title>
    </TitleWrapper>
    <Wrapper>
      {useInstagram().slice(0, 9).map(({ href, src }) => (
        <Anchor key={href} target="_blank" href={href} style={{ backgroundImage: `url("${src}")` }} />
      ))}
    </Wrapper >
  </SectionWrapper>
)
