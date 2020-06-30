import React from 'react'
import { graphql } from 'gatsby'
import { path, prop } from 'rambda'
import Cookies from '../components/Cookies'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Content, { HTMLContent } from '../components/Content'
import { Page, Center, H1 } from '../components/Base'
import Services from '../components/page/Services'
import Faq from '../components/page/Faq'
import Section from '../components/page/Section'
import { Grid, Column } from '../components/page/Grid'
import Info from '../components/page/Info'
import Instagram from '../components/page/Instagram'
import Carousel from '../components/page/Carousel'
import GridSection from '../components/page/GridSection'
import ContactForm from '../components/forms/ContactForm'
import TextSection from '../components/page/TextSection'
import Flights from '../components/page/Flights'

export const StandardPageTemplate = ({ title, images, carousel, html, background, qa, contact, grid, hideInstagram, hideContact, showFlights, text, contentComponent, services }) => {
  const HtmlComponent = contentComponent || Content
  const bg = path('childImageSharp.fluid.src', background) || background
  const hideInfo = hideContact && hideInstagram && !showFlights

  return (
    <Page background={bg}>
      <Hero images={images} small>
        <Center>
          <H1 color='colorWhite'>{title}</H1>
        </Center>
      </Hero>
      <Grid>
        <Column size={hideInfo ? 100 : 70}>
          {html && (<Section><HtmlComponent content={html} /></Section>)}
          <Services services={services} />
          <Faq list={qa} />
          {contact && <ContactForm />}
        </Column>
        {!hideInfo && (
          <Column size={30}>
            {showFlights && <Flights />}
            {!hideContact && (
              <Section>
                <Info />
              </Section>
            )}
            {!hideInstagram && (
              <Section>
                <Instagram />
              </Section>
            )}
          </Column>
        )}
        <GridSection data={grid} />
        <TextSection text={text} />
      </Grid>
          <Section><Carousel images={carousel} /></Section>
      <Cookies />
    </Page>
  )
}

const StandardPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  const slug = data.markdownRemark.fields.slug
  const seoImage = prop('image', data.markdownRemark.frontmatter.images[0])

  return (
    <Layout title={title} description={description} slug={slug} seoImage={seoImage}>
      <StandardPageTemplate {...data.markdownRemark.frontmatter} html={data.markdownRemark.html} contentComponent={HTMLContent} />
    </Layout>
  )
}

export default StandardPage

export const pageQuery = graphql`
  query StandardPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        services {
          title
          text
          icon
        }
        qa {
          question
          answer
        }
        images {
          name
          image { ...imageFullWidth }
        }
        carousel {
          name
          image { ...imageFullWidth }
        }
        contact
        hideInstagram
        hideContact
        showFlights
        text
        grid {
          image0 { ...imageTile }
          image1 { ...imageTile }
          title
          text
        }
      }
    }
  }
`
