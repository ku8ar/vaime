import React, { useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled, { createGlobalStyle } from 'styled-components'
import Image from './Image'
import { View } from './Base'
import PreloadImage from './custom/PreloadImage'

const Hero = ({ images, children, small }) => {
  const imgKey = useImageKey(images)
  const imgData = images && images.length && images[imgKey]
  const nextImage = images && images.length && images[imgKey + 1]
  const multiple = images && !!images.length

  return (
    <>
      {multiple && (
        <>
          <GlobalStyle />
          <PreloadImage image={nextImage} />
        </>
      )}
      <HeroWrapper small={small}>
        <TransitionWrapper>
          <CSSTransition key={imgKey} {...cssTransitionProps}>
            <>
              <Img style={imgStyle} data={imgData} loading={'eager'} />
              <HeroContent>
                {children}
              </HeroContent>
            </>
          </CSSTransition>
        </TransitionWrapper>
      </HeroWrapper >
    </>
  )
}

const TransitionWrapper = styled(TransitionGroup)`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`

const Img = styled(Image)`
  ${p => p.theme.print` display: none; `}
`

const transitionTime = 600

const GlobalStyle = createGlobalStyle`
  .example-enter { opacity: 0; }
  .example-enter.example-enter-active { opacity: 1 }
  .example-exit { opacity: 1; }
  .example-exit.example-exit-active {
    opacity: 0;
    transition: opacity ${transitionTime}ms ease-in-out;
  }
`

const HeroWrapper = styled.div`
  height: ${p => p.small ? 10 : 30}rem;
  background-position: center center;
  background-size: cover;
  ${p => p.theme.mobile` height: auto; `}
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
  classNames: "example",
  timeout: { enter: transitionTime, exit: transitionTime }
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