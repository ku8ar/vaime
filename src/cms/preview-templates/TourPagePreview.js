import React from 'react'
import PropTypes from 'prop-types'
import { TourTemplate } from '../../templates/tour'

const TourPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>
  return (
    <TourTemplate
      html={widgetFor('body')}
      {...entry.getIn(['data']).toJS()}
    />
  )
}

TourPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TourPagePreview
