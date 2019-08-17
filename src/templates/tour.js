import React from 'react'
import { graphql } from 'gatsby'
import Wrapper from '../components/Wrapper'
import { HTMLContent } from '../components/Content'

export const TourTemplate = ({title, description, image, startDate, endDate, price, schedule, html}) => {

  return (
    <section>
      <div
        className="hero-wrapper"
        style={{backgroundImage: `url(${image && image.childImageSharp ? image.childImageSharp.fluid.src : image})`}}
      >
        <div className='content hero-content'>
          <div className='hero-column flex-start'>
            <h1 className='color-white'>{title}</h1>
            <h2 className='color-white'>{description}</h2>
            <div className='hero-info'>
              <div className='hero-pill'>
                <div className='hero-pill-title color-white'>Termin</div>
                <div className='hero-pill-value color-white'>{startDate}</div>
              </div>
              <div className='hero-pill'>
                <div className='hero-pill-title color-white'>Liczba dni</div>
                <div className='hero-pill-value color-white'>0 dni / 0 nocy</div>
              </div>
              <div className='hero-pill'>
                <div className='hero-pill-title color-white'>Wolne miejsca</div>
                <div className='hero-pill-value color-white'>0</div>
              </div>
              <div className='hero-pill'>
                <div className='hero-pill-title color-white'>Cena</div>
                <div className='hero-pill-value color-white'>{price}</div>
              </div>
            </div>
          </div>
          <div className='hero-column flex-end'>
            <button>Zarezerwuj Termin</button>
          </div>
        </div>
      </div>
      <div className='content'>
        <HTMLContent content={html} />
        <h3>Dzień</h3>
        <div className='tour-days'>
          {(schedule || []).map(s => (
            <div />
          ))}
        </div>
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