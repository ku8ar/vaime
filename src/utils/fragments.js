import {graphql} from 'gatsby'

export const bannerImage = graphql`
  fragment imageFullWidth on File {
    childImageSharp {
      fluid(maxWidth: 1920, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment imagHalfWidth on File {
    childImageSharp {
      fluid(maxWidth: 960, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  fragment imageThumb on File {
    childImageSharp {
      fluid(maxWidth: 400, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
