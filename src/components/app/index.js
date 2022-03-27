import React from 'react'
import Footer from 'src/components/layout/Footer'
import StructuredData from 'src/components/custom/StructuredData'
import Header from 'src/components/layout/Header'
import Popup from 'src/components/Popup'
import usePath from 'src/utils/usePath'
import { GlobalDataProvider, useGlobalData } from 'src/module/globalData'
import DictProvider from 'src/components/dict'

const AppLayout = ({ children, lang }) => {
  const data = useGlobalData()
  const path = usePath()

  return (
      <DictProvider lang={lang}>
        <StructuredData {...data} slug={path} />
        <Header {...data} lang={lang} slug={path} />
        <Popup {...data} slug={path} />
        {children}
        <Footer data={data} />
      </DictProvider>
  )
}

const MainAppLayout = ({ children, lang }) => (
  <GlobalDataProvider>
    <AppLayout lang={lang}>
      {children}
    </AppLayout>
  </GlobalDataProvider>
)

export default MainAppLayout