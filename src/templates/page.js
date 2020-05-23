import React from 'react'
import { graphql } from 'gatsby'
import { path } from 'rambda'
import Cookies from '../components/Cookies'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Content, { HTMLContent } from '../components/Content'
import { Page, Center, H1, H5 } from '../components/Base'
import Faq from '../components/page/Faq'
import Section from '../components/page/Section'
import { Grid, Column } from '../components/page/Grid'
import Info from '../components/page/Info'
import Instagram from '../components/page/Instagram'
import Carousel from '../components/page/Carousel'
import ContactForm from '../components/forms/ContactForm'

export const StandardPageTemplate = ({ title, images, carousel, html, background, qa, contact, contentComponent }) => {
  const HtmlComponent = contentComponent || Content
  const bg = path('childImageSharp.fluid.src', background) || background
  return (
    <Page background={bg}>
      <Hero images={images} small>
        <Center>
          <H1 color='colorWhite'>{title}</H1>
        </Center>
      </Hero>
      <Grid>
        <Column size={70}>
          <Section><Faq list={qa} /></Section>
          {html && (<Section><HtmlComponent content={html} /></Section>)}
          {contact && (
            <>
              <Section>
                <H5>Napisz do nas</H5>
              </Section>
              <Section>
                <ContactForm />
              </Section>
            </>
          )}
        </Column>
        <Column size={30}>
          <Section>
            <Info />
          </Section>
          <Section>
            <Instagram />
          </Section>
        </Column>
      </Grid>
      <Grid>
        <Column size={100}>
          <Section><Carousel images={carousel} /></Section>
        </Column>
      </Grid>
      <Cookies />
    </Page>
  )
}

const StandardPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Layout title={title} description={description}>
      <StandardPageTemplate {...data.markdownRemark.frontmatter} html={data.markdownRemark.html} contentComponent={HTMLContent} />
    </Layout>
  )
}

export default StandardPage

export const pageQuery = graphql`
  query StandardPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
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
      }
    }
  }
`
