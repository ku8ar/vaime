import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Cookies from '../components/Cookies'
import { Page } from '../components/Base'
import Section from '../components/page/Section'
import { Grid, Column } from '../components/page/Grid'
import Info from '../components/page/Info'
import Instagram from '../components/page/Instagram'
import BlogTile from '../components/blog/BlogTile'
import App from 'src/components/app'

const useBlogList = () => useStaticQuery(
  graphql`
    query BlogListTemplate {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            templateKey: { in: "blog" }
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
              description
              thumb { ...imageBlog }
            }
          }
        }
      }
    }
  `
).allMarkdownRemark.edges

const Placeholder = styled.div`
  margin-top: 1.75rem;
`

const BlogList = () => (
  <App>
    <Layout title='Blog' description='Blog' slug='/blog/'>
      <Page>
        <Grid>
          <Column size={70}>
            <Placeholder />
            {useBlogList().map(({ node: { fields: { slug }, frontmatter } }) => (
              <BlogTile key={slug} slug={slug} {...frontmatter} />
            ))}
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
        <Cookies />
      </Page>
    </Layout>
  </App>
)

export default BlogList
