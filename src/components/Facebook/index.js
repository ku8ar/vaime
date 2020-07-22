import React, { useState, useEffect, useCallback, memo } from 'react'
import styled from 'styled-components'
import FacebookIcon from './FacebookIcon'

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 24px;
  right: 24px;
  height: 60px;
  width: 60px;
  border-radius: 29px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px;
  background: none;
  ${p => p.theme.mobile` margin-bottom: 4rem; `}
  ${p => p.theme.print` display: none; `}
`

export default memo(() => {
  const [visible, setVisible] = useState(false)
  const onClick = useCallback(() => setVisible(true), [])

  useEffect(() => {
    if (visible) {
      window.fbAsyncInit = () => {
        window.FB.init({
          xfbml: true,
          version: 'v7.0'
        })
      }
      (function(d, s, id) {
        /* eslint-disable */
        var js, fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js'
        fjs.parentNode.insertBefore(js, fjs)
      }(document, 'script', 'facebook-jssdk'))
      /* eslint-enable */
    }

  }, [visible])


  if (!visible) {
    return <Wrapper onClick={onClick}> <FacebookIcon /> </Wrapper>
  }

  return (
      <>
        <div id="fb-root"></div>
        <div className="fb-customerchat"
          attribution='setup_tool'
          page_id="329782944198629"
          theme_color="#DE261D"
          greeting_dialog_display="show"
          greeting_dialog_delay="0"
          logged_in_greeting="Dzień dobry! W czym możemy pomóc? "
          logged_out_greeting="Dzień dobry! W czym możemy pomóc? ">
        </div>
      </>
  )
})
