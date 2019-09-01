import React from 'react'
import PropTypes from 'prop-types'
import { StandardPageTemplate } from '../../templates/page'
import Theme from '../../components/style/Theme'

const StandardPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>
  return (
    <Theme>
      <StandardPageTemplate
        {...data}
        html={widgetFor('body')}
      />
    </Theme>
  )
}

StandardPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default StandardPagePreview
