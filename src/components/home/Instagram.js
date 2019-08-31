import React, { useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import instafeed from 'instafeed.js'

const GlobalStyle = createGlobalStyle`
  .instafeed {
    display: flex;
  }

  .instafeed-item {
    flex: 1;
  }

  .instafeed-item-image {
    width: 100%;
    height: 100%;
  }
`

export default () => {
  useEffect(() => {
    const feed = new instafeed({
      get: 'user',
      limit: 12,
      accessToken: '10221529773.1677ed0.d596aafbded7483fb106dbfe6534952d',
      userId: 10221529773,
      template: '<a class="instafeed-item" href="{{link}}"><img  class="instafeed-item-image" src="{{image}}" /></a>'
    })
    feed.run()
  }, [])
  return (
    <> 
      <GlobalStyle />
      <div className='instafeed' id='instafeed' />
    </>
  )
}
