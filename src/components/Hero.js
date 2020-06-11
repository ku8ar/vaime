import React, { useState, useEffect } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled, { createGlobalStyle } from 'styled-components'
import Image from './Image'
import {View} from './Base'

const Hero = ({ images, children, small }) => {
  const imgKey = useImageKey(images)
  const imgData = images && images.length && images[imgKey]
  const multiple = images && !!images.length

  return (
    <>
    {multiple && <GlobalStyle/>}
    <HeroWrapper small={small}>
      <ReactCSSTransitionGroup {...cssTransitionProps}>
        <Img key={imgKey} style={imgStyle} data={imgData} loading={imgKey === 0 ? 'eager' : 'lazy'} />
        <HeroContent>
          {children}
        </HeroContent>
      </ReactCSSTransitionGroup>
    </HeroWrapper >
    </>
  )
}

const Img = styled(Image)`
  ${p => p.theme.print` display: none; `}
`

const transitionTime = 600

const GlobalStyle = createGlobalStyle`
  .hero-animated-list {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
  }

  .example-enter {
    opacity: 0.01;
  }

  .example-enter.example-enter-active {
    opacity: 1
  }

  .example-leave {
    opacity: 1;
  }

  .example-leave.example-leave-active {
    opacity: 0.01;
    transition: opacity ${transitionTime}ms linear;
  }
`

const HeroWrapper = styled.div`
  height: ${p => p.small ? 10 : 30}rem;
  background-position: center center;
  background-size: cover;
  ${p => p.theme.mobile`
    height: auto;
  `}
  ${p => p.theme.print` height: auto; `}
`

const HeroContent = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
`

const cssTransitionProps = {
  className: "hero-animated-list",
  transitionName: "example",
  transitionEnterTimeout: transitionTime / 2,
  transitionLeaveTimeout: transitionTime
}

const imgStyle = { position: 'absolute', width: '100%', height: '100%' }

const useImageKey = (images) => {
  const [x, setX] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const newX = x + 1
      const isNext = images && images[newX]
      setX(isNext ? newX : 0)
    }, 5000);
    return () => clearTimeout(timer);
  }, [x, images]);
  
  return x
}

export default Hero