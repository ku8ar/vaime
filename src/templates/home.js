import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Section from '../components/home/Section'
import Instagram from '../components/home/Instagram'
import TeamTile from '../components/home/TeamTile'
import TourTile from '../components/TourTile'
import {Grid} from '../components/Base'

export const HomeTemplate = ({ images, tours = [], team = [] }) => (
  <section>
    <Hero images={images}>
    </Hero>
    <Section title={"Podróżuj razem z nami!"} color='colorGrey'>
      <Grid>
        {tours.map(({ node }) => (
          <TourTile
            key={node.id}
            tour={node.frontmatter}
            slug={node.fields.slug}
          />
        ))}
      </Grid>
    </Section>
    <Section title={"Nasz Zespół!"}>
      <Grid>
        {team.map(person => (
          <TeamTile
            key={person.name}
            person={person}
          />
        ))}
      </Grid>
    </Section>
    <Instagram />
  </section>
)

export default ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Layout title={title} description={description}>
      <HomeTemplate {...data.markdownRemark.frontmatter} tours={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPageTemplate {
    allMarkdownRemark(filter: { frontmatter: { templateKey: { in: "tour" } } } ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            startDate
            price
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
    markdownRemark(frontmatter: { templateKey: { eq: "home" } }) {
      frontmatter {
        title
        description
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
        team {
          name
          place
          text
        }
      }
    }
  }
`
