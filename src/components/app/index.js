import React from 'react'
import Footer from 'src/components/layout/Footer'
import StructuredData from 'src/components/custom/StructuredData'
import Header from 'src/components/layout/Header'
import Popup from 'src/components/Popup'
import usePath from 'src/utils/usePath'
import { GlobalDataProvider, useGlobalData } from 'src/module/globalData'

const AppLayout = ({ children }) => {
  const data = useGlobalData()
  const path = usePath()

  return (
      <>
        <StructuredData {...data} slug={path} />
        <Header {...data} slug={path} />
        <Popup {...data} slug={path} />
        {children}
        <Footer data={data} />
      </>
  )
}

const MainAppLayout = ({ children }) => (
  <GlobalDataProvider>
    <AppLayout>
      {children}
    </AppLayout>
  </GlobalDataProvider>
)

export default MainAppLayout