import React from 'react'
import styled from 'styled-components'
import useGlobal from '../../utils/useGlobal'
import { H5, P } from '../Base'

export default () => {
  const data = useGlobal()

  const phone = data.phoneNumbers && data.phoneNumbers[0] || null
  const email = data.email

  return (
    <Wrapper>
      <Section>
        <Title>Sktontaktuj się z nami</Title>
        <Subtitle>Adres e-mail:</Subtitle>
        <Anchor href={`mailto: ${email}`}>{email}</Anchor>
        <Subtitle>Numer telefonu:</Subtitle>
        <Anchor href={`tel: ${phone}`}>{phone}</Anchor>
      </Section>
    </Wrapper>
  )
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled(H5)``

const Subtitle = styled(P)``

const Anchor = styled.a`
  margin-bottom: .75rem;
`

const Wrapper = styled.div`
  margin-top: 1rem;
  margin-left: auto;
  ${p => p.theme.mobile`
    margin: 0;
  `}
`
