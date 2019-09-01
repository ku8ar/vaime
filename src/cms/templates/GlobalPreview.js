import React from 'react'
import Theme from '../../components/style/Theme'
import Preview from '../Preview'
import Header from '../../components/layout/Header'
import {Page} from '../../components/Base'
import Footer from '../../components/layout/Footer'

export default ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>

  return (
    <Preview>
      <Theme>
        <Header {...data} />
        <Page />
        <Footer {...data} />
      </Theme>
    </Preview>
  )
}