import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

const EditorWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  ${p => p.theme.mobile` display: none; `}
`

const EditorContainer = styled.div`
  pointer-events: none;
`

const ShowBtn = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 100;
  ${p => p.theme.mobile` display: none; `}
`

export default ({ children }) => {
  const [show, onShow] = useState(false)
  const flipShow = useCallback(() => onShow(!show), [show])

  if (!show) {
    return <ShowBtn onClick={flipShow}>[editor visible content] Show Tour Tile</ShowBtn>
  }

  return (
    <EditorWrapper onClick={flipShow}>
      <EditorContainer>
        {children}
      </EditorContainer>
    </EditorWrapper>
  )
}
