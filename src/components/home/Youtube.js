import React, { useState, useCallback } from 'react'
import styled, { css } from 'styled-components'
import ReactPlayer from 'react-player/youtube'
import Image from '../Image'
import Play from '../../icons/buttons/play'

export default ({ height, reviewVideo, reviewPreview }) => {
  return <Youtube height={height} url={reviewVideo} title='youtube' playing controls light={reviewPreview} playIcon={<PlayButton size={'8rem'} />} />
}

const PlayButton = styled(Play)`
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

const Youtube = styled(ReactPlayer)`
  ${viewStyle}
`
