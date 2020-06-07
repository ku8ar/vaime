import React from 'react'
import styled from 'styled-components'
import { path } from 'rambda'
import { View, H2 } from '../Base'
import Image from '../Image'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${p => p.theme.colorGrey};
`

const Content = styled(View)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
`

const ContentWrapper = styled.div`
  width: 50%;
  padding-right: 2rem;
  ${p => p.theme.mobile`
    width: 100%;
    padding-right: 0;
  `}
`

const AboutUsImage = styled(Image)`
  position: absolute;
  right: 0;
  width: 50%;
  height: 100%;
  ${p => p.theme.mobile`
    display: none;
  `}
`

const imgStyle = { position: 'absolute', width: '50%', height: '100%' }

export default ({title, image, children }) => {
  if (!children) return null
  return (
    <Wrapper>
      <Content>
        <ContentWrapper>
          <H2 color='colorPrimary'>{title}</H2>
          {children}
        </ContentWrapper>
      </Content>
      <AboutUsImage style={imgStyle} data={{image, name: 'O nas'}} />
    </Wrapper>
  )
}