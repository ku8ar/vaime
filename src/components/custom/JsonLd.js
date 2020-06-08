import React from 'react'
import { Helmet } from 'react-helmet'

export const siteUrl = `https://vaimetravel.com`

export default ({ children }) => children ? (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(children)}</script>
    </Helmet>
  ) : null
