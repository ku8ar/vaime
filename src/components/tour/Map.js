import React from 'react'
import styled from 'styled-components'
import Zoom from 'react-medium-image-zoom/dist/cjs/react-medium-image-zoom.min.js'
import 'react-medium-image-zoom/dist/styles.css'
import Image from '../Image'

const Map = styled(Image)`
  background: transparent;
  width: 100%;
  height: 100%;
  ${p => p.theme.print` break-before: page; `}
`

const EditorMap = styled.div`
  width: 100%;
`

const wrapStyle = {
  width: '100%'
}

const imgStyle = {  }

export default ({ map, editor }) => {
  const data = map ? {
    name: 'mapa',
    image: map
  } : null

  if (editor) {
    return (
      <EditorMap>
        <Map data={data} style={imgStyle} loading={'eager'} />
      </EditorMap>
    )
  }
  return (
    <Zoom wrapStyle={wrapStyle}>
      <Map data={data} style={imgStyle} loading={'eager'} />
    </Zoom>
  )
}