import React from 'react'
import styled, { css } from 'styled-components'
import Fb from '../../icons/buttons/fb'
import Print from '../../icons/buttons/print'
import { H2, H6, boxStyle } from '../Base'
import { siteUrl } from '../custom/JsonLd'
import Image from '../Image'
import Discount from './Discount'

const windowGlobal = typeof window !== 'undefined' && window || {}

const fbShareUrl = 'https://www.facebook.com/sharer/sharer.php?u='

export default (tour) => {
  const { description, informations, thumb, slug } = tour

  const thumbData = {
    name: 'miniature',
    image: thumb
  }

  return (
    <Container>
      <Wrapper>
        <H2>{description}</H2>
        <Buttons>
          <Link href={`${fbShareUrl}${siteUrl}${slug}`} target="_blank" rel="noopener noreferrer"><Fb size={20} /></Link>
          <Button onClick={windowGlobal.print}><Print size={20} /></Button>
        </Buttons>
      </Wrapper>
      {informations && (
        <SubInfoWrapper>
          <Thumb data={thumbData} />
          <Info>{informations}</Info>
          <DiscountStyled tour={tour} />
        </SubInfoWrapper>
      )}
    </Container>
  )
}

const DiscountStyled = styled(Discount)`
  position: relative;
  right: auto;
  top: auto;
`

const Thumb = styled(Image)`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  ${p => p.theme.print` display: none; `}
`

const SubInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  overflow: hidden;
  ${p => p.theme.mobile` align-items: flex-start; `}
  ${boxStyle}
`

const Info = styled(H6)`
  text-transform: none;
  flex: 1;
  margin: 0 1rem;
  ${p => p.theme.print` margin: 0; `}
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