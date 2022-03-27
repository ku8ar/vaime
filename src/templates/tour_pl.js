import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import App from 'src/components/app'
import TourTemplate from 'src/containers/tour'

const Tour = ({ data }) => {
  const { title, description, seoImage } = data.markdownRemark.frontmatter
  const slug = data.markdownRemark.fields.slug

  return (
    <App lang={data.markdownRemark.frontmatter.lang}>
      <Layout title={title} description={description} seoImage={seoImage} slug={slug}>
        <TourTemplate
          {...data.markdownRemark.frontmatter}
          html={data.markdownRemark.html}
          contentComponent={HTMLContent}
          slug={slug}
        />
      </Layout>
    </App>
  )
}

export default Tour

export const pageQuery = graphql`
  query TourByIdPL($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        lang
        active
        oneDay
        minSeats
        title
        description
        discount
        tileTitle
        informations
        terms {
          startDate(formatString: "YYYY-MM-DD")
          endDate(formatString: "YYYY-MM-DD")
          timestamp: startDate(formatString: "x")
          daysCount
          price
          seats
        }
        schedule {
          day
          place
          text
        }
        priceContains {
          text
          icon
        }
        priceNotContains {
          text
          icon
        }
        thumb { ...imageTile }
        seoImage: thumb { ...imageSeo }
        map { ...imageFullWidthSvg }
        images {
          name
          image { ...imageFullWidth }
        }
      }
    }
  }
`