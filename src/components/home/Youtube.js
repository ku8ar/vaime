import React, { useState, useCallback } from 'react'
import styled, { css } from 'styled-components'
import Image from '../Image'
import Play from '../../icons/buttons/play'

export default ({ height, reviewVideo, reviewPreview }) => {
  const [show, onShow] = useState(false)
  const setShow = useCallback(() => onShow(true), [])

  return show ? (
    <YoutubeIframe height={height} src={`${reviewVideo}?autoplay=1`} title='youtube' />
  ) : (
    <PreviewWrapper height={height} onClick={setShow}>
      <Preview data={{image: reviewPreview, name: 'youtube'}} />
      <PlayButton size={'8rem'} />
    </PreviewWrapper>
  )
}

const PlayButton = styled(Play)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s;

  &:hover {
    opacity: 0.5;
  }
`

const viewStyle = css`
  flex: 1;
  margin-top: -5rem;
  margin-right: 2rem;
  border: none;
  ${p => p.theme.mobile`
    margin-top: 0rem;
    margin-right: 0;
  `}
`

const PreviewWrapper = styled.div`
  height: ${p => p.height}px;
  ${viewStyle}
  position: relative;
  cursor: pointer;
`

const Preview = styled(Image)`
  height: 100%;
  width: 100%;
`

const YoutubeIframe = styled.iframe`
  ${viewStyle}
`
