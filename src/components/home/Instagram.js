import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import useInstagram from '../../hooks/instagram'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'

const placeholders = [...Array(12).keys()]

export default () => {
  const [isVisible, setIsVisible] = useState(false)
  const target = useRef()

  useIntersectionObserver({
    target,
    onIntersect: ([{ isIntersecting }]) => isIntersecting && setIsVisible(isIntersecting)
  })

  const [instagramPhotos, hasError] = useInstagram(isVisible)

  if (hasError) {
    return null
  }

  const isFetched = instagramPhotos && instagramPhotos.length
  
  return (
    <Wrapper ref={target}>
      {isFetched ? instagramPhotos.map(({ href, src }, key) => (
        <Anchor
          key={href}
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          style={{ backgroundImage: `url("${src}")` }}
          aria-label={`instagram link ${key}`}
        />
      )) : placeholders.map(i => <Placeholder key={i} />)}
    </Wrapper >
  )
}

const Wrapper = styled.div`
  width: auto;
  max-width: 100%;
  flex: 1;
  filter: contrast(1.1);
  ${p => p.theme.mobile`
    padding-right: 0;
    margin-right: 0;
    max-width: 100%;
    width: 100%;
  `}
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  ${p => p.theme.print` display: none; `}
`

const itemStyle = css`
  width: calc(100% / 12);
  height: calc(100vw / 12 - 5px);
  ${p => p.theme.mobile`
    width: 20%;
    height: calc(100vw / 5);

    &:nth-child(11) {
      display: none;
    }
    &:nth-child(12) {
      display: none;
    }
  `}
  border: 1px solid white;
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity .15s;
  &:hover {
    opacity: 0.8;
  }
`

const Placeholder = styled.div`
  ${itemStyle}
`

const Anchor = styled.a`
  ${itemStyle}
`
