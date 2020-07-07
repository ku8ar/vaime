import React from 'react'
import Footer from '../components/layout/Footer'
import Theme, { Content, Placeholder } from '../components/style/Theme'
import StructuredData from '../components/custom/StructuredData'
import Header from '../components/layout/Header'
import useGlobal from '../utils/useGlobal'

const Layout = ({ children, path, ...props }) => {
  const data = useGlobal()

  return (
    <Theme>
      <StructuredData {...data} slug={path} />
      <Header {...data} slug={path} />
      <Content>
        {children}
      </Content>
      <Footer data={data} />
    </Theme>
  )
}

export default Layout