import React from 'react'
import { StandardPageTemplate } from '../../templates/page'
import Theme from '../../components/style/Theme'
import Preview from '../Preview'

const StandardPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>
  return (
    <Preview>
      <Theme>
        <StandardPageTemplate
          {...data}
          html={widgetFor('body')}
        />
      </Theme>
    </Preview>
  )
}

export default StandardPagePreview
