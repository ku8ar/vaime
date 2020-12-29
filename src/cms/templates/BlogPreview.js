import React from 'react'
import { BlogTemplate } from '../../templates/blog'
import Theme from '../../components/style/Theme'
import Preview from '../Preview'

const BlogPreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  if (!data) return <div>Fill data first</div>
  return (
    <Preview>
      <Theme>
        <BlogTemplate
          {...data}
          images={(data.images || []).map(({image, ...rest}) => ({image: getAsset(image), ...rest}))}
          html={widgetFor('body')}
        />
      </Theme>
    </Preview>
  )
}

export default BlogPreview
