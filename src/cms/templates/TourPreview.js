import React from 'react'
import { TourTemplate } from '../../templates/tour'
import Theme from '../../components/style/Theme'
import Preview from '../Preview'

// function dateToYMD(date) {
//   if (!date) return ''
//   var d = date.getDate();
//   var m = date.getMonth() + 1; // Month from 0 to 11
//   var y = date.getFullYear();
//   return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
// }

const TourPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>
  return (
    <Preview>
      <Theme>
        <TourTemplate
          {...data}
          images={(data.images || []).map(({image, ...rest}) => ({image: getAsset(image), ...rest}))}
          map={getAsset(data.map)}
          thumb={getAsset(data.thumb)}
          html={widgetFor('body')}
          editor
        />
      </Theme>
    </Preview>
  )
}

export default TourPagePreview
