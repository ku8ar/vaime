import React from 'react'
import Seo from './custom/Seo'
import Theme from './style/Theme'
import Header from './layout/Header'
import Footer from './layout/Footer'
import useGlobal from '../utils/useGlobal'
import '../styles/normalize.css'

const Layout = ({ children, title = '', description = '' }) => {
  const data = useGlobal()

  return (
    <Theme>
      <Seo title={title} description={description} seoTitle={data.seoTitle} />
      <Header {...data} />
      {children}
      <Footer {...data} />
    </Theme>
  )
}

export default Layout
