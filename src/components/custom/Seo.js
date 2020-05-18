import React from 'react'
import { Helmet } from 'react-helmet'
// import { withPrefix } from "gatsby"

const Header = ({ title = '', description = '', seoTitle }) => (
  <Helmet>
    <html lang="pl-PL" />
    <title>{`${title} ${seoTitle}`}</title>
    <meta name="description" content={description} />
    <meta name="theme-color" content="#fff" />
    <meta property="og:type" content="business.business" />
    <meta property="og:title" content={title} />
    <meta property="og:url" content="/" />
  </Helmet>
)

export default Header
