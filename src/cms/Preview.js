import React, { useRef, useLayoutEffect } from "react"
import { StyleSheetManager } from "styled-components"


export default ({ children }) => {
	const iframeRef = useRef(null);

	useLayoutEffect(() => {
		const iframe = document.querySelector('#nc-root iframe');
		const iframeHeadElem = iframe && iframe.contentDocument.head;
    iframeRef.current = iframeHeadElem;
    console.log(iframeHeadElem)
	});

  return iframeRef && iframeRef.current ? (
    <StyleSheetManager target={iframeRef && iframeRef.current}>
      {children}
    </StyleSheetManager>
  ) : null
}