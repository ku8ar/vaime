import React from 'react'
import Footer from '../components/layout/Footer'
import Theme from '../components/style/Theme'
import StructuredData from '../components/custom/StructuredData'
import Header from '../components/layout/Header'
import FacebookChat from '../components/Facebook'
import useGlobal from '../utils/useGlobal'
import usePath from '../utils/usePath'

const Layout = ({ children }) => {
  const data = useGlobal()
  const path = usePath()

  return (
    <Theme>
      <StructuredData {...data} slug={path} />
      <Header {...data} slug={path} />
      {children}
      <Footer data={data} />
      <FacebookChat />
    </Theme>
  )
}

export default Layout