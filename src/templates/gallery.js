import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Carousel from '../components/page/Carousel'
import App from 'src/components/app'

const useGallery = () => useStaticQuery(
  graphql`
    query asd {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            templateKey: { in: "tour_pl" }
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
).allMarkdownRemark.edges.map(({ node: { frontmatter: { images } } }) => images).flat()

const Gallery = () => (
  <App lang={'pl'}>
    <Layout title='Galeria' description='galeria' slug='/galeria/'>
      <Carousel images={useGallery()} />
    </Layout>
  </App>
)

export default Gallery
