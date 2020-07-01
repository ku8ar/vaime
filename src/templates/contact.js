import React from 'react'
import { graphql } from 'gatsby'
import { path } from 'rambda'
import styled from 'styled-components'
import Cookies from '../components/Cookies'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Content, { HTMLContent } from '../components/Content'
import { Page, Center, H1, H5 } from '../components/Base'
import Section from '../components/page/Section'
import { Grid, Column } from '../components/page/Grid'
// import Info from '../components/page/Info'
import ContactForm from '../components/forms/ContactForm'
import Instagram from '../components/home/Instagram'

const RightColumn = styled(Column)`
  padding-left: 2rem;
  ${p => p.theme.mobile`
    padding-left: 0;
  `}
`

// @TODO: remove, not used
export const StandardContactTemplate = ({ title, images, html, background, qa, contact, contentComponent }) => {
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
        <Column size={50}>
          <Section><HtmlComponent content={html} /></Section>
        </Column>
        <RightColumn size={50}>
          <Section>
            <ContactForm />
          </Section>
          {/*       <Section>
            <Info />
          </Section> */}
        </RightColumn>
      </Grid>
      <Instagram />
      <Cookies />
    </Page>
  )
}

const StandardPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Layout title={title} description={description}>
      <StandardContactTemplate {...data.markdownRemark.frontmatter} html={data.markdownRemark.html} contentComponent={HTMLContent} />
    </Layout>
  )
}

export default StandardPage

export const pageQuery = graphql`
  query ContactPage {
    markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
      html
      frontmatter {
        title
        description
        images {
          name
          image { ...imageFullWidth }
        }
      }
    }
  }
`
