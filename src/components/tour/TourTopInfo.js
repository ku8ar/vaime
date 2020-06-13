import React from 'react'
import styled, { css } from 'styled-components'
import Fb from '../../icons/buttons/fb'
import Print from '../../icons/buttons/print'
import { H2, H3 } from '../Base'
import { siteUrl } from '../custom/JsonLd'

const windowGlobal = typeof window !== 'undefined' && window || {}

const fbShareUrl = 'https://www.facebook.com/sharer/sharer.php?u='

export default ({ description, informations, slug }) => {

  return (
    <Container>
      <Wrapper>
        <H2>{description}</H2>
        <Buttons>
          <Link href={`${fbShareUrl}${siteUrl}${slug}`} target="_blank" rel="noopener noreferrer"><Fb size={20} /></Link>
          <Button onClick={windowGlobal.print}><Print size={20} /></Button>
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
  display: flex;
  ${p => p.theme.print` display: none; `}
`

const buttonStyle = css`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  border: 1px solid ${p => p.theme.colorSecondary};
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Link = styled.a`
  ${buttonStyle}
  margin-right: .5rem;
`

const Button = styled.button`
  ${buttonStyle}
  &:hover {
    cursor: pointer;
  }
`