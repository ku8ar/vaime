import React from 'react'
import Seo from './custom/Seo'
import { useGlobalData } from '../module/globalData'

const Layout = ({ children, title = '', description = '', seoImage, slug }) => {
  const data = useGlobalData()

  return (
    <>
      <Seo title={title} description={description} seoTitle={data.seoTitle} seoImage={seoImage || data.logo} slug={slug} />
      {children}
    </>
  )
}

export default Layout
