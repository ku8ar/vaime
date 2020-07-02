import React from 'react'
import Seo from './custom/Seo'
import useGlobal from '../utils/useGlobal'

const Layout = ({ children, title = '', description = '', seoImage, slug }) => {
  const data = useGlobal()

  return (
    <>
      <Seo title={title} description={description} seoTitle={data.seoTitle} seoImage={seoImage || data.logo} slug={slug} />
      {children}
    </>
  )
}

export default Layout
