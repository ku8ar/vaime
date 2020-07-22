import React from 'react'
import { path } from 'rambda'
import { Helmet } from 'react-helmet'

export default ({ image }) => {

  const href = path(['image', 'childImageSharp', 'fluid', 'srcWebp'], image)
  const imagesrcset = path(['image', 'childImageSharp', 'fluid', 'srcSetWebp'], image)
  const visible = image && href && imagesrcset

  return visible ? (
    <Helmet>
      <link id="link" rel="preload" as="image" href={href} imagesrcset={imagesrcset} imagesizes="100vw" />
    </Helmet>
  ) : null
}