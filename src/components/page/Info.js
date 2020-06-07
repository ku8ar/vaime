import React from 'react'
import styled from 'styled-components'
import useGlobal from '../../utils/useGlobal'
import { H5, P } from '../Base'

export default () => {
  const data = useGlobal()

  const phones = data.phoneNumbers || []
  const email = data.email

  return (
    <Wrapper>
      <Section>
        <Title>Skontaktuj się z nami</Title>
        <Subtitle>Adres e-mail:</Subtitle>
        <Anchor href={`mailto: ${email}`}>{email}</Anchor>
        <Subtitle>Numer telefonu:</Subtitle>
        {phones.map(phone => <Anchor key={phone} href={`tel: ${phone}`}>{phone}</Anchor>)}
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
  margin-left: 2rem;
  ${p => p.theme.mobile`
    margin: 0;
  `}
`
