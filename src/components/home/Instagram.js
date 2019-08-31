import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Instafeed from 'instafeed.js'
import { H2 } from '../Base'
// @todo: add react svg support
import instagramPrimary from '../../img/social/instagram_primary.svg'

const GlobalStyle = createGlobalStyle`
  .instafeed {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .instafeed-item {
    width: 33%;
    height: auto;
    border: 1px solid white;
  }

  .instafeed-item-image {
    width: 100%;
    height: 100%;
  }
`

const Wrapper = styled.div`
  width: auto;
  max-width: 50%;
  margin-right: 2rem;
  flex: 1;
`

const Title = styled(H2)`
  text-transform: none;
  margin-bottom: 2rem;
`

const Icon = styled.img`
  height: 1.5rem;
  margin-right: .5rem;
`

export default () => {
  useEffect(() => {
    const feed = new Instafeed({
      get: 'user',
      limit: 9,
      accessToken: '10221529773.1677ed0.d596aafbded7483fb106dbfe6534952d',
      userId: 10221529773,
      template: '<a class="instafeed-item" href="{{link}}"><img  class="instafeed-item-image" src="{{image}}" /></a>'
    })
    feed.run()
  }, [])
  return (
    <Wrapper> 
      <GlobalStyle />
      <Title color='colorPrimary'><Icon src={instagramPrimary} />vaimetravel</Title>
      <div className='instafeed' id='instafeed' />
    </Wrapper>
  )
}
