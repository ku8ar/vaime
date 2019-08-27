import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import moment from 'moment'
import heart from '../img/heart.svg'
import instafeed from 'instafeed.js'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Centered from '../components/Centered'

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

const TourItem = ({image, title, subtitle, price, slug}) => (
  <Link to={slug} className='tour-item'>
      <div
        className="tour-item-top-wrapper bg-cover"
        style={{backgroundImage: `url(${image && image.childImageSharp ? image.childImageSharp.fluid.src : image})`}}
      >
        <div className='tour-item-content'>
          <p className='tour-item-info color-white'>{subtitle}</p>
          <button>Więcej</button>
        </div>
      </div>
      <div className='tour-item-bottom-wrapper'>
        <h6>{title}</h6>
        <div className='tour-item-column'>
          <img className='tour-item-icon' src={heart} />
          <h6 className='color-primary'>{price} EUR</h6>
        </div>
      </div>
  </Link>
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

// TEMPLATE
export const IndexPageTemplate = ({image, title, tours = [], team, ...props}) => (
  <section>
    <Hero image={image}>
      <Centered>
        <h1 className='color-white'>{title}</h1>
      </Centered>
    </Hero>
    <Section title={"Podróżuj razem z nami!"} className='bg-color-grey'>
      <Grid>
        {tours.map(({node}) => (
        <TourItem
          key={node.id}
          title={node.frontmatter.title}
          subtitle={`Dostępny temin: ${moment(node.frontmatter.startDate).format('DD.MM')}-${moment(node.frontmatter.endDate).format('DD.MM')}.${moment(node.frontmatter.endDate).format('YYYY')}`}
          price={node.frontmatter.price}
          image={node.frontmatter.image}
          slug={node.fields.slug}
        />
        ))}
      </Grid>
    </Section>
    <Section title={"Nasz Zespół!"}>
      <Grid>
        {(team || []).map((person, i) => (
        <TeamItem
          key={i}
          name={person.name}
          place={person.place}
          description={person.text}
          image={image}
        />
        ))}
      </Grid>
    </Section>
    <Instagram />
  </section>
)

const IndexPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter
  return (
    <Layout title={title} description={description}>
      <IndexPageTemplate {...data.markdownRemark.frontmatter} tours={data.allMarkdownRemark.edges} />
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
    allMarkdownRemark(filter: { frontmatter: { templateKey: { in: "tour" } } } ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            startDate
            price
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
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        team {
          name
          place
          text
        }
      }
    }
  }
`
