import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import { Page } from '../components/Base'
import Carousel from '../components/page/Carousel'

const useGallery = () => useStaticQuery(
  graphql`
    query asd {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            templateKey: { in: "tour" }
          }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              images {
                name
                image { ...imageFullWidth }
              }
            }
          }
        }
      }
    }
  `
).allMarkdownRemark.edges.map(({ node: { frontmatter: { images }}}) => images).flat()

const Gallery = () => (
  <Layout title='Galeria' description='galeria' slug='/galeria/'>
    <Page>
      <Carousel images={useGallery()} />
    </Page>
  </Layout>
)

export default Gallery
