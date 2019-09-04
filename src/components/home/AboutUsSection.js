import React from 'react'
import styled from 'styled-components'
import {path} from 'rambda'
import { View, H2 } from '../Base'
import Image from '../Image'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  ${p => p.theme.mobile`
    
  `}
`

const Content = styled(View)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`

const ContentWrapper = styled.div`
  width: 50%;
  ${p => p.theme.mobile`
    width: 100%;
  `}
`

const BgWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  ${p => p.theme.mobile`
    display: none;
  `}
`

export default ({title, image, children}) => {
  if (!title || !children) return null
  const img = path('childImageSharp.fluid.src', image) || image
  console.log(img)
  return (
    <Wrapper>
      <Content>
        <ContentWrapper>
          <H2 color='colorPrimary'>{title}</H2>
          {children}
        </ContentWrapper>
      </Content>
      <BgWrapper style={{backgroundImage: `url(${img})`}} />
    </Wrapper>
  )
}