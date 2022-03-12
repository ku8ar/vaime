import React from 'react'
import styled from 'styled-components'
import { useGlobalData } from '../../module/globalData'
import Icon from '../../icons/info'

export default () => {
  const data = useGlobalData()

  const phones = data.phoneNumbers || []
  const email = data.email

  return (
    <Wrapper>
      <Section>
        <Icon icon='mail' />
        <Anchor href={`mailto:${email}`}>{email}</Anchor>
      </Section>
      <Section>
        <Icon icon='smartphone' />
        <PhoneNumbers>
          {phones.map(phone => <Anchor key={phone} href={`tel: ${phone}`}>{phone}</Anchor>)}
        </PhoneNumbers>
      </Section>
    </Wrapper>
  )
}

const PhoneNumbers = styled.div`
  display: flex;
  flex-direction: column;
`

const Section = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-top: .5rem;
  ${p => p.theme.mobile` margin: 0; `}
`

const Anchor = styled.a`
  margin-left: .5rem;
  color: black;
`
