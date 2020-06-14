import React from 'react'
import { path } from 'rambda'
import { Helmet } from 'react-helmet'
import { colorPrimary } from '../../components/style/Theme'
import { siteUrl } from './JsonLd'

const absoluteUrl = url => url ? `${siteUrl}${url}` : url

const hotJar = `
(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:1856509,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`

const Seo = ({ title = '', description = '', seoTitle, seoImage, slug }) => {
  const pageUrl = absoluteUrl(slug)
  const image = absoluteUrl(path('childImageSharp.fixed.src', seoImage))
  const width = absoluteUrl(path('childImageSharp.fixed.width', seoImage))
  const height = absoluteUrl(path('childImageSharp.fixed.height', seoImage))

  return (
    <Helmet script={[
      {
        type: 'text/javascript', 
        async: true,
        innerHTML: hotJar
      }
    ]}>
      <html lang="pl-PL" />
      <title>{`${title} ${seoTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={colorPrimary} />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={'Vaime Travel'} />
      <meta property="og:url" content={pageUrl} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={pageUrl} />
      {image ? <meta property="og:image" content={image} /> : null}
      {width ? <meta property="og:image:width" content={width} /> : null}
      {height ? <meta property="og:image:height" content={height} /> : null}
      <link href="https://www.instagram.com" rel="preconnect" crossOrigin />
    </Helmet>
  )
}

export default Seo
