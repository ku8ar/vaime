import React, { useMemo } from "react"
import { StyleSheetManager } from "styled-components"

export default ({ children }) => {
  const iframeHead = useMemo(() => {
    const iframe = document.getElementsByTagName('iframe')[0]
    if (!iframe) return null
    const iframeHeadElem = iframe.contentDocument.head
    return iframeHeadElem
  }, [])
  return (
    <StyleSheetManager target={iframeHead}>
      {children}
    </StyleSheetManager>
  )
}