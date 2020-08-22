import React from 'react'
import {path} from 'rambda'
import Img from 'gatsby-image'

const placeholderStyle = {
  filter: 'blur(10px)'
}

export default ({data, ...props}) => {
  if (!data) return null

  const name = path('name', data)
  const fluid = path('image.childImageSharp.fluid', data)

  if (!fluid) {
    const style = {
      objectFit: 'cover',
      ...(props.style || {})
    }
    return <img {...props} style={style} alt={name} src={path('image', data)} />
  }

  const isSvg = !!path('image.childImageSharp.fluid.tracedSVG', data)

  return <Img {...props} placeholderStyle={!isSvg ? placeholderStyle : undefined} alt={name} fluid={fluid} />
}