import React from 'react'
import Seo from './custom/Seo'
import StructuredData from './custom/StructuredData'
import Theme from './style/Theme'
import Header from './layout/Header'
import Footer from './layout/Footer'
import useGlobal from '../utils/useGlobal'
import '../styles/normalize.css'

const Layout = ({ children, title = '', description = '', seoImage, location }) => {
  const data = useGlobal()

  return (
    <Theme>
      <Seo title={title} description={description} seoTitle={data.seoTitle} seoImage={seoImage || data.logo} />
      <StructuredData {...data} location={location} />
      <Header {...data} location={location} />
      {children}
      <Footer {...data} />
    </Theme>
  )
}

export default Layout
