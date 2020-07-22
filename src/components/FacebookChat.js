import React, { useEffect, memo } from 'react'

export default memo(() => {
  useEffect(() => {
    setTimeout(() => {

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

    }, 2000)


  }, [])

  return (
      <>
        <div id="fb-root"></div>
        <div className="fb-customerchat"
          attribution='setup_tool'
          page_id="329782944198629"
          theme_color="#DE261D"
          greeting_dialog_display="hide"
          logged_in_greeting="Dzień dobry! W czym możemy pomóc? "
          logged_out_greeting="Dzień dobry! W czym możemy pomóc? ">
        </div>
      </>
  )
})
