import React from 'react'
import PropTypes from 'prop-types'
import { StandardPageTemplate } from '../../templates/standard-page'

const StandardPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>
  return (
    <StandardPageTemplate
      {...data}
      html={widgetFor('body')}
    />
  )
}

StandardPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default StandardPagePreview
