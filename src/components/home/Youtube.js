import React from 'react'
import styled, { css } from 'styled-components'
import ReactPlayer from 'react-player/youtube'
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

const Youtube = styled(ReactPlayer)`
  ${viewStyle}
`
