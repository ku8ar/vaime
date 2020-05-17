import React, { useState, useCallback, useMemo, useEffect } from 'react'
import {path} from 'rambda'
import styled, { createGlobalStyle } from 'styled-components'
import ReactCarousel, { Dots } from '@brainhubeu/react-carousel'
import { View } from '../Base'

const Carousel = ({ images }) => {
  if (!images) return null
  const imgs = useMemo(() => images.map(data => ({
    name: data.name,
    src: path('image.childImageSharp.fluid.src', data) || path('image', data)
  })), [images])

  const slides = useMemo(() => imgs.map(({name, src}, index) => (
    <SlideWrapper key={index}>
      <Slide src={src} />
      <Title>{name}</Title>
    </SlideWrapper>
  )), [imgs])
  const thumbnails = useMemo(() => imgs.map(({name, src}, index) => <Thumbnail key={index} src={src} />), [imgs])

  const [value, onChange] = useState(0)

  const goPrev = useCallback(() => onChange(value === 0 ? imgs.length - 1 : value - 1), [value, imgs.length])
  const goNext = useCallback(() => onChange(value === imgs.length - 1 ? 0 : value + 1), [value, imgs.length])

  useEffect(() => {
    const keyboardEvent = (event) => {
      const keyName = event.key
      if (keyName === 'ArrowLeft') {
        onChange(value => value === 0 ? imgs.length - 1 : value - 1)
      }
      if (keyName === 'ArrowRight') {
        onChange(value => value === imgs.length - 1 ? 0 : value + 1)
      }
    }

    document.addEventListener('keydown', keyboardEvent)

    return () => document.removeEventListener('keydown', keyboardEvent)
  }, [imgs])

  return (
    <Wrapper>
      <GlobalStyle />
      <ArrowLeft onClick={goPrev}>{`◀`}</ArrowLeft>
      <ArrowRight onClick={goNext}>{`▶`}</ArrowRight>
      <ReactCarousel
        value={value}
        slides={slides}
        onChange={onChange}
      />
      <Dots
        number={thumbnails.length}
        thumbnails={thumbnails}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  )
}

const Wrapper = styled(View)`
  display: block;
  padding: 0;
  position: relative;
`

const Arrow = styled.div`
  position: absolute;
  background-color: transparent;
  z-index: 1;
  cursor: pointer;
  top: 0;
  bottom: calc(4rem + 2px);
  font-weight: ${p => p.theme.weightThin};
  user-select: none;
  opacity: .3;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  width: 4rem;
  color: white;
  ${p => p.theme.mobile`
    display: none;
  `}
`

const ArrowLeft = styled(Arrow)`
  left: 0;
`

const ArrowRight = styled(Arrow)`
  right: 0;
`

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Title = styled.div`
  color: white;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 4rem;
  height: 2rem;
  background-color: rgba(0, 0, 0, 0.4);
  padding: .25rem 2rem 0rem 2rem;
  border-bottom-left-radius: .25rem;
  border-bottom-right-radius: .25rem;
  ${p => p.theme.mobile`
    display: none;
  `}
`

const Slide = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Thumbnail = styled.img`
  width: 100%;
  height: 4rem;
  object-fit: cover;
  ${p => p.theme.mobile`
    height: 2rem;
  `}
`

