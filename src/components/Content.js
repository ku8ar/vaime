import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: justify;
`

const replaceAll = (str, find, replace) =>
  str.replace(new RegExp(find, 'g'), replace)

export const HTMLContent = ({ content, className }) => (
  <StyledDiv
    className={className}
    dangerouslySetInnerHTML={{ __html: replaceAll(content, '<a href=', '<a target="blank" rel="noopener noreferrer" title="link" href=') }}
  />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export default Content
