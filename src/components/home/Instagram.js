import React, { useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Instafeed from 'instafeed.js'

const GlobalStyle = createGlobalStyle`
  .instafeed {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  .instafeed-item {
    width: 5%;
    height: auto;
    border: 1px solid white;
    ${p => p.theme.mobile`
      width: 20%;
    `}
  }

  .instafeed-item-image {
    width: 100%;
    height: 100%;
  }
`

const Wrapper = styled.div`
  width: auto;
  max-width: 100%;
  flex: 1;
  filter: brightness(1.1) contrast(1.1);
  ${p => p.theme.mobile`
    padding-right: 0;
    margin-right: 0;
    max-width: 100%;
    width: 100%;
  `}
`

export default () => {
  useEffect(() => {
    try {
      const feed = new Instafeed({
        get: 'user',
        limit: 20,
        accessToken: '10221529773.1677ed0.d596aafbded7483fb106dbfe6534952d',
        userId: 10221529773,
        template: '<a class="instafeed-item" href="{{link}}"><img  class="instafeed-item-image" src="{{image}}" /></a>'
      })
      feed.run()
    } catch {}
  }, [])
  return (
    <Wrapper> 
      <GlobalStyle />
      {/* <Title color='colorPrimary'><Icon src={instagramPrimary} />vaimetravel</Title> */}
      <div className='instafeed' id='instafeed' />
    </Wrapper>
  )
}
