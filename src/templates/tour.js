import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { View, Page, H2 } from '../components/Base'
import HeroTour from '../components/tour/HeroTour'
import Schedule from '../components/tour/Schedule'

export const TourTemplate = ({description, schedule, html, contentComponent, ...props}) => {
  const HtmlComponent = contentComponent || Content
  return (
    <Page>
      <HeroTour {...props} />
      <View>
        <H2>{description}</H2>
        <HtmlComponent content={html || ''} />
        <Schedule schedule={schedule} />
      </View>
    </Page>
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
        priceContains
        priceNotContains
        images {
          name
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
  }
`