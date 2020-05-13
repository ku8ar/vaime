import React from 'react'
import { StandardContactTemplate } from '../../templates/contact'
import Theme from '../../components/style/Theme'
import Preview from '../Preview'

const StandardContactPreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>
  return (
    <Preview>
      <Theme>
        <StandardContactTemplate
          {...data}
          html={widgetFor('body')}
        />
      </Theme>
    </Preview>
  )
}

export default StandardContactPreview
