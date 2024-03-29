import React from 'react'
import { path, sortBy, pipe, filter, head, prop, reverse, not, map, groupBy } from 'rambda'
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
import BlogSection from '../components/home/BlogSection'
import Instagram from '../components/home/Instagram'
import Reviews from '../components/home/Reviews'
import HeroContent from '../components/home/HeroContent'
import JsonLd, { siteUrl } from '../components/custom/JsonLd'
import App from 'src/components/app'

const getIsOneDay = path(['node', 'frontmatter', 'oneDay'])
const getIsMultiDay = pipe(getIsOneDay, not)
const getTourYear = pipe(
  path(['node', 'frontmatter', 'terms', 0, 'startDate']),
  calcYear
)

// @TODO: put into graphql
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

const getMutliDayTourMap = pipe(
  filter(getIsMultiDay),
  groupBy(getTourYear)
)

const filterOneDayTours = filter(getIsOneDay)

export const HomeTemplate = ({ images, tours = [], team = [], aboutTitle, aboutImage, promoImage, html, title, contentComponent, reviews, reviewImage, reviewVideo, reviewPreview, ...props }) => {
  const HtmlComponent = contentComponent || Content

  const _tours = sortTours(tours)
  const _multiDayToursMap = getMutliDayTourMap(_tours)
  const _oneDayTours = filterOneDayTours(_tours)

  return (
    <Page>
      <Hero images={images} dark fullScreen noWrapper>
        <HeroContent {...props}>
          <InfoBelt {...props} />
        </HeroContent>
      </Hero>
      <div>
      {
        Object.entries(_multiDayToursMap || {}).map(
          ([year, list]) => (
            <Section key={year} title={`Oferty ${year}`}>
              <Grid>
                {(list || []).map(({ node }) => (
                  <TourTile
                    key={node.id}
                    tour={node.frontmatter}
                    slug={node.fields.slug}
                  />
                ))}
              </Grid>
            </Section>
          )
        )
      }
      {_oneDayTours.length ? (
        <Section title={"Wycieczki jednodniowe"}>
          <Grid>
            {_oneDayTours.map(({ node }) => (
              <TourTile
                key={node.id}
                tour={node.frontmatter}
                slug={node.fields.slug}
              />
            ))}
          </Grid>
        </Section>
      ) : null}
      </div>
      <AboutUsSection
        title={aboutTitle}
        image={aboutImage}
      >
        <HtmlComponent content={html} />
      </AboutUsSection>
      <Section>
        <Grid>
          {team.map(person => (
            <TeamTile
              key={person.name}
              person={person}
            />
          ))}
        </Grid>
      </Section>
      <Reviews reviews={reviews} reviewImage={reviewImage} reviewVideo={reviewVideo} reviewPreview={reviewPreview} />
      <BlogSection {...props} />
      <PromoSection promoImage={promoImage} />
      <Instagram />
      <Cookies />
    </Page>
  )
}

const getStructuredTours = pipe(
  map((tour, index) => {
    const slug = path(['node', 'fields', 'slug'], tour)
    const title = path(['node', 'frontmatter', 'title'], tour)
    const image = path(['node', 'frontmatter', 'thumb', 'childImageSharp', 'fluid', 'src'], tour)
    return {
      "@type": "ListItem",
      "name": title,
      "position": index + 1,
      "image": `${siteUrl}${image}`,
      "url": `${siteUrl}${slug}`
    }
  })
)

export default ({ data, ...props }) => {
  const { title, description } = data.markdownRemark.frontmatter
  const slug = data.markdownRemark.fields.slug

  const lang = data.markdownRemark.frontmatter.lang
  const isEn = lang === 'en'
  const toursPl = data.toursPl.edges
  const toursEn = data.toursEn.edges
  const tours = isEn ? toursEn : toursPl

  return (
    <App lang={data.markdownRemark.frontmatter.lang}>
      <Layout title={title} description={description} slug={slug}>
        <JsonLd>
          {{
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'itemListElement': getStructuredTours(tours),
          }}
        </JsonLd>
        <HomeTemplate {...data.markdownRemark.frontmatter} tours={tours} html={data.markdownRemark.html} contentComponent={HTMLContent} />
      </Layout>
    </App>
  )
}

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    toursPl: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { in: "tour_pl" }
          active: { eq: true }
        }
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
            discount
            tileTitle
            terms {
              startDate(formatString: "YYYY-MM-DD")
              timestamp: startDate(formatString: "x")
              endDate(formatString: "YYYY-MM-DD")
              price
              seats
            }
            active
            oneDay
            thumb { ...imageTile }
          }
        }
      }
    }
    toursEn: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { in: "tour_en" }
          active: { eq: true }
        }
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
            discount
            tileTitle
            terms {
              startDate(formatString: "YYYY-MM-DD")
              timestamp: startDate(formatString: "x")
              endDate(formatString: "YYYY-MM-DD")
              price
              seats
            }
            active
            oneDay
            thumb { ...imageTile }
          }
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        lang
        title
        description
        heroTitle
        heroSubtitle
        heroButtonTitle
        heroInfoBelt {
          icon
          label
        }
        images {
          name
          image { ...imageFullWidth }
        }
        aboutTitle
        aboutImage { ...imageHalfWidth }
        promoImage { ...imageViewWidthSvg }
        team {
          name
          place
          text
          image { ...imageAvatar }
        }
        reviewVideo
        reviewImage { ...imageFullWidth }
        reviewPreview { ...imagePreview }
        reviews {
          author
          place
          text
          stars
        }
        blogTitle
        blogDescription
        blogButton
        blogImages {
          name
          image { ...imageTile }
        }
      }
    }
  }
`
