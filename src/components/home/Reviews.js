import React, { useState, useCallback } from 'react'
import { range } from 'rambda'
import styled, { css } from 'styled-components'
import { H2, H4, P, Grid, View } from '../Base'
import Image from '../Image'
import LefIcon from '../../icons/buttons/left'
import RightIcon from '../../icons/buttons/right'
import Star from '../../icons/buttons/star'
import Youtube from './Youtube'

const height = 400

export default ({ reviews, reviewImage, reviewVideo, reviewPreview }) => {
  const [revKey, setRevKey] = useState(0)
  const length = reviews && reviews.length

  const goPrev = useCallback(() => setRevKey(revKey === 0 ? length - 1 : revKey - 1), [revKey, length])
  const goNext = useCallback(() => setRevKey(revKey === length - 1 ? 0 : revKey + 1), [revKey, length])

  if (!reviews || !length) return null
  
  const { place, text, author, stars } = reviews[revKey] || {}

  return (
    <Wrapper>
      <Img data={{image: reviewImage, name: 'Opinie'}} style={imgStyle} />
      <View>
        <ReviewsGrid>
          <Youtube height={height} reviewVideo={reviewVideo} reviewPreview={reviewPreview} />
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
  ${p => p.theme.mobile`
    flex-direction: column;
  `}
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
    overflow: hidden;
  `}
`

const Review = styled(P)`
  margin-bottom: 1.5rem;
`

const Place = styled(H4)`
  margin-bottom: 0;
  font-size: 1.25rem;
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

const Rows = styled.div`
  padding: 0 2rem;
`

const Controls = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-right: 2rem;
  ${p => p.theme.mobile`
    margin-bottom: 0;
  `}
`

const ReviewsBox = styled.div`
  flex: 1;
  height: ${height}px;
  margin-top: 5rem;
  margin-left: 0rem;
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