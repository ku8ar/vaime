import React from 'react'
import { HomeTemplate } from '../../templates/home'
import Theme from '../../components/style/Theme'
import Preview from '../Preview'

const IndexPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>

  return (
    <Preview>
      <Theme>
        <HomeTemplate
          {...data}
          tours={[]}
          images={(data.images || []).map(({image, ...rest}) => ({image: getAsset(image), ...rest}))}
          aboutImage={getAsset(data.aboutImage)}
          promoImage={getAsset(data.promoImage)}
          reviewImage={getAsset(data.reviewImage)}
          team={(data.team || []).map(({image, ...rest}) => ({image: getAsset(image), ...rest}))}
          html={widgetFor('body')}
        />
      </Theme>
    </Preview>
  )
}

export default IndexPagePreview
