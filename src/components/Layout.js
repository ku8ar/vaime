import React from 'react'
import Seo from './custom/Seo'
import StructuredData from './custom/StructuredData'
import Theme from './style/Theme'
import Header from './layout/Header'
import Footer from './layout/Footer'
import useGlobal from '../utils/useGlobal'
import '../styles/normalize.css'

const Layout = ({ children, title = '', description = '', seoImage, slug }) => {
  const data = useGlobal()

  return (
    <Theme>
      <Seo title={title} description={description} seoTitle={data.seoTitle} seoImage={seoImage || data.logo} slug={slug} />
      <StructuredData {...data} slug={slug} />
      <Header {...data} slug={slug} />
      {children}
      <Footer {...data} />
    </Theme>
  )
}

export default Layout
