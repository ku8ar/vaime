import React from 'react'
import { path, propOr } from 'rambda'
import JsonLd, { siteUrl } from './JsonLd'

export default ({ seoTitle, logo, companyName, email, navigation, socialLinks, phoneNumbers, location}) => {
  const logoWidth = path(['childImageSharp', 'fixed', 'width'], logo)
  const logoHeight = path(['childImageSharp', 'fixed', 'height'], logo)
  const logoUrl = path(['childImageSharp', 'fixed', 'src'], logo)
  const pathName = propOr('', 'pathname', location)

  const phone = phoneNumbers && phoneNumbers[0] || null

  return <JsonLd>{
    [
      {
        "@context": "http://schema.org/",
        "@type": "WPHeader",
        "url": `${siteUrl}${pathName}`,
        "headline": companyName,
        "description": "Wycieczki po Gruzji z Nini i Mają"
      },
      {
        "@context": "http://schema.org/",
        "@type": "WPFooter",
        "url": `${siteUrl}${pathName}`,
        "headline": companyName,
        "description": "Wycieczki po Gruzji z Nini i Mają",
        "copyrightYear": "2017"
      },
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": companyName,
        "url": `${siteUrl}`,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}${logoUrl}`,
          "width": logoWidth,
          "height": logoHeight,
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": phone,
          "email": email,
          "url": `${siteUrl}/kontakt/`,
          "contactType": "customer support"
        },
        "sameAs": socialLinks.map(link => link.src)
      }
    ]
  }</JsonLd>
}