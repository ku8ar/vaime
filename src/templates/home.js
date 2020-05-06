import React from 'react'
import { graphql } from 'gatsby'
import Cookies from '../components/Cookies'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TourTile from '../components/TourTile'
import { Page, Grid } from '../components/Base'
import Section from '../components/home/Section'
import TeamTile from '../components/home/TeamTile'
import InfoBelt from '../components/home/InfoBelt'
import AboutUsSection from '../components/home/AboutUsSection'
import PromoSection from '../components/home/PromoSection'
import Instagram from '../components/home/Instagram'

export const HomeTemplate = ({ images, tours = [], team = [], aboutTitle, aboutImage, promoImage, html, contentComponent }) => {
  const HtmlComponent = contentComponent || Content
  return (
    <Page>
      <Hero images={images}>
      </Hero>
      <InfoBelt />
      <Section title={"Nasze oferty"}>
        <Grid>
          {tours.sort((a, b) => a.node.frontmatter.timestamp > b.node.frontmatter.timestamp).map(({ node }) => (
            <TourTile
              key={node.id}
              tour={node.frontmatter}
              slug={node.fields.slug}
            />
          ))}
        </Grid>
      </Section>
      <AboutUsSection
        title={aboutTitle}
        image={aboutImage}
      >
        <HtmlComponent content={html} />
      </AboutUsSection>
      <Section title={"Nasz Zespół"}>
        <Grid>
          {team.map(person => (
            <TeamTile
              key={person.name}
              person={person}
            />
          ))}
        </Grid>
      </Section>
      <PromoSection promoImage={promoImage} />
      <Instagram />
      <Cookies />
    </Page>
  )
}

export default ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Layout title={title} description={description}>
      <HomeTemplate {...data.markdownRemark.frontmatter} tours={data.allMarkdownRemark.edges} html={data.markdownRemark.html} contentComponent={HTMLContent} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { in: "tour" } }
      }
      sort: {
        fields: [frontmatter___startDate]
        order: DESC
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            startDate
            endDate
            timestamp: startDate(formatString: "x")
            price
            seats
            active
            thumb {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 50) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "home" } }) {
      html
      frontmatter {
        title
        description
        images {
          name
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        aboutTitle
        aboutImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        promoImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 50) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        team {
          name
          place
          text
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 50) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
