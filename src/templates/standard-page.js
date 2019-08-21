import React from 'react'
import Wrapper from '../components/Layout'
import { HTMLContent } from '../components/Content'
import Hero from '../components/Hero'

export const StandardPageTemplate = ({title, description, image, html}) => (
  <section>
    <Hero image={image}>
      <h1 className='color-white'>{title}</h1>
      <h2 className='color-white'>{description}</h2>
    </Hero>
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