const GlobalStyle = createGlobalStyle`
.BrainhubCarouselItem{display:flex;justify-content:center;align-items:center;position:relative}.BrainhubCarouselItem.BrainhubCarouselItem--clickable{cursor:pointer}.BrainhubCarouselItem .debug-number{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;font-size:2em;text-shadow:0px 0px 9px white}
.BrainhubCarousel__dots{display:flex;justify-content:center;list-style:none;margin:0;padding:0;font-size:0;line-height:0}.BrainhubCarousel__dots.BrainhubCarousel__dots--isRTL{direction:rtl}.BrainhubCarousel__dots .BrainhubCarousel__dot{outline:0;padding:10px;border:none;opacity:0.5;cursor:pointer;-webkit-appearance:none}.BrainhubCarousel__dots .BrainhubCarousel__dot.BrainhubCarousel__dot--selected{opacity:1 !important}.BrainhubCarousel__dots .BrainhubCarousel__dot:hover{opacity:1}.BrainhubCarousel__dots .BrainhubCarousel__dot:before{content:'';display:block;width:5px;height:5px;border-radius:50%;padding:0;border:none;background:#000}.BrainhubCarousel__dots .BrainhubCarousel__thumbnail{outline:0;padding:10px;border:none;opacity:0.5;cursor:pointer}.BrainhubCarousel__dots .BrainhubCarousel__thumbnail.BrainhubCarousel__thumbnail--selected{opacity:1 !important}.BrainhubCarousel__dots .BrainhubCarousel__thumbnail:hover{opacity:1}.BrainhubCarousel__thumbnail[type=button]{-webkit-appearance:none}.BrainhubCarousel--isRTL+.BrainhubCarousel__dots{direction:rtl}
.BrainhubCarousel{overflow:hidden;display:flex;align-items:center}.BrainhubCarousel.BrainhubCarousel--isRTL{direction:rtl}.BrainhubCarousel.BrainhubCarousel--isRTL .BrainhubCarousel__trackContainer .BrainhubCarousel__track{direction:rtl}.BrainhubCarousel .BrainhubCarousel__trackContainer{overflow:hidden}.BrainhubCarousel .BrainhubCarousel__trackContainer .BrainhubCarousel__track{display:flex;overflow:hidden;list-style:none;margin:0;padding:0}.BrainhubCarousel .BrainhubCarousel__trackContainer .BrainhubCarousel__track.BrainhubCarousel__track--transition{transition:transform}.BrainhubCarousel__arrows{cursor:pointer}
.BrainhubCarousel__arrows{position:relative;padding:21px;border:none;overflow:hidden;outline:0;font-size:0;line-height:0;background-color:${p => p.theme.colorPrimary}}.BrainhubCarousel__arrows span{display:block;position:absolute;top:50%;left:50%;border-style:solid;border-color:#fff;border-width:3px 3px 0 0;padding:5px;transition:0.3s;font-size:0}.BrainhubCarousel__arrows:hover{background-color:#8768ff}.BrainhubCarousel__arrows:hover span{display:block;position:absolute;top:50%;left:50%;border-style:solid;border-color:#fff;border-width:3px 3px 0 0;padding:5px;transition:0.3s;font-size:0}.BrainhubCarousel__arrows:hover:enabled{background-color:${p => p.theme.colorPrimary}}.BrainhubCarousel__arrows:hover:enabled span{border-color:#fff;margin:0}.BrainhubCarousel__arrows:disabled{background-color:#ccc}.BrainhubCarousel__arrowLeft span{transform:translate(-50%, -50%) rotate(-135deg);margin-left:2.45px}.BrainhubCarousel__arrowRight span{transform:translate(-50%, -50%) rotate(45deg);margin-left:-2.45px}.BrainhubCarousel--isRTL .BrainhubCarousel__arrowLeft span{transform:translate(-50%, -50%) rotate(45deg);margin-left:-2.45px}.BrainhubCarousel--isRTL .BrainhubCarousel__custom-arrowLeft span{transform:rotate(180deg)}.BrainhubCarousel--isRTL .BrainhubCarousel__arrowRight span{transform:translate(-50%, -50%) rotate(-135deg);margin-left:2.45px}.BrainhubCarousel--isRTL .BrainhubCarousel__custom-arrowRight span{transform:rotate(-180deg)}.BrainhubCarousel--isRTL .BrainhubCarousel__arrows:hover span{margin:0}.BrainhubCarousel__arrow--disable{pointer-events:none}


.BrainhubCarousel .BrainhubCarousel__trackContainer .BrainhubCarousel__track {
  height: 33rem;
  ${p => p.theme.mobile`
    height: 15rem;
  `}
}

.BrainhubCarousel__dots {
  display: flex;
  ${p => p.theme.mobile`
    display: none;
  `}
}

.BrainhubCarousel__dots > li {
  flex: 1;
  margin: 2px 2px 0 0;
  &:last-child {
    margin-right: 0;
  }
}
.BrainhubCarousel__dots .BrainhubCarousel__thumbnail {
  padding: 0;
  transition: filter .3s ease-in-out;
  opacity: 1;
  filter: brightness(0.6);
}
.BrainhubCarousel__dots .BrainhubCarousel__thumbnail:hover {
  opacity: 1;
}
.BrainhubCarousel__dots .BrainhubCarousel__thumbnail.BrainhubCarousel__thumbnail--selected {
  filter: brightness(1.1) contrast(110%);
}
.BrainhubCarouselItem {
  margin-bottom: 0;
}
`

export default Carousel