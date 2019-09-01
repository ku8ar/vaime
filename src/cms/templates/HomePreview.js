import React from 'react'
import PropTypes from 'prop-types'
import { HomeTemplate } from '../../templates/home'
import Theme from '../../components/style/Theme'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>

  return (
    <Theme>
      <HomeTemplate
        {...data}
        tours={[]}
      />
    </Theme>
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
