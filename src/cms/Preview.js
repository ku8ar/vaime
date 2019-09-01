import React from "react"
import { StyleSheetManager } from "styled-components"

export default ({ children }) => {
  const iframe = document.getElementsByTagName('iframe')[0]
  if (!iframe) return null
  const iframeHeadElem = iframe.contentDocument.head
  console.log('preview')

  return (
    <StyleSheetManager target={iframeHeadElem}>
      {children}
    </StyleSheetManager>
  )
}