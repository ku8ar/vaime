import React from 'react'
import { path, sortBy, pipe, filter, head, prop, reverse } from 'rambda'
import { graphql } from 'gatsby'
import { calcYear } from '../utils/date'
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

const isTourInSameYear = pipe(
  path(['node', 'frontmatter', 'terms']),
  sortBy(prop('timestamp')),
  reverse,
  head,
  prop('startDate'),
  calcYear,
  year => year >= calcYear(+ new Date())
)

const sortTours = pipe(
  filter(isTourInSameYear),
  sortBy(path(['node', 'frontmatter', 'terms', 0, 'timestamp']))
)

export const HomeTemplate = ({ images, tours = [], team = [], aboutTitle, aboutImage, promoImage, html, contentComponent }) => {
  const HtmlComponent = contentComponent || Content

  const _tours = sortTours(tours)

  return (
    <Page>
      <Hero images={images}>
      </Hero>
      <InfoBelt />
      {_tours.length ? (
        <Section title={"Nasze oferty"}>
          <Grid>
            {_tours.map(({ node }) => (
              <TourTile
                key={node.id}
                tour={node.frontmatter}
                slug={node.fields.slug}
              />
            ))}
          </Grid>
        </Section>
      ) : null}
      <Section title={"O Nas"}>
        <Grid>
          {team.map(person => (
            <TeamTile
              key={person.name}
              person={person}
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
      <Section />
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
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            terms {
              startDate
              timestamp: startDate(formatString: "x")
              endDate
              price
              seats
            }
            active
            thumb { ...imageThumb }
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
          image { ...imageFullWidth }
        }
        aboutTitle
        aboutImage { ...imagHalfWidth }
        promoImage { ...imageFullWidth }
        team {
          name
          place
          text
          image { ...imageThumb }
        }
      }
    }
  }
`
