import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: justify;
`

export const HTMLContent = ({ content, className }) => (
  <StyledDiv className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export default Content
