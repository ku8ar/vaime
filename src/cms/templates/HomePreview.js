import React from 'react'
import { HomeTemplate } from '../../templates/home'
import Theme from '../../components/style/Theme'
import Preview from '../Preview'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>

  return (
    <Preview>
      <Theme>
        <HomeTemplate
          {...data}
          tours={[]}
        />
      </Theme>
    </Preview>
  )
}

export default IndexPagePreview
