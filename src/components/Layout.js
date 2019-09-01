import React from 'react'
import Seo from './custom/Seo'
import Theme from './style/Theme'
import Header from './layout/Header'
import Footer from './layout/Footer'
import '../styles/index.sass'
import useGlobal from '../utils/useGlobal'

const Layout = ({ children, title = '', description = '' }) => {
  const data = useGlobal()
  return (
    <Theme>
      <Seo title={title} description={description} />
      <Header {...data} />
      {children}
      <Footer {...data} />
    </Theme>
  )
}

export default Layout
