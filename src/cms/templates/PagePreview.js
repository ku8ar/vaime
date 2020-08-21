import React from 'react'
import { StandardPageTemplate } from '../../templates/page'
import Theme from '../../components/style/Theme'
import Preview from '../Preview'

const StandardPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>
  return (
    <Preview>
      <Theme>
        <StandardPageTemplate
          {...data}
          images={(data.images || []).map(({image, ...rest}) => ({image: getAsset(image), ...rest}))}
          carousel={(data.carousel || []).map(({image, ...rest}) => ({image: getAsset(image), ...rest}))}
          grid={(data.grid || []).map(({image0, image1, ...rest}) => ({image0: getAsset(image0), image1: getAsset(image1), ...rest}))}
          html={widgetFor('body')}
        />
      </Theme>
    </Preview>
  )
}

export default StandardPagePreview
