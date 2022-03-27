import React, { createContext } from 'react'

export const DictContext = createContext()

const DictProvider = ({ children, lang }) => (
  <DictContext.Provider value={lang}>{children}</DictContext.Provider>
)

export default DictProvider