import React, { createContext } from 'react'
import { Helmet } from 'react-helmet'

export const DictContext = createContext()

const DictProvider = ({ children, lang }) => (
  <>
    <Helmet>
      <html lang={lang} />
    </Helmet>
    <DictContext.Provider value={lang}>{children}</DictContext.Provider>
  </>
)

export default DictProvider
