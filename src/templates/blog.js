import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { path, prop } from 'rambda'
import Cookies from '../components/Cookies'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Content, { HTMLContent } from '../components/Content'
import { Page, H1 } from '../components/Base'
import Section from '../components/page/Section'
import { Grid } from '../components/page/Grid'
import App from 'src/components/app'

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
`

export const BlogTemplate = ({ title, images, html, background, contentComponent }) => {
  const HtmlComponent = contentComponent || Content
  const bg = path('childImageSharp.fluid.src', background) || background

  return (
    <Page background={bg}>
      <Hero images={images}>
        <Center>
          <H1 color='colorWhite'>{title}</H1>
        </Center>
      </Hero>
      < Grid>
      {html && (<Section><HtmlComponent content={html} /></Section>)}
      </Grid>
      <Cookies />
    </Page>
  )
}

const BlogPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  const slug = data.markdownRemark.fields.slug
  const seoImage = prop('image', data.markdownRemark.frontmatter.images[0])

  return (
    <App lang={data.markdownRemark.frontmatter.lang}>
      <Layout title={title} description={description} slug={slug} seoImage={seoImage}>
        <BlogTemplate {...data.markdownRemark.frontmatter} html={data.markdownRemark.html} contentComponent={HTMLContent} />
      </Layout>
    </App>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query BlogPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        lang
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
