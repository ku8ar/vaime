import React, { useState, useCallback } from 'react'
import { range } from 'rambda'
import styled, { css } from 'styled-components'
import { H2, H4, P, Grid, View } from '../Base'
import Image from '../Image'
import LefIcon from '../../icons/buttons/left'
import RightIcon from '../../icons/buttons/right'
import Star from '../../icons/buttons/star'

const height = 400

export default ({ reviews, reviewImage, reviewVideo }) => {
  const [revKey, setRevKey] = useState(0)

  const goPrev = useCallback(() => setRevKey(revKey === 0 ? reviews.length - 1 : revKey - 1), [revKey, reviews.length])
  const goNext = useCallback(() => setRevKey(revKey === reviews.length - 1 ? 0 : revKey + 1), [revKey, reviews.length])

  if (!reviews || !reviews.length) return null
  
  const { place, text, author, stars } = reviews[revKey] || {}

  return (
    <Wrapper>
      <Img data={{image: reviewImage, name: 'Opinie'}} style={imgStyle} />
      <View>
        <ReviewsGrid>
          <YoutubeIframe height={height} src={reviewVideo} />
          <ReviewsBox>
              <Rows key={revKey}>
                <H2 color='colorPrimary'>Opinie</H2>
                <Place>{place}</Place>
                <Stars>{range(0, stars || 5).map(key => <Star key={key} />)}</Stars>
                <Review>{text}</Review>
                <Author>{author}</Author>
              </Rows>
            <Controls>
              <Left size={40} onClick={goPrev} />
              <Right size={40} onClick={goNext} />
            </Controls>
          </ReviewsBox>
        </ReviewsGrid>
      </View>
    </Wrapper>
  )
}

const Stars = styled.div`
  margin-bottom: 1rem;
`

const Img = styled(Image)`
  ${p => p.theme.mobile`
    display: none;
  `}
`

const ReviewsGrid = styled(Grid)`
  z-index: 1;
`

const imgStyle = { position: 'absolute', width: '100%', height: '100%' }

const Wrapper = styled.div`
  margin-top: 2.5rem;
  height: 33rem;
  border-bottom: 7rem solid ${p => p.theme.colorGrey};
  position: relative;
  ${p => p.theme.mobile`
    height: auto;
    border-bottom: none;
  `}
`

const Review = styled(P)`
  margin-bottom: 1.5rem;
`

const Place = styled(H4)`
  margin-bottom: 0;
`

const Author = styled(P)`
  margin-top: 1rem;
  font-weight: ${p => p.theme.weightBold};
  text-transform: uppercase;
`

const controlStyle = css`
  cursor: pointer;
`

const Left = styled(LefIcon)`
  ${controlStyle}
`

const Right = styled(RightIcon)`
  ${controlStyle}
`

const Rows = styled.div``

const Controls = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-right: 4rem;
`

const YoutubeIframe = styled.iframe`
  flex: 1;
  margin-top: -5rem;
  margin-right: 2rem;
  border: none;
  ${p => p.theme.mobile`
    margin-top: 0rem;
    margin-right: 0;
  `}
`

const ReviewsBox = styled.div`
  flex: 1;
  height: ${height}px;
  margin-top: 5rem;
  margin-left: 0rem;
  padding: 0 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  ${p => p.theme.mobile`
    height: auto;
    margin-top: 0;
    margin-bottom: 2rem;
  `}
`