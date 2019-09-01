import React from "react"
import { StyleSheetManager } from "styled-components"

const iframe = document.querySelector('#nc-root iframe')
const iframeHeadElem = iframe && iframe.contentDocument.head

export default ({ children }) => (
  <StyleSheetManager target={iframeHeadElem}>
    {children}
  </StyleSheetManager>
)