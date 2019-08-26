import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TourTemplate = ({title, description, image, startDate, endDate, price, schedule, html, contentComponent, ...props}) => {
  const HtmlComponent = contentComponent || Content
  return (
    <section>
      <div
        className="hero-wrapper"
        style={{backgroundImage: `url(${image && image.childImageSharp ? image.childImageSharp.fluid.src : image})`}}
      >
        <div className='content hero-content'>
          <div className='hero-column flex-start'>
            <h1 className='color-white'>{title}</h1>
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
                <div className='hero-pill-value color-white'>{price} EUR</div>
              </div>
            </div>
          </div>
          <div className='hero-column flex-end'>
            <button>Zarezerwuj Termin</button>
          </div>
        </div>
      </div>
      <div className='content'>
        <h2>{description}</h2>
        {html && <HtmlComponent content={html} />}
        <div className='column m-t-s'>
          <h6>Dzień</h6>
          <div className='column'>
            {(schedule || []).map(s => (
              <div key={s.day} className='row'>
                <div className='column m-t-xxs'>
                  <div className='day-circle'>{s.day}</div>
                </div>
                <div className='column'>
                  <h4 className='m-b-0 m-t-0'>{s.place}</h4>
                  <p className='m-t-0'>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Tour = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Layout title={title} description={description}>
      <TourTemplate {...data.markdownRemark.frontmatter} html={data.markdownRemark.html} contentComponent={HTMLContent} />
    </Layout>
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
        schedule {
          day
          place
          text
        }
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