import React from 'react'
import {path} from 'rambda'
import Img from 'gatsby-image'

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

  return <Img {...props} alt={name} fluid={fluid} />
}