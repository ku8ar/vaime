import React from 'react'
import { path } from 'rambda'
import { Helmet } from 'react-helmet'
import { colorPrimary } from '../../components/style/Theme'
// import { withPrefix } from "gatsby"

const Header = ({ title = '', description = '', seoTitle, seoImage }) => (
  <Helmet>
    <html lang="pl-PL" />
    <title>{`${title} ${seoTitle}`}</title>
    <meta name="description" content={description} />
    <meta name="theme-color" content={colorPrimary} />
    <meta property="og:type" content="business.business" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={'Vaime Travel'} />
    <meta property="og:url" content="/" />
    {path('childImageSharp.fixed', seoImage) ? (
      <meta property="og:image" content={path('childImageSharp.fixed.src', seoImage)} />
    ) : null}
    {path('childImageSharp.fixed', seoImage) ? (
      <meta property="og:image:width" content={path('childImageSharp.fixed.width', seoImage)} />
    ) : null}
    {path('childImageSharp.fixed', seoImage) ? (
      <meta property="og:image:height" content={path('childImageSharp.fixed.height', seoImage)} />
    ) : null}
    <link href="https://www.instagram.com" rel="preconnect" crossOrigin />
  </Helmet>
)

export default Header
