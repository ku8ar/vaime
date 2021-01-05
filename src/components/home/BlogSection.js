import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { View, H2, P, buttonStyle } from '../Base'
import Image from '../Image'

const Wrapper = styled(View)`
  display: flex;
  flex-direction: row;
  margin-top: ${props => props.theme.marginM};
  margin-bottom: ${props => props.theme.marginM};
  ${p => p.theme.mobile`
    flex-direction: column;
  `}
`
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const Title = styled(H2)`
  margin-top: 0px;
`
const ContentWrapper = styled.div`
  padding-right: 2rem;
  ${p => p.theme.mobile`
    padding-right: 0;
  `}
`
const RightContent = styled.div`
  flex: 1;
  flex-grow: 2;
  display: flex;
  flex-direction: row;
  ${p => p.theme.mobile`
    display: none;
  `}
`
const ImagesWrapper = styled.div`
  flex: 1;
  flex-direction: row;
`
const RightImagesWrapper = styled(ImagesWrapper)`
  margin-left: 1rem;
`
const PromoImage = styled(Image)`
  flex: 1;
  height: 20rem;
  margin-bottom: 1rem;
`
const PromoImageSmall = styled(PromoImage)`
  height: 10rem;
`
const Text = styled(P)`
  margin-bottom: 2rem;
`
const Button = styled(Link)`
  ${buttonStyle}
`

export default ({
  blogTitle,
  blogDescription,
  blogButton,
  blogImages
}) => blogTitle ? (
  <Wrapper>
    <LeftContent>
      <ContentWrapper>
        <Title color='colorPrimary'>{blogTitle}</Title>
        <Text>{blogDescription}</Text>
        <Button to='/blog'>{blogButton}</Button>
      </ContentWrapper>
    </LeftContent>
    <RightContent>
      <ImagesWrapper>
        <PromoImageSmall data={blogImages[0]} />
        <PromoImage data={blogImages[1]} />
      </ImagesWrapper>
      <RightImagesWrapper>
        <PromoImage data={blogImages[2]} />
        <PromoImageSmall data={blogImages[3]} />
      </RightImagesWrapper>
    </RightContent>
  </Wrapper>
) : null