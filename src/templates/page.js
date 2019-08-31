import React, { useState, useCallback } from 'react'
import Wrapper from '../components/Layout'
import Hero from '../components/Hero'
import Content, { HTMLContent } from '../components/Content'
import { Center } from '../components/Base'

const FaqItem = ({question, answer}) => {

  const [open, setOpen] = useState(false)

  const swipe = useCallback(() => setOpen(!open), [open])

  return (
    <div className='faq-item' onClick={swipe}>
      <div className='faq-icon'>
        ?
      </div> 
      <div className='faq-column'>
        <p className='faq-question'><strong>{question}</strong></p>
        {open && <p className='faq-answer'>{answer}</p>}
      </div>
    </div>
  )
}

const Faq = ({list}) => (
  <div className='faq'>
    {list && list.map((el, i) => (
      <FaqItem key={i} {...el} />
    ))}
  </div>
)

export const StandardPageTemplate = ({title, image, html, qa, contentComponent}) => {
  const HtmlComponent = contentComponent || Content
  return (
    <section>
      <Hero image={image} small>
        <Center>
          <h1 className='color-white'>{title}</h1>
        </Center>
      </Hero>
      {qa && qa.length && (
        <div className='content m-t-s m-b-s'>
          <Faq list={qa} />
        </div>
      )}
      {html && (
      <div className='content m-t-s m-b-s'>
        {<HtmlComponent content={html} />}
      </div>
      )}
    </section>
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
