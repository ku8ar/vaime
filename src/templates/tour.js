import React from 'react'
import { graphql } from 'gatsby'
import Wrapper from '../components/Wrapper'
import { HTMLContent } from '../components/Content'

export const TourTemplate = ({title, description, image, html}) => {

  return (
    <section>
      <div
        className="hero"
        style={{backgroundImage: `url(${image.childImageSharp ? image.childImageSharp.fluid.src : image})`}}
      >
        <div className='content hero-content'>
          <h2 className='color-white'>{description}</h2>
          <h1 className='color-white'>{title}</h1>
        </div>
      </div>
      <div className='content'>
        <HTMLContent content={html} />
      </div>
    </section>
  )
}

const Tour = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Wrapper title={title} description={description}>
      <TourTemplate {...data.markdownRemark.frontmatter} html={data.markdownRemark.html} />
    </Wrapper>
  )
}

export default Tour

export const pageQuery = graphql`
  query TourById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        active
        title
        description
        startDate(formatString: "YYYY-MM-DD")
        endDate(formatString: "YYYY-MM-DD")
        price
        seats
        description
        tags
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