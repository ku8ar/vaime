import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import instafeed from 'instafeed.js'
import Layout from '../components/Layout'

const Hero = ({image, children}) => (
  <div
    className="hero-wrapper"
    style={{backgroundImage: `url(${image && image.childImageSharp ? image.childImageSharp.fluid.src : image})`}}
  >
    <div className='content hero-content'>
      {children}
    </div>
  </div>
)

const Centered = ({children}) => (
  <div className='flex-center'>
    {children}
  </div>
)

const Section = ({title, children, className}) => (
  <div className={className}>
    <div className={`content`}>
      <h2 className='color-primary flex-center-entire'>{title}</h2>
      {children}
    </div>
  </div>
)

const Grid = ({children}) => (
  <div className='flex-row-auto'>
    {children}
  </div>
)

const TourItem = ({image, title, subtitle, price}) => (
  <div className='tour-item'>
    <div
      className="tour-item-top-wrapper bg-cover"
      style={{backgroundImage: `url(${image && image.childImageSharp ? image.childImageSharp.fluid.src : image})`}}
    >
      <div className='tour-item-content'>
        <p className='color-white'>{subtitle}</p>
        <button>Więcej</button>
      </div>
    </div>
    <div className='tour-item-bottom-wrapper'>
      <h6>{title}</h6>
      <h6 className='color-primary'>{price} EUR</h6>
    </div>
  </div>
)

const TeamItem = ({image, name, place, description}) => (
  <div className='team-item'>
    <img className='avatar bg-cover' src={image && image.childImageSharp ? image.childImageSharp.fluid.src : image}/>
    <h4>{name}</h4>
    <h5>{place}</h5>
    <p>{description}</p>
  </div>
)

// @TODO: refactor
const Instagram = () => {
  useEffect(() => {
    const feed = new instafeed({
      get: 'user',
      limit: 12,
      accessToken: '10221529773.1677ed0.d596aafbded7483fb106dbfe6534952d',
      userId: 10221529773,
      template: '<a class="instafeed-item" href="{{link}}"><img  class="instafeed-item-image" src="{{image}}" /></a>'
    })
    feed.run()
  }, [])
  return <div className='instafeed' id='instafeed' />
}

export const IndexPageTemplate = ({image, title, ...props}) => (
  <section>
    <Hero image={image}>
      <Centered>
        <h1 className='color-white'>{title}</h1>
      </Centered>
    </Hero>
    <Section title={"Podrózuj razem z nami!"} className='bg-color-grey'>
      <Grid>
        {[0, 1, 2].map(key => (
        <TourItem
          key={key}
          title="Gruzinskie Wakacje"
          subtitle="Dostępny temin: 02-10 Sierpnia - 8 dni"
          price={550}
          image={image}
        />
        ))}
      </Grid>
    </Section>
    <Section title={"Nasz Zespół!"}>
      <Grid>
        {[0, 1].map(key => (
        <TeamItem
          key={key}
          name="Gia Suramelaszewnaszwili"
          place="Tbilisi"
          description="Przewodnik w cenie odpowiadającej jakości wycieczki. Jak sam o sobie mówi: 'Może i robimy chujowo, ale kto robi dobrze?!'"
          image={image}
        />
        ))}
      </Grid>
    </Section>
    <Instagram />
  </section>
)

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate {...data.markdownRemark.frontmatter} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
