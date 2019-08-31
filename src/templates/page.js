import React from 'react'
import Wrapper from '../components/Layout'
import Hero from '../components/Hero'
import Content, { HTMLContent } from '../components/Content'
import { Page, Center } from '../components/Base'
import Faq from '../components/page/Faq'
import Section from '../components/page/Section'

export const StandardPageTemplate = ({title, image, html, qa, contentComponent}) => {
  const HtmlComponent = contentComponent || Content
  return (
    <Page>
      <Hero image={image} small>
        <Center>
          <h1 className='color-white'>{title}</h1>
        </Center>
      </Hero>
      <Faq list={qa} />
      {html && (<Section>{<HtmlComponent content={html} />}</Section>)}
    </Page>
  )
}

const StandardPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Wrapper title={title} description={description}>
      <StandardPageTemplate {...data.markdownRemark.frontmatter} html={data.markdownRemark.html} contentComponent={HTMLContent} />
    </Wrapper>
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
`
