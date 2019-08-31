import React from 'react'
import PropTypes from 'prop-types'
import { HomeTemplate } from '../../templates/home'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>

  return (
    <HomeTemplate
      image={data.image}
      title={data.title}
      description={data.description}
      tours={[]}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
