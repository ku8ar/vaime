import React, { useMemo } from "react"
import { StyleSheetManager } from "styled-components"


export default ({ children }) => {
  const iframeHead = useMemo(() => {
    const iframe = document.querySelector('#nc-root iframe')
    return iframe && iframe.contentDocument.head
  }, [])

  return iframeHead ? (
    <StyleSheetManager target={iframeHead}>
      <>
        {children}
      </>
    </StyleSheetManager>
  ) : children
}