import React from 'react'
import Wrapper from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const StandardPageTemplate = ({title, description, image, html}) => (
  <section>
    <div
      className="hero-wrapper hero-small"
      style={{backgroundImage: `url(${image && image.childImageSharp ? image.childImageSharp.fluid.src : image})`}}
    >
      <div className='content hero-content'>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
    <div className='content'>
      <HTMLContent content={html} />
    </div>
  </section>
)

const StandardPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Wrapper title={title} description={description}>
      <StandardPageTemplate {...data.markdownRemark.frontmatter} html={data.markdownRemark.html} />
    </Wrapper>
  )
}

export default StandardPage

export const pageQuery = graphql`
  query StandardPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`
