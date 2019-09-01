import React from 'react'
import Seo from './custom/Seo'
import Theme from './style/Theme'
import Header from './layout/Header'
import Footer from './layout/Footer'
import '../styles/index.sass'

const Layout = ({ children, title = '', description = '' }) => (
  <Theme>
    <Seo title={title} description={description} />
    <Header />
    {children}
    <Footer />
  </Theme>
)

export default Layout
